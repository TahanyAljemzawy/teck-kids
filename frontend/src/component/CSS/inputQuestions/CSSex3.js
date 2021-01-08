import React , { useState }from 'react'
import { Button, Modal } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import { Row, Col } from 'antd';
import "./input.css"





function CSSex3() {
  const history = useHistory();

  const [ userAnswers , setUserAnswers ] =  useState();
  const handleShow = () => setShow(true);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
//  const handleShow = () => setShow(true);
  var [ Val,setVal ] =  useState();
  localStorage.setItem('userA',userAnswers)

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
<span style={{color:"#7FFF00"}}>.apple </span> {"{"}  <br></br>
<span style={{color:"	#00FFFF"}}>background-color: lightblue; </span>  <br></br>
<br></br><input type="text" id="q3" size="18" maxLength="18" placeholder='Fill the answer' onChange={(e)=>{setUserAnswers(e.target.value)}} />   <br></br>
<br/>  {"}"}  <br></br>
&lt;/<span style={{color:"#C71585"}}>style</span> &gt;<br></br>
&lt;/<span style={{color:"#C71585"}}>head</span> &gt;<br></br>
&lt;<span style={{color:"#C71585"}}>body</span> &gt;<br></br>

&lt;<span style={{color:"#C71585"}}>h1</span> &gt; <span style={{color:"#FFFAF0"}}>This is a Heading </span> &lt;/<span style={{color:"#C71585"}}>h1</span> &gt;    <br></br>
&lt;<span style={{color:"#C71585"}}>p</span> &gt; <span style={{color:"#FFFAF0"}}>This is a paragraph</span> &lt;/<span style={{color:"#C71585"}}>p</span> &gt;     <br></br>
&lt;<span style={{color:"#C71585"}}>dev</span> <span style={{color:"#7FFF00"}}>class</span> = <span style={{color:"#FFD700"}}>''apple''</span> &gt;<br></br>
&lt;<span style={{color:"#C71585"}}>img</span> <span style={{color:"#7FFF00"}}>src</span> = <span style={{color:"#FFD700"}}>''apple.png''</span> &gt;<br></br>
&lt;/<span style={{color:"#C71585"}}>div</span> &gt;<br></br>
&lt;/<span style={{color:"#C71585"}}>body</span> &gt;<br></br>
&lt;/<span style={{color:"#C71585"}}>html</span> &gt;<br></br>
</pre> </div></Col>
<Col  id="apples" span={12}>
  <div  id="applesB" style={{borderStyle: 'solid',width:'350px', }}>
<ul style={{ marginLeft: Val ? '100px' : '10px',width:'500px'}}>
<li>
<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdw1XqsHo9XAMdITImwsanihWa4KJkUfRXUg&usqp=CAU' alt='apple' style={{width:'100px', height:'100px',  marginLeft: '30px'}}  />
</li>
<li>
<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdw1XqsHo9XAMdITImwsanihWa4KJkUfRXUg&usqp=CAU' alt='apple' style={{width:'100px', height:'100px',  marginLeft: '30px'}}  />

</li>
<li>
<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdw1XqsHo9XAMdITImwsanihWa4KJkUfRXUg&usqp=CAU' alt='apple' style={{width:'100px', height:'100px',  marginLeft: '30px'}}  />

</li>
</ul></div>
<div>
  {localStorage.getItem('userA') ===  'margin-left:"20px"'||localStorage.getItem('userA')=== "margin-left:'20px'"?  

  <div>  
    
       <Button className="BU" variant="primary" onClick={handleShow3}> SUBMIT </Button>

  <Modal show={show} onHide={handleClose}> 
    <Modal.Header closeButton>
      <Modal.Title>Woohoo!!!!</Modal.Title>
    </Modal.Header>
    <img src= "https://www.flaticon.com/svg/static/icons/svg/3159/3159066.svg" alt="css"/>
    <Modal.Footer>
      
      <Button variant="primary" onClick={()=>{history.push('/CSS/ex4')}}> Go to the Next exersise </Button>
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

