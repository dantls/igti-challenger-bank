import {db} from '../models/index.js';

const Account = db.account;

export default class AccountsController{
  async create(request , response){
    const {
    name,
    agencia,
    conta,
    balance} = request.body;

    const account = new Account({
      name:name,
      agencia:agencia,
      conta:conta,
      balance: balance,
    });

    try {
      const data = await account.save();
      response.json(data);
    } catch (error) {
      console.log(error);
      response.json({message: "Erro ao salvar"})
    }
  }
  async update(request , response){

  }
  async delete(request , response){

  }
  async index(request , response){

  }

}
