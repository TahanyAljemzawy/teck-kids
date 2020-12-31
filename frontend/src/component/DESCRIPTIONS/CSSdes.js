import React, { useState } from 'react'
import "./des.css"
import { Button, Card  } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import StripeCheckout from "react-stripe-checkout";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
/**************************************************** */

export default function CSSdes() {
 const history = useHistory();

 const [product] = useState({
   name   : 'Teck-kid',
   price  : 100, 
   description : 'CSS course'
 })

  const routeChange = async() =>{ 
    //I need to check if the user logged in if not send him to the login page
    var userId = localStorage.getItem('id');
    console.log(userId)
    if( userId === null ){
    history.push('/login')
    }else {
  
    try {
    //check if the user is not alrady registered in the css course and redirect him to the course page
    const retrevd = await axios.get("http://localhost:8000/course/user/"+userId)  
    if( retrevd.data.cssCourse === "Registerd" )
    {
     console.log("you are already regestered")
     history.push('/CSScourse')
    }
    //if the is not register  change the null value of the course to be regesterd
    var newCourse = {"cssCourse":"Registerd"}
    await axios.put("http://localhost:8000/course/addCourse/"+userId, newCourse);
    history.push('/account/:id')
    } catch (error) {
    alert(error.response.data.msg)
    }   
    }
  }
  toast.configure();
  async function handleToken(token) {
    console.log(token , product);
    /*
    const response = await axios.post(
      "http://localhost:8000/payments/charge",
      { token, product }
    );
    console.log(token , product);
    const { status } = response.data;
    console.log("Response:", response.data);
    if (status === "success") {
      toast("Success! Check email for details", { type: "success" });
    } else {
      toast("Something went wrong", { type: "error" });
    }*/
  }

  return (
  <div style={{marginLeft : "500px"}}>
  <Card style={{ width: '600px' }}>
    <Card.Body>
    
    <Card.Title><h1 className="hh">CSS</h1></Card.Title>  <img src="https://2.bp.blogspot.com/-me_vlpqkQGw/VgJwY3wm_SI/AAAAAAAAAVI/cyg9I6tfXWs/s400/What%2Bis%2BCSS.jpg"  alt="css" ></img>
    <Card.Text> <p className="par">  
    Let's play with colors and make our pages more colorfull 😍
    </p>
    </Card.Text>
    
    <Button className="hh7"  onClick={routeChange} >Register Now</Button>
    <StripeCheckout
        stripeKey="pk_test_51I3lU8JcY9KJTdicuwdaAS2Y1sePa698fW7C5peecuSzWbgOov34REXHvoedFBVISFqGyYSCakwBhGyQYndgOBWI00SzCaAuQm"
        token={handleToken}
        amount={product.price * 100}
        name={product.name}
        
      />
    </Card.Body>
  </Card>
  </div> 
  )
}
 