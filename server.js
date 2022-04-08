const express = require('express');
const pool = require('./config/db');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ status: 'On', app: 'Owlster', version: '0.1' });
});

require('dotenv').config();

app.listen(proces.env.BACKEND_PORT, () => {
  console.log(`[SERVER]: Listening ${proces.env.BACKEND_PORT}`);
});
