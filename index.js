const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { title: 'Beranda' });
});

router.get('/tentang', (req, res) => {
  res.render('tentang', { title: 'Tentang Kami' });
});

module.exports = router;
