
const Note = require('../models/Note')




const listNotes = async (req, res)=>{
    console.log('URL_BACKEND: ',URL_BACKEND);
    const notes = await Note.find();//consulta todos los datos que existen
    res.json(notes);
}

const createNote = async (req,res)=>{
    const body = req.body;
    const newNote =  new Note({
        title: body.title,
        content: body.content,
        date: body.date,
        author:body.author
    })
    await newNote.save();
    res.json({message:'Note insert successful'});
}
const listNoteById = async (req, res)=>{
    const ID = req.params.id;
    const note = await Note.findById(ID);
    res.json(note)
}

const deleteNote = async (req,res)=>{
    const ID = req.params.id
    await Note.findByIdAndDelete(ID);
    res.json('Delete Note successful.');
}

const updateNote = async (req,res)=>{
    const {title, content, date, author} = req.body;
    await Note.findByIdAndUpdate( req.params.id, {
         title,
         content,
         date,
         author
    })
    res.json('Update Note Successful');
}
module.exports = {
    listNotes,
    listNoteById,
    createNote,
    updateNote,
    deleteNote
}