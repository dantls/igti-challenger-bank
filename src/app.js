import express from 'express';
import routesAccounts from './routes.accounts.js';


import { db } from './models/index.js';

(async () => {
  try {
    await db.mongoose.connect('mongodb://localhost:27017/igti-accounts', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: true,
      useCreateIndex: true,
    });

    console.log('Conectado com o mongodb com sucesso');
  } catch (error) {
    console.log('Erro ao conectar no mongodb ' + error);
  }
})();
const app = express();
app.use(express.json());

app.use("/accounts", routesAccounts);

app.listen(3333, () => {
  console.log('Server Ok');
})

