import React , { useState }from 'react'
import { Button, Modal } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import { Row, Col } from 'antd';
import "./input.css"



function CSSex4() {
    const history = useHistory();

    const [ userAnswers1 , setUserAnswers1 ] =  useState();
    const [ userAnswers2 , setUserAnswers2 ] =  useState();
    const [ userAnswers3 , setUserAnswers3 ] =  useState();
    const [ userAnswers4 , setUserAnswers4 ] =  useState();



    var correctAnswers = ['background-color: linen;','body']
    // const [ userAnswers , setUserAnswers ] =  useState();
  const handleShow = () => setShow(true);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
//  const handleShow = () => setShow(true);
  var [ Val,setVal ] =  useState();
  localStorage.setItem('userA',userAnswers1)
  localStorage.setItem('userb',userAnswers2)
  localStorage.setItem('userc',userAnswers3)
  localStorage.setItem('userd',userAnswers4)




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
<span style={{color:"#7FFF00"}}>h1</span> {"{"}  <br></br>
<br></br>  <input type="text" id="q4" size="20" maxLength="30" placeholder='Fill the answer' onChange={(e)=>{setUserAnswers1(e.target.value)}} />   <br></br>
<span style={{color:"#7FFF00"}}>p</span> {"{"}  <br></br>
<br></br> <input type="text" id="q5" size="20" maxLength="30" placeholder='Fill the answer' onChange={(e)=>{setUserAnswers2(e.target.value)}} /> <br></br>
 <input type="text" id="q5" size="7" maxLength="7" placeholder='Fill' onChange={(e)=>{setUserAnswers3(e.target.value)}} /> <span style={{color:"	#00FFFF"}}>: 3px solid green;</span>  
{/* <br></br><input type="text" id="q3" size="18" maxLength="18" placeholder='Fill the answer' onChange={(e)=>{setUserAnswers(e.target.value)}} />   <br></br> */}
<br/>  {"}"}  <br></br>
<span style={{color:"#7FFF00"}}>#catImg </span> {"{"}  <br></br>
<span style={{color:"	#00FFFF"}}>width="230"; </span>  <br></br>
<span style={{color:"	#00FFFF"}}>height="250"; </span>  <br></br>
 <span style={{color:"	#00FFFF"}}>backgroundImage: url(</span>  <input type="text" id="q3" size="26" maxLength="300" placeholder='Fill the answer' onChange={(e)=>{setUserAnswers4(e.target.value)}} /> <span style={{color:"	#00FFFF"}}>)</span>  <br></br>
<br/>  {"}"}  <br></br>

&lt;/<span style={{color:"#C71585"}}>style</span> &gt;<br></br>
&lt;/<span style={{color:"#C71585"}}>head</span> &gt;<br></br>
&lt;<span style={{color:"#C71585"}}>body</span> &gt;<br></br>

&lt;<span style={{color:"#C71585"}}>h1</span> &gt; <span style={{color:"#FFFAF0"}}>This is a Heading </span> &lt;/<span style={{color:"#C71585"}}>h1</span> &gt;    <br></br>
 &lt;<span style={{color:"#C71585"}}>p</span> &gt; <span style={{color:"#FFFAF0"}}> This is a cool cat  </span> &lt;/<span style={{color:"#C71585"}}>p</span> &gt;     <br></br>
 {/* &lt;<span style={{color:"#C71585"}}>img</span> / &gt;     <br></br> */}
 &lt;<span style={{color:"#C71585"}}>dev</span> &gt; <span style={{color:"#FFFAF0"}}> </span> &lt;/<span style={{color:"#C71585"}}>dev</span> &gt;     <br></br>
 &lt;<span style={{color:"#C71585"}}>dev</span><span style={{color:"#7FFF00"}}>id</span> =<span style={{color:"#FFD700"}}>''catImg''</span> &gt;<span style={{color:"#FFFAF0"}}></span> &lt;/<span style={{color:"#C71585"}}>dev</span> &gt;    <br></br>



&lt;/<span style={{color:"#C71585"}}>body</span> &gt;<br></br>
&lt;/<span style={{color:"#C71585"}}>html</span> &gt;<br></br>
</pre> </div></Col>


<Col  id="apples" span={12}>
  <div  id="applesB" style={{borderStyle: 'solid',width:'350px', }}>
<div>
<h1  style={{ color: Val ? 'green' : null}} > This is a Heading  </h1 > <br></br> 
<p  style={{ textAlign: Val ? 'center': null , border: Val ? '3px solid yellow': null }}  > This is a cool cat </p >    <br></br> 
<img  style={{ 
      backgroundImage: Val ? `url("https://cutewallpaper.org/21/animated-cat-pics/Orange-Meow-Meow-Micro-Letter-Expression-Emoji-Sticker-GIF.gif")` : null
    }}  width="230" height="250"/>

</div></div>
<div>
  {localStorage.getItem('userA') ===  'color: green;' && localStorage.getItem('userb') ===  'text-align: center;' && localStorage.getItem('userc') ===  'border' && localStorage.getItem('userd') ===  'https://coolest-cat-ever.gif'?  

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

export default CSSex4
