const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');


app.use(bodyParser.urlencoded({ extended: true }));


const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', 
  password: 'root', 
  database: 'userdata' 
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL Database!');
});


app.post('/login', (req, res) => {
  const { name, password } = req.body;
  const query = 'SELECT * FROM users WHERE name = ? AND password = ?';
  db.query(query, [name, password], (err, results) => {
    if (err) throw err;
    if (results.length > 0) {
      res.redirect('/Explore')
    } else {
      res.send('Invalid Credentials!');
    }
  });
});

app.post('/signup', (req, res) => {
  const { name, password} = req.body;
  const query = 'INSERT INTO users (name, password) VALUES (?, ?)';
  db.query(query, [name, password], (err, results) => {
    if (err) throw err;
    res.redirect('/login')
    });
});

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, '2-app')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'Home.html'));
});
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'login.html'));
  });
  app.get('/Contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'Contact.html'));
  });
  app.get('/Explore', (req, res) => {
    res.sendFile(path.join(__dirname, 'Explore.html'));
  });
  app.get('/pattern', (req, res) => {
    res.sendFile(path.join(__dirname, 'pattern.html'));
  });
  app.get('/marks', (req, res) => {
    res.sendFile(path.join(__dirname, 'marksc.html'));
  });
  app.get('/imp', (req, res) => {
    res.sendFile(path.join(__dirname, 'imp.html'));
  });
  app.get('/ques', (req, res) => {
    res.sendFile(path.join(__dirname, 'questions.html'));
  });
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
