import React, { useState, useEffect } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './htmlData';
import './htmlList.css';

import axios from 'axios';

/********************************************************/
function HtmlList() {
  // false means it's not showing
  const [ sidebar, setSidebar   ] = useState(false);
  const [ id ,     setId        ] = useState("5fddb8239c7c521c4d2474e1");
  const [lesson , setLesson     ] = useState([]);
  const showSidebar = () => setSidebar(!sidebar);
  
  
  const getLesson = async() => {
    try {
    const retrevd = await axios.get("http://localhost:8000/course/html/"+id)  
    setLesson(retrevd.data)
    console.log("lesson id ="+id)
     console.log(lesson)
     
    } catch (error) {
      console.log(error)

    }
  };

  useEffect(() => {
    getLesson()
  }, []);
  
  return (
    <div className='"row"'>
      
        <div>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
            
          </Link>
        </div>

        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' >
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars' onClick={showSidebar}>
                <AiIcons.AiOutlineClose /><span >HTML Course</span>
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName} onClick={(event)=>{setId(event.currentTarget.dataset.id)}} data-id={item.id} >
                  <Link to={item.path} >
                    
                    <span onClick={getLesson}>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="courseBox col-lg-8 col-md-6">
          <h1>{lesson.Titles}</h1>
          <span>{lesson.Desceriptions}</span>
          <iframe  title={lesson.Titles} width="600" height="400" src={lesson.Videos}frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>  
                 
      
    </div>
  );
}

export default HtmlList;
