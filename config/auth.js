export const authConfig = {
  authRequired: false,
  auth0Logout: true,
  secret: 'a long, randomly-generated string stored in env',
  baseURL: 'http://localhost:3000',
  clientID: 'OdN39RSxdKv7AOqT9Ft3m2iNQ5kJEm1b',
  issuerBaseURL: 'https://dev-s1enakg1.eu.auth0.com',
};

// // req.isAuthenticated is provided from the auth router
// app.get('/', (req, res) => {
//   res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
// });
