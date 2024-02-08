const {Schema, model} = require('mongoose');

const noteSchema = new Schema({
    title : String,
    content:{
        type:String,
        require:true
    },
    date : Date,
    author:String
    
}, {
    timestamps:true //agrega la fecha de creacion y actualizacion
});

module.exports= model('Note', noteSchema);