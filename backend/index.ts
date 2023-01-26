import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { data } from './data/database';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get('/api/products', (req: Request, res: Response) => {
  res.json(data);
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});