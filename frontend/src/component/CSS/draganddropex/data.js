import React from 'react'
import './vv.css';

import DragNDrop from './DragNDrop'


const data = [
    {title: 'Drag',
     items: 
     [ 'p {',
      ' color: red;', 'text-align: center;','}'
      ]
    },
    {title: 'Drop here', items:  [ ]}
  ]

 const rightData = [
  {title: 'Drag',
   items: 
   [ ]
  },
  {title: 'Drop here', items:  [ 'p {',
  ' color: red;', 'text-align: center;','}']}
]
  

function Data() {
  
  var locals =  localStorage.getItem('List')
  // console.log({locals}, 8800) 
  // var mydata = JSON.stringify(rightData[1])
  console.log(locals)
  
// console.log(rightData[1].items, "mesh hayyy")
          //   if(JSON.stringify(rightData[1].items) === JSON.stringify({locals})){
          //    console.log(JSON.stringify(rightData[1]),"               compare                   " ,  locals.items)
          // }

  return (
    <div className="defaultData"> 
      <header className="defaultData-header"> 
      <DragNDrop data = {data}/>
      </header>
    </div>
  )
}

export default Data



