import express from 'express';

const app = express();

app.get('/', (req, res) => {
  return res.json({ oi: true });
});

app.listen(3333, () => {
  // eslint-disable-next-line no-console
  console.log('Server on 3333');
});
