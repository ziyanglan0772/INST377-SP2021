import express from 'express';
import browserSync from 'browser-sync';
import path from 'path';
import logger from 'morgan';
import dotenv from 'dotenv';
import chalk from 'chalk';
import Sequelize from 'sequelize';
import fetch from 'node-fetch';

const env = process.env.NODE_ENV || 'development';
const db = {};

dotenv.config();

const ormSql = new Sequelize({
  username: 'student',
  password: 'INST377@UMD',
  host: '3.236.243.212',
  dialect: 'mysql',
  ssl: 'Amazon RDS',
  pool: { maxConnections: 5, maxIdleTime: 30},
  language: 'en'
});

const app = express();
const staticFolder = 'public';
const port = process.env.PORT || 3000;

const __dirname = path.resolve();
const publicDir = path.join(__dirname, 'public');

app.use(logger('dev'));
app.use(express.json()); // Parses json, multi-part (file), url-encoded
app.use(express.static(path.join(publicDir, staticFolder)));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.listen(port, async () => {
  try {
    await ormSql.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

  console.log(`Webpage available at localhost:${port}`);
  console.log(chalk.bold.magenta(`Hot reload available at localhost:${port + 1}`));
  browserSync({
    files: ['public/**/*.{html,js,css}'],
    online: false,
    open: false,
    port: port + 1,
    proxy: `localhost:${port}`,
    ui: false,
    notify: false
  });
});