const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Set view engine to EJS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// Routes
const indexRouter = require('./routes/index');
const bacaanRouter = require('./routes/bacaan');

app.use('/', indexRouter);
app.use('/bacaan', bacaanRouter);

// Error handling
app.use((req, res, next) => {
  res.status(404).render('404', { title: 'Halaman Tidak Ditemukan' });
});

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server berjalan di port ${PORT}`);
});
