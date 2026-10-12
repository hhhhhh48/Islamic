// seo-robots.js — Dynamic robots.txt
const express = require('express');
const router = express.Router();

const BASE_URL = 'https://www.mohammedouachemi.work.gd';

router.get('/robots.txt', (req, res) => {
  let txt = '# robots.txt for ' + BASE_URL + '\n\n';
  txt += 'User-agent: *\n';
  txt += 'Allow: /\n';
  txt += 'Disallow: /admin\n';
  txt += 'Disallow: /api/\n\n';
  txt += 'Sitemap: ' + BASE_URL + '/sitemap.xml\n';
  res.header('Content-Type', 'text/plain');
  res.send(txt);
});

module.exports = router;
