import React from 'react';
import axios from 'axios';
function Exercises() {
  try {
    
    
    const lesson =  axios.get("http://localhost:8000/html/5fddb8239c7c521c4d2474e1" );
    console.log(lesson)
    alert("Thanx ")
    
  } catch (error) {
   console.log("error")
  }
  
  return (
    <div className='exercises'>
      <h1>exercises</h1>
    </div>
  );
}

export default Exercises;