
const User = require('../models/User')

const listUsers = async (req, res)=>{
    const Users = await User.find();//consulta todos los datos que existen
    res.json(Users);
}

const createUser = async (req,res)=>{
    const body = req.body;
     const newUser =  new User({
        username: body.username,
        password : body.password
    }) 
     await newUser.save(); 
    res.json({message:'User insert successful'});
}
const listUserById = async (req, res)=>{
    const ID = req.params.id;
    const User = await User.findById(ID);
    res.json(User)
}

const deleteUser = async (req,res)=>{
    const ID = req.params.id
    await User.findByIdAndDelete(ID);
    res.json('Delete User successful.');
}

const updateUser = async (req,res)=>{
     const {username, password } = req.body;
    await User.findByIdAndUpdate( req.params.id, {
         username,
         password
    }) 
    res.json('Update User Successful');
}
module.exports = {
    listUsers,
    listUserById,
    createUser,
    updateUser,
    deleteUser
}