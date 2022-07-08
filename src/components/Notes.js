import React, { useContext, useEffect } from 'react'
import noteContext from "../context/notes/NoteContext"
import AddNote from './AddNote';
import NoteItem from './NoteItem';

const Notes = () => {
const context = useContext(noteContext);
  const {notes,getNotes} = context;

  useEffect(() => {
    getNotes()
  }, [])
  

  return (
    <div>
      <AddNote/>
        <h1>Your Notes</h1>
      {notes.map((note)=>{
        return <NoteItem key={note._id} note={note} />;
      })}
    </div>
  )
}

export default Notes