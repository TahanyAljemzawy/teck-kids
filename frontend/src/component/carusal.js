import React , {useState}from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './carusal.css'
 export default function ControlledCarousel() {
    const [index, setIndex] = useState(0);
    const [open, setOpen] = useState(false);
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    return (
    // <MDBContainer>
      <Carousel activeIndex={index} onSelect={handleSelect} className="carousel slide" data-ride="carousel">
      <Carousel.Item>
          <img
            className="d-block w-100 size"
            src="https://www.mykidstime.com/wp-content/uploads/2020/03/Online-learning-for-kids-1280x720.jpg"
            alt="Second slide"
            style={{opacity:"0.8"}}
          />
          <Carousel.Caption  className='pargraph'>
          <div class="hello">
            <h3 >Console.log(hello World) </h3>
            </div>
            <span className="span1">L</span><span class="span1">O</span><span  className="span1">V</span><span  className="span1">E</span><span  className="span1">Y</span><span  className="span1">O</span><span  class="span1">U</span  ><span className="span1">R</span><span className="span1">S</span><span className="span1">E</span><span className="span1">L</span><span className="span1">&nbsp;</span><span className="span1">F</span><span className="span1">W</span><span className="span1">H</span><span class="span1">O</span><span class="span1">L</span><span class="span1">E</span>
           <span className="span1">S</span><span  class="span1">E</span><span class="span1">L</span><span  class="span1">&nbsp;</span><span  class="span1">F</span>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 size"
            src="https://www.fluentin3months.com/wp-content/uploads/2019/02/learn-Japanese-for-kids.jpg"
            alt="First slide"
            style={{opacity:"0.8"}}
          />
          <Carousel.Caption className='pargraph'>
            <div class="hello">
              <h3>Codeing is Soooo fun !!!</h3>
           </div>
          <span  class="span1">N</span><span class="span1">O</span><span  class="span1">&nbsp;</span><span  class="span1">O</span><span  class="span1">N</span><span  class="span1">E</span><span  class="span1">I</span><span  class="span1">S</span  ><span class="span1">&nbsp;</span><span class="span1">P</span><span class="span1">e</span><span class="span1">R</span><span class="span1">F</span><span class="span1">&nbsp;</span><span class="span1">E</span><span class="span1">C</span><span class="span1">T</span><span class="span1">T</span><span class="span1">H</span><span class="span1">A</span>
           <span class="span1">T'</span><span  class="span1">S</span><span class="span1">W</span><span  class="span1">&nbsp;</span><span  class="span1">H</span><span  class="span1">Y</span><span  class="span1">P</span><span  class="span1">E</span><span  class="span1">N</span  ><span class="span1">&nbsp;</span><span class="span1">C</span><span class="span1">I</span><span class="span1">L</span><span class="span1">S</span><span class="span1">&nbsp;</span><span class="span1">S</span><span class="span1">H</span><span class="span1">A</span><span class="span1">V</span><span class="span1">E</span><span class="span1">E</span>
           <span class="span1">R</span><span  class="span1">A</span><span class="span1">S</span><span  class="span1">&nbsp;</span><span  class="span1">S</span><span  class="span1">E</span><span  class="span1">R</span><span  class="span1">S</span><span  class="span1">.</span  >
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 size"
            src="https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fwww.reviewgeek.com%2Fthumbcache%2F0%2F0%2Fc1558535fe4386b31f90f74feb47c061%2Fp%2Fuploads%2F2020%2F03%2F467241fb.png"
            alt="Third slide"
            style={{opacity:"0.8"}}
          />
      <Carousel.Caption  className='pargraph'>
      <div class="hello">
            <h3>  GO And Learn Coding!!! </h3>
            </div>
           <span class="span1">Y</span><span  class="span1">O</span><span class="span1">U</span><span  class="span1">&nbsp;</span><span  class="span1">R</span><span  class="span1">L</span><span  class="span1">I</span><span  class="span1">F</span><span  class="span1">E</span  ><span class="span1">&nbsp;</span><span class="span1">I</span><span class="span1">S</span><span class="span1">U</span><span class="span1">P</span><span class="span1">&nbsp;</span><span class="span1">T</span><span class="span1">O</span><span class="span1">Y</span><span class="span1">O</span><span class="span1">U</span>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 size"
            src="http://www.scholastic.com/content/dam/parents/OptimizedDesignImages/Batch12a/articles/resources-to-help-kids-learn-about-alphabet-article-4-3.jpg"
            alt="Third slide"
            style={{opacity:"0.8"}}
          />
          <Carousel.Caption className='pargraph'>
          <span class="span1">L</span><span  class="span1">E</span><span class="span1">A</span><span  class="span1">R</span><span  class="span1">N</span><span  class="span1">.</span><span  class="span1">.</span><span  class="span1">.</span  ><span class="span1">&nbsp;</span><span class="span1">H</span><span class="span1">A</span><span class="span1">P</span><span class="span1">P</span><span class="span1">&nbsp;</span><span class="span1">Y</span><span class="span1">.</span><span class="span1">.</span><span class="span1">.</span><span class="span1">H</span><span class="span1">A</span>
          <span class="span1">P</span><span  class="span1">P</span><span class="span1">Y</span><span  class="span1">&nbsp;</span><span  class="span1">!</span><span  class="span1">!</span><span  class="span1">!</span>
          <div class="hello">
            <h3> Improve Your Skills  !!!!!!</h3>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      // </MDBContainer>
    );
  }