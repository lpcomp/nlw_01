import express from 'express';
import  cors from 'cors';
import path from 'path';
import routes from './routes';
import { errors } from 'celebrate';

const app = express();

app.use(cors()); // permitir quais urls vão podser acessar essa aplicação
app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.use(errors());

app.listen(3333);

// para executar o server -> npx ts-node src/server.ts
// executar usando o scrpit em package.json: npm run dev