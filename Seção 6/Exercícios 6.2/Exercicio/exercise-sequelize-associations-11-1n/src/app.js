const bodyParser = require('body-parser');
const express = require('express');
const {
  getAccountById, getAccountByIdLazy, getCommentsByAccountId, insertAccountAndProfile,
  insertComment,
} = require('./controllers/accountsController');

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/accounts/:id', getAccountById);

app.get('/accounts-v2/:id', getAccountByIdLazy);

app.get('/accounts/:id/comments', getCommentsByAccountId);

app.post('/accounts', insertAccountAndProfile);

app.post('/accounts/:id/comment', insertComment);

module.exports = app;
