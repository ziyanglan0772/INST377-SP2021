import express from 'express';
import browserSync from 'browser-sync';
import path from 'path';
import logger from 'morgan';
import dotenv from 'dotenv';
import chalk from 'chalk';
import fetch from 'node-fetch';

dotenv.config();

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
  console.log(`Webpage available at localhost:${port}`);
  console.log(chalk.bold.magenta(`Hot reload available at localhost:${port + 1}`));
  browserSync({
    files: ['public/**/*.{html,js,css}'],
    online: false,
    open: false,
    port: port + 1,
    proxy: `localhost:${port}`,
    ui: false
  });
});