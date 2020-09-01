export default (mongoose) =>{
const schema = mongoose.Schema({
  _id:{
    type: String,
    required:true,
  },
  name:{
    type: String,
    required:true,
  },
  agencia:{
    type: String,
    required:true,
  },
  conta:{
    type: String,
    required:true,
  },
  balance:{
    type: Number,
    required:true,
  },
});

const Account = mongoose.model("account", schema);

return Account;
}

