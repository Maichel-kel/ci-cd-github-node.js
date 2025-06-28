const express = require('express');
const session = require('express-session');
const path = require('path');

const app = express();

// Set view engine ke EJS
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Setup session untuk login
app.use(session({
  secret: 'secretKeyBacaan',
  resave: false,
  saveUninitialized: true,
}));

// Data dummy user
const user = { username: 'user', password: 'pass', name: 'Fransiska' };

// Middleware cek login
function checkLogin(req, res, next) {
  if (req.session.loggedIn) next();
  else res.redirect('/login');
}

// Halaman utama
app.get('/', (req, res) => res.render('index', { user: req.session.user }));

// Halaman login
app.get('/login', (req, res) => res.render('login'));

// Proses login
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === user.username && password === user.password) {
    req.session.loggedIn = true;
    req.session.user = user;
    res.redirect('/');
  } else {
    res.send('Login gagal');
  }
});

// Logout
app.get('/logout', (req, res) => {
  req.session.destroy(() => res.redirect('/login'));
});

// Halaman kategori bacaan
app.get('/categories', checkLogin, (req, res) => {
  const categories = ['Fiksi', 'Non-fiksi', 'Fantasi', 'Horor', 'Romantis'];
  res.render('categories', { categories });
});

// Halaman perpustakaan saya
app.get('/library', checkLogin, (req, res) => {
  const books = ['Laut Bercerita', 'Pulang', 'Bumi Manusia'];
  res.render('library', { books });
});

// Halaman profil pengguna
app.get('/profile', checkLogin, (req, res) => {
  res.render('profile', { user: req.session.user });
});

// Jalankan server
app.listen(3000, () => console.log('Server berjalan di http://localhost:3000'));
