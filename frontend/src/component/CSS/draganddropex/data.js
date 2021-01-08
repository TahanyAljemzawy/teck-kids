import React from 'react'
import './vv.css';
import DragNDrop from './DragNDrop'


var data = [
    {title: 'Drag',
     items: 
     [  'text-align: center;','}',
      ' color: red;','p {',
      ]
    },
    {title: 'Drop here', items:  [ ]}
  ]
  
function Data() {
  
  // var locals =  localStorage.getItem('List')
  // console.log(locals)

  return (
    <div className="defaultData"> 
      <header className="defaultData-header"> 
      <DragNDrop data = {data}/>
      </header>
    </div>
  )
}

export default Data


