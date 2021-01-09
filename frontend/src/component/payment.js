import React , { useState }from 'react'
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { useHistory, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
//require('dotenv').config();
/************************************************/
toast.configure();

function Payment(props) {
    const [userCourses, setUserCourses] = useState([]);
    const history = useHistory();
    const data = useLocation()
    console.log(props)
    console.log(data);
    var userId = localStorage.getItem('id');
    
    const [product] = useState({
        name: data.state.name,
        price : data.state.price,
        productBy:data.state.productBy,
        id:data.state.id
    })
console.log(product);


   const makePayment = async token =>{
   
    console.log(token);
    console.log("haio ",product);
    if(userId === null ){  
        toast("You are not logged in! ", { type: "error" });
      history.push('/login')}
    else
      try {
        const userInfo = await axios.get(
          "http://localhost:8000/user/account/" + userId
        );
        setUserCourses(userInfo.data.Courses);
        console.log("this is courses of this teacher", userInfo.data.Courses);
  
        for (var x = 0; x < userCourses.length; x++)
          if (userCourses[x] === obj.id) {
            toast("You are already registersd at this course", { type: "error" });
            console.log("jjjj");
          } else {
            console.log("nnnn");
          }
      } catch (error) {}

    try{
           const response= await axios.post("http://localhost:8000/payments/charge", {token, product});
           
            // const { status } = response.data
           
            if (response.data === "success") {
                toast("Success! Check email for details", { type: "success" });
                history.push('/account/'+userId);
              } else {
                toast("Something went wrong", { type: "error" });
              } 
        
        } catch (error) {
        console.log(error)
        } 
    }

    return (
        <div>
            <StripeCheckout
            stripeKey={process.env.REACT_APP_KEY }
            token ={makePayment}
            name = 'Tick Kid'
            amount = {product.price * 100}>
       
            </StripeCheckout>
    <h1></h1>

              
           

        </div>
    )
}

export default Payment
