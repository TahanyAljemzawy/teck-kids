import React , { useState }from 'react'
import { Button, Modal } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import { Row, Col } from 'antd';
import "./input.css"





function CSSex3() {
  const history = useHistory();

  const [ userAnswers , setUserAnswers ] =  useState();
  const [ userAnswers1 , setUserAnswers1 ] =  useState();
  const [ userAnswers2 , setUserAnswers2 ] =  useState();

  const handleShow = () => setShow(true);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
//  const handleShow = () => setShow(true);
  var [ Val,setVal ] =  useState();
  localStorage.setItem('userA',userAnswers)
    localStorage.setItem('userb',userAnswers1)
  localStorage.setItem('userc',userAnswers2)


  const handleShow3 = ()=>{
    setVal(true)
    handleShow()
  }
  return (

      <div>
    <span>
    <p  id='idid'> ▶▶▶Set the left margin of the apples to 20px which have the class name apple ◀◀◀</p>


<Row>

<Col  span={12}>  <div  id="textt">
  <pre>
  <br></br>

  &lt;!<span style={{color:"#C71585"}}>DOCTYPE</span><span style={{color:"#8B008B"}}>html</span>&gt;
  <br></br>
&lt;<span style={{color:"#C71585"}}>html</span> &gt;<br></br>
&lt;<span style={{color:"#C71585"}}>head</span> &gt;<br></br>
&lt;<span style={{color:"#C71585"}}>style</span> &gt;<br></br>
<span style={{color:"#7FFF00"}}>body</span> {"{"}  <br></br>
<span style={{color:"	#00FFFF"}}>background-color: MistyRose; </span>  <br></br>
<span style={{color:"	#00FFFF"}}> text-align: center; </span>  <br></br> 
<br/>  {"}"}  <br></br>
&lt;/<span style={{color:"#C71585"}}>style</span> &gt;<br></br>
&lt;/<span style={{color:"#C71585"}}>head</span> &gt;<br></br>
&lt;<span style={{color:"#C71585"}}>body</span> &gt;<br></br>

&lt;<span style={{color:"#C71585"}}>h1</span> &gt;<span style={{color:"white"}}>Lazy Cat</span> &lt;/<span style={{color:"#C71585"}}>h1</span> &gt;    <br></br>
&lt; <span style={{color:"#C71585"}}>p</span>&gt; <span style={{color:"#FFFAF0"}}>my cat is too lazy</span> &lt;/<span style={{color:"#C71585"}}>p</span> &gt;     <br></br>
&lt; <span style={{color:"#C71585"}}>ul</span> &gt;   <br></br>
&lt; <span style={{color:"#C71585"}}>li</span>&gt; <span style={{color:"#FFFAF0"}}>showering</span> &lt;/<span style={{color:"#C71585"}}>li</span> &gt;     <br></br>
&lt; <span style={{color:"#C71585"}}>li</span>&gt;<input type="text" id="q3" size="30" maxLength="30" placeholder='Fill the answer' onChange={(e)=>{setUserAnswers(e.target.value)}} /> &lt;/<span style={{color:"#C71585"}}>li</span> &gt;     <br></br>
&lt; <span style={{color:"#C71585"}}>li</span>&gt; <input type="text" id="q3" size="30" maxLength="30" placeholder='Fill the answer' onChange={(e)=>{setUserAnswers1(e.target.value)}} /> &lt;/<span style={{color:"#C71585"}}>li</span> &gt;     <br></br>
&lt;/<span style={{color:"#C71585"}}>ul</span> &gt;     <br></br>

&lt;<span style={{color:"#C71585"}}>img</span> <span style={{color:"#7FFF00"}}>src</span> =<input type="text" id="q3" size="30" maxLength="30" placeholder='Fill the answer' onChange={(e)=>{setUserAnswers2(e.target.value)}} />  / &gt;     <br></br>

&lt;/<span style={{color:"#C71585"}}>body</span> &gt;<br></br>
&lt;/<span style={{color:"#C71585"}}>html</span> &gt;<br></br>
</pre> </div></Col>
<Col  id="apples" span={12}>
  <div  id="applesB" style={{borderStyle: 'solid',width:'400px', backgroundColor:"MistyRose", textAlign: "center", }}>
<h1>Lazy Cat</h1>

{/* style={{ color: Val ? 'green' : null} */}
<p > my cat is too lazy, here's her ToDos:</p>
  <li>showering</li>
  <li> {Val? "playing outside": null}</li>
  <li> {Val? "making the bed": null}</li>

<img  style={{ 
      backgroundImage: Val ? `url("https://i.pinimg.com/originals/f0/0d/57/f00d579703990ead2cd682ff14ea0477.gif")` : null
    }}  width="230" height="250"/>
</div> 
<div>
  {localStorage.getItem('userA') ===  'playing outside'&&localStorage.getItem('userb') ===  'making the bed'&&localStorage.getItem('userc') ===  'https://lazy-cat.gif'?  

  <div>  
    
       <Button className="BU" variant="primary" onClick={handleShow3}> SUBMIT </Button>

  <Modal show={show} onHide={handleClose}> 
    <Modal.Header closeButton>
      <Modal.Title>Woohoo!!!!</Modal.Title>
    </Modal.Header>
    <img src= "https://www.flaticon.com/svg/static/icons/svg/3159/3159066.svg" alt="css"/>
    <Modal.Footer>
      
      <Button variant="primary" onClick={()=>{history.push('/')}}> get back home </Button>
    </Modal.Footer>
  </Modal></div>:<div>  
       <Button className="BU" variant="primary" onClick={handleShow}> SUBMIT </Button>

  <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Try Again!!!!</Modal.Title>
    </Modal.Header>
    <img src= "https://www.flaticon.com/svg/static/icons/svg/3159/3159020.svg" alt="css"/>
    <Modal.Footer>
    </Modal.Footer>
  </Modal></div>}
    </div>
</Col>
</Row>
</span> 
      </div>
  )
}


export default CSSex3

