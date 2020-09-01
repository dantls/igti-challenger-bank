import express from 'express';

import AccountsController from './controllers/AccountsController.js';

const accountsController = new AccountsController();

const routes = express.Router();

routes.post('/', accountsController.create);
routes.put('/:id', accountsController.update);
routes.delete('/:id', accountsController.delete);
routes.get('/:id', accountsController.index);


export default routes;