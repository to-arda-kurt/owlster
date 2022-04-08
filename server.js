const express = require('express');
const app = express();
const PORT = 5001;

app.get('/', (req, res) => {
  res.json({ status: 'On', app: 'Owlster', version: '0.1' });
});

app.listen(PORT, () => {
  console.log(`[SERVER]: Listening ${PORT}`);
});
