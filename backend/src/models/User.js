const {Schema, model} = require('mongoose');
const userSchema = new Schema({
    username: {
      type: String,
      required: true,
      unique: true,
      minlength: 3,
      maxlength: 50,
      trim:true //limpia espacios duplicados
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
      maxlength: 1024
    }
  }, {
    timestamps : true
  });
  
  module.exports =model('User', userSchema);