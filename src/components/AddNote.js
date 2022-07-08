import {React,useContext,useState} from 'react'
import noteContext from "../context/notes/NoteContext"

const AddNote = () => {
    const context = useContext(noteContext);
    const {addNote} = context;

    const [note, setnote] = useState({title:"",description:"",tag:"default"})

    const handleAddNote = (e)=>{
        e.preventDefault();
        addNote(note.title,note.description,note.tag);
    }
    const onChange = (e)=>{
        setnote({...note,[e.target.name]:e.target.value})
    }
  return (
    <div>
        <h1>Add Note</h1>
      <form action="">
        <div>
        <label htmlFor="">Title</label>
        <input htmlFor="title" type="text" id="title" name="title" onChange={onChange}/>
        </div>
        <div>
        <label htmlFor="">Description</label>
        <input htmlFor="description" type="text" id="description" name="description" onChange={onChange}/>
        </div>
        <div>
        <label htmlFor="">Tag</label>
        <input htmlFor="tag" type="text" id="tag" name="tag" onChange={onChange}/>
        </div>
        <button onClick={handleAddNote}>Submit</button>
      </form>
    </div>
  )
}

export default AddNote