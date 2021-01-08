import React from 'react';

/* ////////HTML//////////// */
import HTMLdes from "../component/DESCRIPTIONS/HTMLdes"
import ex1HTML from "../component/HTML/Quiz1"
import ex2HTML from "../component/HTML/draganddropex/data"
import ex3HTML from "../component/HTML/Quiz2"
import ex4HTML from "../component/HTML/draganddropexex5/data"
import ex5HTML from "../component/HTML/inputQuestions/ex5HTML"
import ex6HTML from "../component/HTML/inputQuestions/ex6HTML"
import ex7HTML from "../component/HTML/inputQuestions/ex7HTML"





    /* ///////////CSS//////////// */
import CSSdes from "../component/DESCRIPTIONS/CSSdes"
import ex2CSS from "../component/CSS/draganddropex/data"
import ex1CSS from "../component/CSS/Quiz1"
import EX5CSS from "../component/CSS/Quiz5"
import EX6CSS from "../component/CSS/draganddropexex5/data"
import EX7CSS from "../component/CSS/inputQuestions/CSSex7"





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
<Route path='/CSS/ex7' component={EX7CSS} />




{/* /////////JS/////////////// */}
<Route path='/ex1js' component={ex1JS} />
<Route path='/ex2js' component={ex2JS} />
<Route path='/js-des' component={JSdes} />

{/* ////////HTML//////////// */}
<Route path='/ex1HTML' component={ex1HTML} />
<Route path='/ex9' component={ex2HTML} />
<Route path='/ex3HTML' component={ex3HTML} />
<Route path='/ex4HTML' component={ex4HTML} />
<Route path='/ex5HTML' component={ex5HTML} />
<Route path='/ex6HTML' component={ex6HTML} />
<Route path='/ex7HTML' component={ex7HTML} />




<Route path='/html-des' component={HTMLdes} />











{/* <Route path='/ex2' component={EX2} />
<Route path='/ex2' component={EX2} /> */}



                 </div>
  );
}

export default Exercises;  