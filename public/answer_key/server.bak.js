// These are our required libraries to make the server work.
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import fetch from 'node-fetch';
import browserSync from 'browser-sync';

dotenv.config();

const __dirname = path.resolve();
const app = express();
const port = process.env.PORT || 3000;
const staticFolder = 'public';

// Configure express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(staticFolder));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.route('/api')
  .get(async (req, res) => {
    console.log('GET request detected');
    const data = await fetch('https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json');
    const json = await data.json();
    console.log('data from fetch', json);
    res.json(json);
  })
  .post(async (req, res) => {
    console.log('POST request detected');
    console.log('Form data in res.body', req.body);
    res.json({facilities: dataStore});
  });

app.listen(port);