import React, { useContext, useEffect } from 'react'
import noteContext from "../context/notes/NoteContext"
import AddNote from './AddNote';
import NoteItem from './NoteItem';
import {useNavigate } from "react-router-dom"


const Notes = () => {
  const context = useContext(noteContext);
  const { notes, getNotes } = context;
  let navigate = useNavigate();
  useEffect(() => {
    if(localStorage.getItem('token')){
      getNotes()
    }else{
      navigate('/login')
    }
    // eslint-disable-next-line
  }, [])

  const updateNote = (note) => {
      // 66th video // to do
  }

  return (
    <div className='notes-div'>
      

      <AddNote />
      <h1 className='note-primary-heading'>Your Notes</h1>
      {notes.length===0 && <p className='no-notes'>No Notes to display.</p>}
      <div className="note-item-div">
        {notes.map((note) => {
          return <NoteItem key={note._id} updateNote={updateNote} note={note} />;
        })}
      </div>
    </div>
  )
}

export default Notes