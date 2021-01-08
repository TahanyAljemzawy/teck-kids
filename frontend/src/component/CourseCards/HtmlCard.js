import React from 'react'
import "../DESCRIPTIONS/des.css"
import { Button, Card  } from 'react-bootstrap';
import { useHistory } from "react-router-dom";


/************************************************** */

export default function HtmlCard() {

 const history = useHistory();

    return (
<div style={{marginLeft : "00px"}}>
<Card style={{ width: '700px', height:'200px',padding:'20px' , marginTop:'20px'}}>
  <Card.Body>
    
    <Card.Title><h1 className="hh">HTML</h1></Card.Title>  <img width='300px' src="https://2.bp.blogspot.com/-eO5lbx98AXU/VgJteZXqfQI/AAAAAAAAAU8/jVrj2vfkWZQ/s1600/what-is-html.jpg"  alt="html"></img>
    <Card.Text> <span className="par">  
    Say Hello to HTML Elements 😁
    you'll beat all the challenges 💪 ,
     let's GOOOO let's be a great bulders
    </span>
    </Card.Text>
    
    <Button className="hh7"  onClick={()=>{history.push('/HTMLcourse')}}>Go to HTML</Button>
  </Card.Body>
</Card>
</div> 
    )
}