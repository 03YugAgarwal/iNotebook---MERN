// import react from 'react';
import { useState } from 'react';
import NoteContext from './NoteContext';

const NoteState = (props) =>{
        
    const initialNotes = [
        {
          "_id": "62c27f31638bec6415a97b4c",
          "user": "62bdf19e52cdd1eb94d1fb86",
          "title": "Hello there",
          "description": "Coding is good for health",
          "tag": "General",
          "date": "2022-07-04T05:48:33.279Z",
          "__v": 0
        },
        {
          "_id": "62c27f36638bec6415a97b4e",
          "user": "62bdf19e52cdd1eb94d1fb86",
          "title": "Hello there12",
          "description": "Coding is good f312312or health",
          "tag": "General",
          "date": "2022-07-04T05:48:38.540Z",
          "__v": 0
        }
      ]

    const [notes, setNotes] = useState(initialNotes)

      // ADD A NOTE
      const addNote = (title, description,tag)=>{
        // TO DO API WORK
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
      const deleteNote = (id)=>{
        // TO DO API WORK
        const newNotes = notes.filter((note)=>{return note._id!==id})
        setNotes(newNotes);
      }
      
      // EDIT A NOET
      const editNote = (id,title,description,tag)=>{
        for (let index = 0; index < notes.length; index++) {
          const element = notes[index];
          if(element._id === id){
            element.title = title;
            element.description = description;
            element.tag = tag;
          }
        }
      }
      return(
        <NoteContext.Provider value={{notes,addNote,deleteNote,editNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;