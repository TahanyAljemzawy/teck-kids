import React , { useState }from 'react'
import { Button, Modal } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import { Row, Col } from 'antd';
import "./input.css"



function CSSex4() {
    const history = useHistory();

    const [ userAnswers1 , setUserAnswers1 ] =  useState();
    const [ userAnswers2 , setUserAnswers2 ] =  useState();

    var correctAnswers = ['background-color: linen;','body']
    // const [ userAnswers , setUserAnswers ] =  useState();
  const handleShow = () => setShow(true);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
//  const handleShow = () => setShow(true);
  var [ Val,setVal ] =  useState();
  localStorage.setItem('userA',userAnswers1)
  localStorage.setItem('userb',userAnswers2)


  const handleShow3 = ()=>{
    setVal(true)
    handleShow()
  }
   
    return (
        <div>
              <span>

              <p  id='idid'> ▶▶▶Set the background color for the page to "darksalmon" and the background color for {`<h1>`} to "lightblue". ◀◀◀</p>
              <Row>

<Col  span={12}>  <div  id="textt">
  <pre>
  <br></br>

  &lt;!<span style={{color:"#C71585"}}>DOCTYPE</span><span style={{color:"#8B008B"}}>html</span>&gt;
  <br></br>
&lt;<span style={{color:"#C71585"}}>html</span> &gt;<br></br>
&lt;<span style={{color:"#C71585"}}>head</span> &gt;<br></br>
&lt;<span style={{color:"#C71585"}}>style</span> &gt;<br></br>
<span style={{color:"#7FFF00"}}>body </span> {"{"}  <br></br>
<br></br>  <input type="text" id="q4" size="20" maxLength="30" placeholder='Fill the answer' onChange={(e)=>{setUserAnswers1(e.target.value)}} />   <br></br>
<br/>  {"}"}  <br></br>
<input type="text" id="q5" size="5" maxLength="5" placeholder='Fill ' onChange={(e)=>{setUserAnswers2(e.target.value)}} />   {"{"}  <br></br>
<span style={{color:"	#00FFFF"}}>background-color:lightblue;</span>  <br></br>
{/* <br></br><input type="text" id="q3" size="18" maxLength="18" placeholder='Fill the answer' onChange={(e)=>{setUserAnswers(e.target.value)}} />   <br></br> */}
<br/>  {"}"}  <br></br>

&lt;/<span style={{color:"#C71585"}}>style</span> &gt;<br></br>
&lt;/<span style={{color:"#C71585"}}>head</span> &gt;<br></br>
&lt;<span style={{color:"#C71585"}}>body</span> &gt;<br></br>

&lt;<span style={{color:"#C71585"}}>h1</span> &gt; <span style={{color:"#FFFAF0"}}>This is a Heading </span> &lt;/<span style={{color:"#C71585"}}>h1</span> &gt;    <br></br>
&lt;<span style={{color:"#C71585"}}>p</span> &gt; <span style={{color:"#FFFAF0"}}>This is a paragraph</span> &lt;/<span style={{color:"#C71585"}}>p</span> &gt;     <br></br>

&lt;/<span style={{color:"#C71585"}}>body</span> &gt;<br></br>
&lt;/<span style={{color:"#C71585"}}>html</span> &gt;<br></br>
</pre> </div></Col>


<Col  id="apples" span={12}>
  <div  id="applesB" style={{borderStyle: 'solid',width:'350px', }}>
<div style={{ background: Val ? 'darksalmon' : null}}>
<h1  style={{ background: Val ? 'lightblue' : null}} > This is a Heading  </h1 > <br></br>  <br></br>  <br></br>
<p > This is a paragraph </p >    <br></br>  <br></br>  <br></br>
</div></div>
<div>
  {localStorage.getItem('userA') ===  'background-color:darksalmon;'&& localStorage.getItem('userb')=== "body"?  

  <div>  
    
       <Button className="BU" variant="primary" onClick={handleShow3}> SUBMIT </Button>

  <Modal show={show} onHide={handleClose}> 
    <Modal.Header closeButton>
      <Modal.Title>Woohoo!!!!</Modal.Title>
    </Modal.Header>
    <img src= "https://www.flaticon.com/svg/static/icons/svg/3159/3159066.svg" alt="css"/>
    <Modal.Footer>
      
      <Button variant="primary" onClick={()=>{history.push('/CSS/ex5')}}> Go to the Next exersise </Button>
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

export default CSSex4
