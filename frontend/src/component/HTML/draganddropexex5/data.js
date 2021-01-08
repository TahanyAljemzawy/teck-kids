import React from 'react'
import './vv.css';
import DragNDrop from './DragNDrop'


var data = [
    {title: `<body>` ,
     items: 
     [  
      ],
      title2: `<body/>`
          },
          {title: `<body>` ,
          items: 
           [ '<h4 >This is Heading4 </h4 >',
            "<h3 >This is Heading3 </h3 > ", 
            '<h6 >This is Heading6 </h6 >', 
            '<h2 >This is Heading2 </h2 >',
            '<h5 >This is Heading5 </h5 >',
             '<h1 >This is Heading1 </h1>'],

           title2: `<body/>`}
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


