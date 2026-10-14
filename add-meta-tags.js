// add-meta-tags.js — Add SEO + OG + Twitter meta tags to all pages
const fs = require('fs');

const SITE_URL = 'https://www.mohammedouachemi.work.gd';
const SITE_NAME = 'بيتك الجديد';
const DEFAULT_IMAGE = SITE_URL + '/logo.png';
const MARKER_START = '<!-- ═══ MANAGED META TAGS ═══ -->';
const MARKER_END = '<!-- ═══ END MANAGED META TAGS ═══ -->';

const PAGES = {
  'index.html': {
    title: 'بيتك الجديد · Welcome Home',
    desc: 'موقع إسلامي شامل — الشهادة، القرآن الكريم، أسماء الله، الأذكار، الرقية، قصص الأنبياء، حاسبة الزكاة، وغيرها بـ 10 لغات',
    image: 'logo.png'
  },
  'god.html': {
    title: 'تعريف الله · هل الله موجود؟',
    desc: 'حجج منطقية وعلمية لمن يبحث عن الحق — بالعربية والإنجليزية. أدلة الكون، الضمير، والدقة المذهلة',
    image: 'logo.png'
  },
  'god-en.html': {
    title: 'Does God Exist? · Evidence & Logic',
    desc: 'Logical and scientific arguments for seekers of truth. Cosmic precision, consciousness, morality',
    image: 'logo.png'
  },
  'about-god.html': {
    title: 'تعريف الله · هل الله موجود؟',
    desc: 'حجج منطقية لمن يبحث عن الحق — الأدلة الكونية والعلمية',
    image: 'logo.png'
  },
  'names.html': {
    title: 'أسماء الله الحسنى · 99 Names of Allah',
    desc: '99 اسماً حسناً بمعانيها — من الكتاب والسنة',
    image: 'logo.png'
  },
  'faq.html': {
    title: 'الأسئلة الشائعة · FAQ for New Muslims',
    desc: 'أجوبة واضحة للمسلم الجديد من الكتاب والسنة',
    image: 'logo.png'
  },
  'adhkar.html': {
    title: 'الأذكار اليومية · Daily Adhkar',
    desc: 'أذكار الصباح والمساء، النوم، الطعام، والسفر — مع فضل كل ذكر',
    image: 'logo.png'
  },
  'journey.html': {
    title: 'رحلتي · My Journey',
    desc: 'تتبع رحلتك اليومية في الإسلام بإنجازات وإحصائيات',
    image: 'logo.png'
  },
  'tree.html': {
    title: 'شجرة الإيمان · Faith Tree',
    desc: 'شجرة تنمو مع كل عمل صالح — تتبع أعمالك الصالحة',
    image: 'logo.png'
  },
  'first40.html': {
    title: 'أول 40 يوم · First 40 Days',
    desc: 'برنامج يومي متدرج للمسلم الجديد: آية + حديث + دعاء + تحدي',
    image: 'logo.png'
  },
  'questions.html': {
    title: 'الأسئلة الصعبة · Hard Questions',
    desc: 'لكل سؤال جواب — أسئلة للمسلمين وغير المسلمين',
    image: 'logo.png'
  },
  'cards.html': {
    title: 'بطاقات النور · Cards of Light',
    desc: 'صمم بطاقات إسلامية جميلة وشاركها',
    image: 'logo.png'
  },
  'numbers.html': {
    title: 'حياتي بالأرقام · My Life in Numbers',
    desc: 'إحصائيات رحلتك في الإسلام — كم صلاة، كم سجدة، كم ذكر',
    image: 'logo.png'
  },
  'ruqyah.html': {
    title: 'الرقية الشرعية · Islamic Ruqyah',
    desc: 'شفاء بالقرآن والسنة — بـ 10 لغات',
    image: 'logo.png'
  },
  'halal.html': {
    title: 'الحلال والحرام · Halal & Haram',
    desc: 'دليل شامل للمسلم: الطعام، المال، اللباس، العلاقات، والكلام',
    image: 'logo.png'
  },
  'algeria.html': {
    title: 'حبيبتي الجزائر · My Beloved Algeria',
    desc: 'بلد المليون شهيد — الإسلام، التاريخ، المعالم، والعلماء',
    image: 'logo.png'
  },
  'prophets.html': {
    title: 'قصص الأنبياء · Stories of the Prophets',
    desc: '7 قصص كبرى من آدم إلى محمد ﷺ — مع الدروس',
    image: 'logo.png'
  },
  'hajj.html': {
    title: 'دليل الحج والعمرة · Hajj & Umrah Guide',
    desc: 'خطوة بخطوة مع الأدعية والسنن',
    image: 'logo.png'
  },
  'zakat.html': {
    title: 'حاسبة الزكاة · Zakat Calculator',
    desc: 'احسب زكاتك بدقة — 12 عملة عربية وعالمية',
    image: 'logo.png'
  },
  'baby-names.html': {
    title: 'أسماء المولود · Baby Names',
    desc: '180 اسماً بمعانيها الجميلة — أولاد وبنات',
    image: 'logo.png'
  },
  'hijri.html': {
    title: 'التقويم الهجري · Hijri Calendar',
    desc: 'التاريخ الهجري والمناسبات الإسلامية',
    image: 'logo.png'
  },
  'world-map.html': {
    title: 'خريطة الدول الإسلامية · Muslim World Map',
    desc: 'الدول الإسلامية حول العالم — بعدد السكان والمسلمين',
    image: 'logo.png'
  },
  'quran.html': {
    title: 'القرآن الكريم · The Holy Quran',
    desc: 'اقرأ المصحف الشريف كاملاً — 114 سورة',
    image: 'logo.png'
  }
};

function buildMetaBlock(file, config) {
  const pageUrl = file === 'index.html' 
    ? SITE_URL + '/' 
    : SITE_URL + '/' + file;
  const imageUrl = SITE_URL + '/' + (config.image || 'logo.png');

  return `
${MARKER_START}
  <!-- SEO -->
  <meta name="description" content="${config.desc}">
  <meta name="author" content="واشمي محمد">
  <meta name="robots" content="index, follow">
  <meta name="theme-color" content="#0d5c3a">
  <link rel="canonical" href="${pageUrl}">

  <!-- Open Graph (WhatsApp, Facebook, Telegram) -->
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="${SITE_NAME}">
  <meta property="og:title" content="${config.title}">
  <meta property="og:description" content="${config.desc}">
  <meta property="og:url" content="${pageUrl}">
  <meta property="og:image" content="${imageUrl}">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:alt" content="${config.title}">
  <meta property="og:locale" content="ar_AR">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${config.title}">
  <meta name="twitter:description" content="${config.desc}">
  <meta name="twitter:image" content="${imageUrl}">
${MARKER_END}
`;
}

function processPage(file, config) {
  let html = fs.readFileSync(file, 'utf8');
  
  // Remove previous managed block
  const blockRegex = new RegExp(
    MARKER_START.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + 
    '[\\s\\S]*?' + 
    MARKER_END.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'),
    'g'
  );
  html = html.replace(blockRegex, '');

  // Update title
  if (/<title>[\s\S]*?<\/title>/.test(html)) {
    html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${config.title}</title>`);
  }

  // Insert new block before </head>
  const metaBlock = buildMetaBlock(file, config);
  html = html.replace('</head>', metaBlock + '\n</head>');

  fs.writeFileSync(file, html);
  console.log('✅ ' + file);
}

let count = 0;
Object.entries(PAGES).forEach(([file, config]) => {
  if (fs.existsSync(file)) {
    processPage(file, config);
    count++;
  } else {
    console.log('⚠️  ' + file + ' (غير موجود)');
  }
});

console.log('');
console.log('═══════════════════════════════════════');
console.log('  ✅ تم تحديث ' + count + ' صفحة');
console.log('═══════════════════════════════════════');
