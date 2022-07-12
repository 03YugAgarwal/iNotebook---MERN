import React, { useContext } from 'react'
import noteContext from "../context/notes/NoteContext"
import "./NoteItem.css"

const NoteItem = (props) => {
  const context = useContext(noteContext);
const {deleteNote} = context;
    const {note} = props;
  return (
    <div>
      <h5 className='note-item-heading'>
        {note.title}
      </h5>
      <p className='note-item-para'>{note.description}</p>
      <i className="fa-solid fa-trash-can" onClick={()=>{deleteNote(note._id)}}></i>
      {/* <i className="fa-solid fa-pencil"></i> */}
    </div>
  )
}

export default NoteItem