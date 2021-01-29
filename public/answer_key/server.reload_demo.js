import express from 'express';
import http from 'http';
import path from 'path';
import reload from 'reload';
import logger from 'morgan';
import dotenv from 'dotenv';
import fetch from 'node-fetch';


/* TL:DR; reload won't watch the WHOLE page tree, just the first level? */

// im express = require('express');
// const http = require('http');
// const path = require('path');
// const reload = require('reload');
// const logger = require('morgan');
dotenv.config();

const app = express();
const staticFolder = 'public';
const port = process.env.PORT || 3000;

const __dirname = path.resolve();
const publicDir = path.join(__dirname, 'public');

app.set('port', port);
app.use(logger('dev'));
app.use(express.json()); // Parses json, multi-part (file), url-encoded
app.use(express.static(staticFolder));

// app.get('/', (req, res) => {
//   res.sendFile(path.join(publicDir, 'index.html'));
// });

const server = http.createServer(app);

reload(app).then((reloadReturned) => {
  // reloadReturned is documented in the returns API in the README

  // Reload started, start web server
  server.listen(app.get('port'), () => {
    console.log(`Web server listening on port ${app.get('port')}`);
  });
}).catch((err) => {
  console.error('Reload could not start, could not start server/sample app', err);
});
