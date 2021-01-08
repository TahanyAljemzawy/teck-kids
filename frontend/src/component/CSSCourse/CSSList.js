import React, { useState, useEffect } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './CSSData';
import './CSSList.css';

import axios from 'axios';

/********************************************************/
function CSSList() {
  // false means it's not showing
  const [ sidebar, setSidebar   ] = useState(false);
  const [ id ,     setId        ] = useState("5fddbe68c6a65c1cdab9b1da");
  const [lesson , setLesson     ] = useState([]);
  const showSidebar = () => setSidebar(!sidebar);
  
  
  const getLesson = async(event) => {
    try {
    const retrevd = await axios.get("http://localhost:8000/course/css/"+id)  
    setLesson(retrevd.data)
    console.log("lesson id ="+id)
    console.log(lesson)
     
    } catch (error) {
      alert(error)
    }
  };

  useEffect(() => {
    getLesson()
  }, []);
  
  return (
    <div className="row" >
      
        <div className="col">
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
            
          </Link>
        </div>

        <nav  className="col" className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' >
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars' onClick={showSidebar}>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (


                <li className="col" key={index} className={item.cName} onClick={(event)=>{setId(event.currentTarget.dataset.id)}} data-id={item.id}  >
                  <Link to={item.path} >
                    
                    <span  className="col" className ='text' onClick={getLesson}>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="courseBox" className="col">
          <h1 className="text" style={{fontSize:"40px"}}>{lesson.Titles}</h1>
          <div className="text">{lesson.Desceriptions}</div> 
          <iframe title={lesson.Titles} style={{marginTop:"30px",marginLeft:"-160px"}} width="600" height="400" src={lesson.Videos}frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>  
                 
      
    </div>
  );
}

export default CSSList;
