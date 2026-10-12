// seo-sitemap.js — Dynamic sitemap.xml
const express = require('express');
const router = express.Router();

const BASE_URL = 'https://www.mohammedouachemi.work.gd';
const PAGES = [
  { url: '/', priority: 1.0, changefreq: 'daily' },
  { url: '/god.html', priority: 0.9, changefreq: 'weekly' },
  { url: '/names.html', priority: 0.8, changefreq: 'weekly' },
  { url: '/faq.html', priority: 0.8, changefreq: 'weekly' },
  { url: '/adhkar.html', priority: 0.8, changefreq: 'weekly' },
  { url: '/journey.html', priority: 0.7, changefreq: 'weekly' },
  { url: '/tree.html', priority: 0.7, changefreq: 'weekly' },
  { url: '/first40.html', priority: 0.7, changefreq: 'weekly' },
  { url: '/questions.html', priority: 0.7, changefreq: 'weekly' },
  { url: '/cards.html', priority: 0.6, changefreq: 'weekly' },
  { url: '/numbers.html', priority: 0.6, changefreq: 'weekly' },
  { url: '/ruqyah.html', priority: 0.9, changefreq: 'weekly' }
];

router.get('/sitemap.xml', (req, res) => {
  const today = new Date().toISOString().split('T')[0];
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  PAGES.forEach(page => {
    xml += '  <url>\n';
    xml += '    <loc>' + BASE_URL + page.url + '</loc>\n';
    xml += '    <lastmod>' + today + '</lastmod>\n';
    xml += '    <changefreq>' + page.changefreq + '</changefreq>\n';
    xml += '    <priority>' + page.priority + '</priority>\n';
    xml += '  </url>\n';
  });
  xml += '</urlset>';
  res.header('Content-Type', 'application/xml');
  res.send(xml);
});

module.exports = router;
