require('dotenv').config();
require('@babel/register');

// const ws = require('ws')
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const { sequelize } = require('../db/models');

const app = express();
const mainRouter = require('./routes/mainRouter');
const loginRouter = require('./routes/loginRouter');
const regRouter = require('./routes/regRouter');
const homeRouter = require('./routes/homeRouter');

const accRouter = require('./routes/accRouter');

const addRouter = require('./routes/addRouter');
const deleteRouter = require('./routes/deleteRouter');

app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '../public/')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const { PORT, SESSION_SECRET } = process.env;

const sessionConfig = {
  name: 'Session',
  store: new FileStore(),
  secret: SESSION_SECRET ?? '123',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 10,
    httpOnly: true,
  },
};

app.use(session(sessionConfig));

app.use('/', homeRouter);
app.use('/main', mainRouter);
app.use('/login', loginRouter);
app.use('/registration', regRouter);
app.use('/account', accRouter);
app.use('/add', addRouter);
app.use('/delete', deleteRouter);

app.get('/logout', async (req, res) => {
  console.log(req.query);
  try {
    if (req.session.newUser) {
      req.session.destroy(() => {
        res.clearCookie('Session');
        res.redirect('/');
      });
    } else {
      res.redirect('/login');
    }
  } catch (error) {
    res.send(`Error ------> ${error}`);
  }
});

app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    console.log('Соединение с базой установлено!');
  } catch (err) {
    console.log(err, 'Error!');
  }
  console.log(`Сервер поднят на ${PORT} порту!`);
});
