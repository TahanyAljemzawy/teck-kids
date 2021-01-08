import React from 'react'
import './vv.css';
import DragNDrop from './DragNDrop'


var data = [
    {title: `.textStyle{` ,
     items: 
     [  
      ],
      title2: "}"
          },
          {title: `#font{` ,
          items: 
          [  
           ],
           title2: "}"
               },
    {title: 'CSS', items:  [ 'color: red;', "  text-align: center;", '  font-family: cursive;', "  font-size: 20px;"]},
    // {title: 'Id items', items:  [ '  font-family: verdana;', "  font-size: 20px;"]}
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


