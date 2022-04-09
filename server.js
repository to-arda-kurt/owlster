import express from 'express';
import pool from './config/db.js';
import { authConfig } from './config/auth.js';
import cors from 'cors';
import dotenv from 'dotenv';
import { auth } from 'express-openid-connect';
import { alert, success } from './utils/chalk.js';
import auth0 from 'express-openid-connect';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(authConfig));

// TODO: AUTH0 Will Setup
// app.get('/', (req, res) => {
//   res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
//   //   res.json({ status: 'On', app: 'Owlster', version: '0.1' });
//   console.log(alert('[SERVER][GET][/]'));
// });

app.get('/profile', auth0.requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user));
});

app.listen(process.env.BACKEND_PORT, () => {
  console.log(success(`[SERVER]: Listening ${process.env.BACKEND_PORT}`));
});
