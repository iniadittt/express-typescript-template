import path from 'path';
import express, { Express, Request, Response } from 'express';

const app: Express = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));

app.get('/', (request: Request, response: Response) => {
  const data = { nama: 'Aditya' };
  response.render('index.ejs', { data });
});

export default app;
