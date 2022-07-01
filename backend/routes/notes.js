const express = require('express');
const fetchUser = require('../middleware/fetchUser');
const router = express.Router();
const Note = require("../models/Notes")
const { body, validationResult } = require('express-validator');

// -----------------
// GET ALL THE NOTES
router.get('/fetchAllNotes', fetchUser, async (req, res) => {
    try {
        const notes = await Note.find({ user: req.user.id })
        res.json(notes)
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Error Occured.")
    }

})



// -----------------
// MAKE NEW Notes
router.post('/addNote', fetchUser, [
    body('title', 'Enter a valid title').isLength({ min: 3 }),
    body('description', 'Enter a valid description').isLength({ min: 5 }),
], async (req, res) => {
    try {
        const { title, description, tag } = req.body;
        // if errors return bad request
        // from validator docs
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const note = new Note({
            title, description, tag, user: req.user.id
        })
        const savedNote = await note.save()
        res.json(savedNote)
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Error Occured.")
    }
})

// -----------------
// UPDATE EXISTING NOTES
router.put('/updateNote/:id', fetchUser, async (req, res) => {
    try {
        const { title, description, tag } = req.body;
        // CREATE NEW NOTE OBJECT
        const newNote = {};
        if (title) { newNote.title = title };
        if (description) { newNote.description = description };
        if (tag) { newNote.tag = tag };

        // FIND THE NOTE TO BE UPDATED
        let note = await Note.findById(req.params.id);
        if (!note) { res.status(404).send("Not Found 0.0") }

        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed")
        }

        note = await Note.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true })
        res.json({ note });
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Error Occured.")
    }


})

// -----------------
// DELETE NOTES
router.delete('/deleteNote/:id', fetchUser, async (req, res) => {
    try {
        const { title, description, tag } = req.body;

        // FIND THE NOTE TO BE DELETED
        let note = await Note.findById(req.params.id);
        if (!note) { res.status(404).send("Not Found 0.0") }


        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed")
        }

        note = await Note.findByIdAndDelete(req.params.id)
        res.json({ "Success": "Deleted Successfully", note: note });
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Error Occured.")
    }


})


module.exports = router