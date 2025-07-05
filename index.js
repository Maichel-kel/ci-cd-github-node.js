 HEAD
const express = require('express');
const app = express();

// Log semua request masuk
app.use((req, res, next) => {
  console.log(`Request: ${req.method} ${req.url}`);
  next();
});

// Route /
app.get('/', (req, res) => {
  try {
    res.send('✅ Hello from EC2 - Node.js is working!');
  } catch (err) {
    console.error('Error at / route:', err);
    res.status(500).send('❌ Internal Server Error');
  }
});

const PORT = 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
=======
const express = require('express');
const router = express.Router();

// Halaman utama
router.get('/', (req, res) => {
  res.render('index', { title: 'Beranda' });
});

module.exports = router;
8ca8c751bc79c23ba16487b67381ff83d6781dcd
