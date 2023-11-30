const express = require('express');
const getToken = require('./utils/generateToken');
const validateName = require('./middlewares/validateName');
const validatePrice = require('./middlewares/validatePrice');
const validateDescription = require('./middlewares/validateDescription');
const validateRating = require('./middlewares/validateRating');
const validateCreatedAt = require('./middlewares/validateCreatedAt');
const validateDifficulty = require('./middlewares/validateDifficulty');
const auth = require('./middlewares/auth');

const app = express();
app.use(express.json());
app.use(validateName);
app.use(validatePrice);
app.use(validateDescription);
app.use(validateCreatedAt);
app.use(validateRating);
app.use(validateDifficulty);
app.use(auth);

app.post('/activities', (req, res) => { 
  res.status(201).json({ message: 'Atividade cadastrada com sucesso!' });
});

app.post('/signup', (req, res) => {
  const { email, password, firstName, phone } = req.body;

  if (!email || !password || !firstName || !phone) {
    return res.status(401).json({ message: 'Campos ausentes!' });
  }
  const token = getToken();
  res.status(200).json({ token });
});

module.exports = app;