// import react from 'react';
import { useState } from 'react';
import NoteContext from './NoteContext';

const NoteState = (props) => {
  const host = "http://localhost:5000"
  const initialNotes = []

  const [notes, setNotes] = useState(initialNotes)

  // GET ALL NOTES
  const getNotes = async () => {
    // TO DO API WORK
    const response = await fetch(`${host}/api/notes/fetchAllNotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token'),
      },
    });
    const responseJson = await response.json();
    console.log(responseJson);
    setNotes(responseJson);
  }



  // ADD A NOTE
  const addNote = async (title, description, tag) => {
    // TO DO API WORK
    const response = await fetch(`${host}/api/notes/addNote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token'),
      },
      body: JSON.stringify({ title, description, tag })
    });
    // const responseJson =  response.json();
    // console.log(response.json());


    const note = await response.json();
    setNotes(notes.concat(note));
  }


  // DELETE A NOTE
  const deleteNote = async (id) => {
    // API WORK
    const response = await fetch(`${host}/api/notes/deleteNote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token'),
      },
      body: JSON.stringify()
    });


    const newNotes = notes.filter((note) => { return note._id !== id })
    setNotes(newNotes);
  }

  // EDIT A NOTE
  const editNote = async (id, title, description, tag) => {
    // API CALL
    const response = await fetch(`${host}/api/notes/updateNote/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token'),
      },
      body: JSON.stringify({ title, description, tag })
    });
    // const responseJson =  response.json();
    // console.log(response.json());


    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  }
  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;