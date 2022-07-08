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
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJiZGYxOWU1MmNkZDFlYjk0ZDFmYjg2In0sImlhdCI6MTY1NjYxNTQ3N30.zW8XVvaGgthDvH951WaQCMMG95xHERdYZR2FYblVKYs',
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
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJiZGYxOWU1MmNkZDFlYjk0ZDFmYjg2In0sImlhdCI6MTY1NjYxNTQ3N30.zW8XVvaGgthDvH951WaQCMMG95xHERdYZR2FYblVKYs',
      },
      body: JSON.stringify({ title, description, tag })
    });
    // const responseJson =  response.json();
    // console.log(response.json());


    const note = {
      "_id": "62c27f36638bec6415a97b14e",
      "user": "62bdf19e52cdd1eb94d1fb86",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2022-07-04T05:48:38.540Z",
      "__v": 0
    };
    setNotes(notes.concat(note));
  }


  // DELETE A NOTE
  const deleteNote = async (id) => {
    // API WORK
    const response = await fetch(`${host}/api/notes/deleteNote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJiZGYxOWU1MmNkZDFlYjk0ZDFmYjg2In0sImlhdCI6MTY1NjYxNTQ3N30.zW8XVvaGgthDvH951WaQCMMG95xHERdYZR2FYblVKYs',
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
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJiZGYxOWU1MmNkZDFlYjk0ZDFmYjg2In0sImlhdCI6MTY1NjYxNTQ3N30.zW8XVvaGgthDvH951WaQCMMG95xHERdYZR2FYblVKYs',
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