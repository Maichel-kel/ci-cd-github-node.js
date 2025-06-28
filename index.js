<!DOCTYPE html>
<html>
<head>
  <title>Beranda</title>
  <link rel="stylesheet" href="/style.css">
</head>
<body>
  <h1>Selamat Datang<%= user ? ', ' + user.name : '' %>!</h1>
  <% if (user) { %>
    <nav>
      <a href="/categories">Kategori</a>
      <a href="/library">Perpustakaan Saya</a>
      <a href="/profile">Profil</a>
      <a href="/logout">Logout</a>
    </nav>
  <% } else { %>
    <a href="/login">Login</a>
  <% } %>
</body>
</html>
