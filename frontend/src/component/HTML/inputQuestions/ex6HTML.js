import React , { useState }from 'react'
import { Button, Modal } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import { Row, Col } from 'antd';
import "./input.css"





function CSSex3() {
  const history = useHistory();

  const [ userAnswers , setUserAnswers ] =  useState();
  const [ userAnswers2 , setUserAnswers2 ] =  useState();
  const [ userAnswers3 , setUserAnswers3 ] =  useState();

  const handleShow = () => setShow(true);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
//  const handleShow = () => setShow(true);
  var [ Val,setVal ] =  useState();
  localStorage.setItem('userA',userAnswers)
    localStorage.setItem('userb',userAnswers2)
  localStorage.setItem('userc',userAnswers3)


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
<span style={{color:"	#00FFFF"}}>background-color: yellow; </span>  <br></br>
<span style={{color:"	#00FFFF"}}> text-align: center; </span>  <br></br> 
<br/>  {"}"}  <br></br>
&lt;/<span style={{color:"#C71585"}}>style</span> &gt;<br></br>
&lt;/<span style={{color:"#C71585"}}>head</span> &gt;<br></br>
&lt;<span style={{color:"#C71585"}}>body</span> &gt;<br></br>

&lt;<span style={{color:"#C71585"}}>h1</span> &gt; <input type="text" id="q3" size="11" maxLength="11" placeholder='Fill the answer' onChange={(e)=>{setUserAnswers(e.target.value)}} />   &lt;/<span style={{color:"#C71585"}}>h1</span> &gt;    <br></br>
&lt; <input type="text" id="q3" size="2" maxLength="2" placeholder='Fill the answer' onChange={(e)=>{setUserAnswers2(e.target.value)}} /> &gt; <span style={{color:"#FFFAF0"}}>CATSTRONAUT</span> &lt;/ <input type="text" id="q3" size="2" maxLength="2" placeholder='Fill the answer' onChange={(e)=>{setUserAnswers3(e.target.value)}} /> &gt;     <br></br>
&lt;<span style={{color:"#C71585"}}>img</span> <span style={{color:"#7FFF00"}}>src</span> =<span style={{color:"#FFD700"}}>''https://space-cat.jpg''</span> / &gt;     <br></br>

&lt;/<span style={{color:"#C71585"}}>body</span> &gt;<br></br>
&lt;/<span style={{color:"#C71585"}}>html</span> &gt;<br></br>
</pre> </div></Col>
<Col  id="apples" span={12}>
  <div  id="applesB" style={{borderStyle: 'solid',width:'400px', backgroundColor:"yellow", textAlign: "center", }}>
<h1> {Val? "space cat": null} </h1>

 <br></br> 
{/* style={{ color: Val ? 'green' : null} */}
<p > {Val? "CATSTRONAUT": null}</p>
<img src= "https://image.freepik.com/free-vector/cute-astronaut-cat-floating-space_7130-1251.jpg"  width="230" height="250"/>
</div> 
<div>
  {localStorage.getItem('userA') ===  'space cat'&&localStorage.getItem('userb') ===  'p'&&localStorage.getItem('userc') ===  'p'?  

  <div>  
    
       <Button className="BU" variant="primary" onClick={handleShow3}> SUBMIT </Button>

  <Modal show={show} onHide={handleClose}> 
    <Modal.Header closeButton>
      <Modal.Title>Woohoo!!!!</Modal.Title>
    </Modal.Header>
    <img src= "https://www.flaticon.com/svg/static/icons/svg/3159/3159066.svg" alt="css"/>
    <Modal.Footer>
      
      <Button variant="primary" onClick={()=>{history.push('/ex7HTML')}}> Go to the Next exersise </Button>
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

