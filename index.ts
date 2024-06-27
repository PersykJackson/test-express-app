import express, { Request } from 'express';

const app = express();

app.get('/test', (req, res) => {
  res.send('Hello World');
});

app.listen(3000, () => console.log('App started'));