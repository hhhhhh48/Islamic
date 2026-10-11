const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const crypto = require('crypto');

const app = express();
const PORT = process.env.PORT || 3000;

const DB_FILE = path.join(__dirname, 'shahada-data.json');
const IP_CACHE_FILE = path.join(__dirname, 'ip-cache.json');

// ═══ بيانات المسؤول ═══
const ADMIN_USER = 'Mohamed ouachemi 7';
const ADMIN_PASS = 'jsk esmk';
const sessions = new Map(); // token -> { created }

// ═══ قواعد البيانات ═══
function loadJSON(file, fallback) {
  try { if (fs.existsSync(file)) return JSON.parse(fs.readFileSync(file, 'utf8')); } catch (e) {}
  return fallback;
}
function saveJSON(file, data) {
  try { fs.writeFileSync(file, JSON.stringify(data, null, 2), 'utf8'); } catch (e) {}
}

let db = loadJSON(DB_FILE, {
  total_shahadas: 0,
  total_visits: 0,
  shahada_countries: {},   // { DZ: { country, cnt } }
  visit_countries: {},     // { DZ: { country, cnt } }
  recent_shahadas: [],     // آخر 50 شهادة: { name, country, country_code, ts }
  updated_at: new Date().toISOString()
});

// توافق مع نسخة قديمة
if (!db.total_visits) db.total_visits = 0;
if (!db.shahada_countries && db.countries) db.shahada_countries = db.countries;
if (!db.shahada_countries) db.shahada_countries = {};
if (!db.visit_countries) db.visit_countries = {};
if (!db.recent_shahadas) db.recent_shahadas = [];

let ipCache = loadJSON(IP_CACHE_FILE, {});

// حفظ دوري
setInterval(() => saveJSON(DB_FILE, db), 30000);

// ═══ Middlewares ═══
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname, { index: 'index.html' }));

// ═══ تتبع الزيارات ═══
app.use(async (req, res, next) => {
  // تجاهل ملفات static وبعض المسارات
  const p = req.path;
  if (p.startsWith('/api') || p === '/admin.html' || p === '/favicon.ico' ||
      p.endsWith('.css') || p.endsWith('.js') || p.endsWith('.map') ||
      p.endsWith('.png') || p.endsWith('.jpg') || p.endsWith('.svg')) {
    return next();
  }
  // تتبع زيارة واحدة لكل IP كل 30 دقيقة
  const ip = getClientIP(req);
  const clean = ip.replace(/^::ffff:/, '');
  const now = Date.now();
  if (!ipCache['_last_visit_' + clean] || now - ipCache['_last_visit_' + clean] > 30 * 60 * 1000) {
    ipCache['_last_visit_' + clean] = now;
    db.total_visits = (db.total_visits || 0) + 1;
    db.updated_at = new Date().toISOString();
    // جلب الدولة (async بدون انتظار)
    lookupCountry(ip).then(info => {
      if (info.country_code && info.country_code !== 'UN') {
        if (!db.visit_countries[info.country_code]) {
          db.visit_countries[info.country_code] = { country: info.country, cnt: 0 };
        }
        db.visit_countries[info.country_code].cnt += 1;
        saveJSON(DB_FILE, db);
      }
    }).catch(()=>{});
  }
  next();
});

// ═══ Helpers ═══
function getClientIP(req) {
  const fwd = req.headers['x-forwarded-for'];
  if (fwd) return String(fwd).split(',')[0].trim();
  return req.socket.remoteAddress || '';
}
function isPrivateIP(ip) {
  if (!ip) return true;
  const clean = ip.replace(/^::ffff:/, '');
  return clean === '::1' || clean.startsWith('127.') || clean.startsWith('192.168.') ||
         clean.startsWith('10.') || clean.startsWith('172.16.') || clean.startsWith('172.17.') ||
         clean.startsWith('172.18.') || clean.startsWith('172.19.') || clean.startsWith('172.2') ||
         clean.startsWith('172.30.') || clean.startsWith('172.31.');
}
async function lookupCountry(ip) {
  if (!ip || isPrivateIP(ip)) return { country: 'Local', country_code: 'UN' };
  const clean = ip.replace(/^::ffff:/, '');
  if (ipCache[clean] && ipCache[clean].country_code) return ipCache[clean];
  try {
    const controller = new AbortController();
    const t = setTimeout(() => controller.abort(), 4000);
    const r = await fetch('http://ip-api.com/json/' + clean + '?fields=status,country,countryCode', { signal: controller.signal });
    clearTimeout(t);
    const d = await r.json();
    if (d.status === 'success') {
      const res = { country: d.country, country_code: d.countryCode };
      ipCache[clean] = res;
      saveJSON(IP_CACHE_FILE, ipCache);
      return res;
    }
  } catch (e) {}
  return { country: 'Unknown', country_code: 'UN' };
}

function authMiddleware(req, res, next) {
  const auth = req.headers['authorization'] || '';
  const token = auth.replace('Bearer ', '').trim();
  if (!token || !sessions.has(token)) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  // انتهاء الصلاحية بعد 12 ساعة
  const s = sessions.get(token);
  if (Date.now() - s.created > 12 * 60 * 60 * 1000) {
    sessions.delete(token);
    return res.status(401).json({ error: 'Session expired' });
  }
  next();
}

// ═══ Public API ═══
app.post('/api/shahada', async (req, res) => {
  const ip = getClientIP(req);
  const info = await lookupCountry(ip);
  const country = info.country;
  const country_code = info.country_code;
  const { firstName, lastName } = req.body || {};

  db.total_shahadas += 1;
  db.updated_at = new Date().toISOString();

  if (country_code && country_code !== 'UN') {
    if (!db.shahada_countries[country_code]) {
      db.shahada_countries[country_code] = { country: country, cnt: 0 };
    }
    db.shahada_countries[country_code].cnt += 1;
  }

  // سجل آخر 50 شهادة
  db.recent_shahadas.unshift({
    name: ((firstName || '') + ' ' + (lastName || '')).trim() || 'Anonymous',
    country: country || 'Unknown',
    country_code: country_code || 'UN',
    ts: new Date().toISOString()
  });
  if (db.recent_shahadas.length > 50) db.recent_shahadas = db.recent_shahadas.slice(0, 50);

  saveJSON(DB_FILE, db);

  res.json({
    ok: true,
    count: db.total_shahadas,
    rank: db.total_shahadas,
    yourCountry: country
  });
});

// endpoint قديم للتوافق — لا يعرض العداد للعامة
app.get('/api/count', (req, res) => {
  res.json({ count: 0, countries: [] }); // محجوب
});

// ═══ Admin API ═══
app.post('/api/admin/login', (req, res) => {
  const { username, password } = req.body || {};
  if (username === ADMIN_USER && password === ADMIN_PASS) {
    const token = crypto.randomBytes(32).toString('hex');
    sessions.set(token, { created: Date.now() });
    return res.json({ ok: true, token });
  }
  // تأخير لمنع brute force
  setTimeout(() => res.status(401).json({ ok: false, error: 'بيانات خاطئة' }), 800);
});

app.post('/api/admin/logout', authMiddleware, (req, res) => {
  const auth = req.headers['authorization'] || '';
  const token = auth.replace('Bearer ', '').trim();
  sessions.delete(token);
  res.json({ ok: true });
});

app.get('/api/admin/stats', authMiddleware, (req, res) => {
  const shahadaCountries = Object.entries(db.shahada_countries)
    .map(([code, info]) => ({ code, country: info.country, cnt: info.cnt }))
    .sort((a, b) => b.cnt - a.cnt);

  const visitCountries = Object.entries(db.visit_countries)
    .map(([code, info]) => ({ code, country: info.country, cnt: info.cnt }))
    .sort((a, b) => b.cnt - a.cnt);

  res.json({
    total_shahadas: db.total_shahadas,
    total_visits: db.total_visits || 0,
    shahada_countries: shahadaCountries,
    visit_countries: visitCountries,
    recent_shahadas: db.recent_shahadas || [],
    updated_at: db.updated_at,
    server_time: new Date().toISOString()
  });
});

app.get('/api/admin/check', authMiddleware, (req, res) => res.json({ ok: true }));

// ═══ Fallbacks ═══
app.get('*', (req, res) => {
  // منع الوصول المباشر لصفحة admin بدون تسجيل
  if (req.path === '/admin' || req.path === '/admin/') {
    return res.sendFile(path.join(__dirname, 'admin.html'));
  }
  res.sendFile(path.join(__dirname, 'index.html'));
});

// حفظ عند الإغلاق
process.on('SIGINT', () => { saveJSON(DB_FILE, db); saveJSON(IP_CACHE_FILE, ipCache); process.exit(0); });
process.on('SIGTERM', () => { saveJSON(DB_FILE, db); saveJSON(IP_CACHE_FILE, ipCache); process.exit(0); });

app.listen(PORT, () => {
  console.log('');
  console.log('  ═══════════════════════════════════════════');
  console.log('   🕌 Shahada Server v4.0');
  console.log('   🌐 http://localhost:' + PORT);
  console.log('   🔐 Admin: http://localhost:' + PORT + '/admin');
  console.log('  ═══════════════════════════════════════════');
  console.log('');
});
