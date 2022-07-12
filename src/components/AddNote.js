import { React, useContext, useState } from 'react'
import noteContext from "../context/notes/NoteContext"

const AddNote = () => {
  const context = useContext(noteContext);
  const { addNote } = context;

  const [note, setnote] = useState({ title: "", description: "", tag: "" })

  const handleAddNote = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setnote({ title: "", description: "", tag: "default" })
  }
  const onChange = (e) => {
    setnote({ ...note, [e.target.name]: e.target.value })
  }
  return (
    <div>
      <form action="" className='add-note-form'>
      <h1 className='add-note-heading'>Add Note</h1>
        <div className='add-note-div'>
          <label htmlFor="">Title</label>
          <input htmlFor="title" type="text" id="title" value={note.title} name="title" onChange={onChange} />
        </div>
        <div className='add-note-div'>
          <label htmlFor="">Description</label>
          <input htmlFor="description" type="text" id="description" value={note.description} name="description" onChange={onChange} />
        </div>
        <div className='add-note-div'>
          <label htmlFor="">Tag</label>
          <input htmlFor="tag" type="text" id="tag" value={note.tag} name="tag" onChange={onChange} />
        </div>
        <button className='add-note-button' onClick={handleAddNote}>Submit</button>
      </form>
    </div>
  )
}

export default AddNote