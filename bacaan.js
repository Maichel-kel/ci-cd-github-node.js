const express = require('express');
const router = express.Router();

// Daftar bacaan (bisa diubah jadi ambil dari database nanti)
const daftarBacaan = [
  { judul: 'Belajar Node.js', penulis: 'Andi' },
  { judul: 'Pemrograman Web', penulis: 'Sinta' },
];

// Halaman daftar bacaan
router.get('/', (req, res) => {
  res.render('bacaan', { title: 'Daftar Bacaan', bacaan: daftarBacaan });
});

module.exports = router;
