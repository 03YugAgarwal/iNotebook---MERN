import React from 'react'

import Notes from './Notes';



export const Home = () => {
  
  return (
    <div>
      <h1>Add Note</h1>
      <form action="">
        <label htmlFor="">Email</label>
        <input type="text" />
      </form>
      <Notes/>
    </div>
  )
}
