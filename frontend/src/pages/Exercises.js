import React from 'react';

/* ////////HTML//////////// */

import HTMLdes from "../component/DESCRIPTIONS/HTMLdes"
import Ex3html from '../component/HTML/draganddrop2/ex3data'
import ex1HTML from "../component/HTML/Quiz1"
import ex2HTML from "../component/HTML/draganddropex/data"

    /* ///////////CSS//////////// */
import CSSdes from "../component/DESCRIPTIONS/CSSdes"
import ex2CSS from "../component/CSS/draganddropex/data"
import ex1CSS from "../component/CSS/Quiz1"
import EX5CSS from "../component/CSS/Quiz5"
import EX6CSS from "../component/CSS/draganddropexex5/data"




/* /////////JS/////////////// */
import JSdes from "../component/DESCRIPTIONS/JSdes"
import ex1JS from "../component/JS/Quiz1"
import ex2JS from "../component/JS/draganddropex/data"

import { Route } from 'react-router-dom';




function Exercises() {
  return (
    <div className='exercises'>

    {/* ///////////CSS//////////// */}
<Route path='/ex1CSS' component={ex1CSS} />
<Route path='/css-des' component={CSSdes} />
<Route path='/ex2CSS' component={ex2CSS} />
<Route path='/CSS/ex5' component={EX5CSS} />
<Route path='/ex6CSS' component={EX6CSS} />



{/* /////////JS/////////////// */}
<Route path='/ex1js' component={ex1JS} />
<Route path='/ex2js' component={ex2JS} />
<Route path='/js-des' component={JSdes} />

{/* ////////HTML//////////// */}
<Route path='/Ex3html' component={Ex3html} />
<Route path='/ex1HTML' component={ex1HTML} />
<Route path='/ex9' component={ex2HTML} />
<Route path='/html-des' component={HTMLdes} />











{/* <Route path='/ex2' component={EX2} />
<Route path='/ex2' component={EX2} /> */}



                 </div>
  );
}

export default Exercises;  