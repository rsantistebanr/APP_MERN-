const {Router} = require('express');
const router = Router();
const notesCtrl = require('../controllers/NotesController') 

router
    .get('/', notesCtrl.listNotes)
    .post('/',notesCtrl.createNote)
    .get('/:id',notesCtrl.listNoteById)
    .delete('/:id',notesCtrl.deleteNote)
    .put('/:id',notesCtrl.updateNote)



module.exports = router;