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

    return(
        <NoteContext.Provider value={{notes,setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;