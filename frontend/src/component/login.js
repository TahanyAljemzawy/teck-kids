//useState is a Hook that allows you to have state variables in functional components.=> very intersting and easy to use <3 love it
import React , {useState }from 'react';
import axios from 'axios';
//import {link} from 'react-router-dom'
import { useHistory } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';


//  import validate from "./component/validateLogin"
// eslint-disable-next-line 
/****************************************************************/
const Signin = (validate)=>{
  const history = useHistory();
  //the values wich inserted by the user is stored at email and password using setEmail,setPasswword 
  const [ email        , setEmail    ]     = useState();
  const [ password     , setPassword ]     = useState();
  const [ errors     , setErrors ]     = useState({email:"",password:""});
 function validate(email,password) {
  let errors = {};
  if (!email) {
    errors.email = "Email address is required";
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    errors.email = "Email address is invalid";
  }
  if (!password) {
    errors.password = "Password is required";
  } else if (password.length < 5) {
    errors.password = "Password needs to be more than 10 characters";
  }
  return errors;
}
  //we need to send the data from frontend to backend , I will use axios for that ..
  const submit =async (e)=>{
    e.preventDefault();
    setErrors(validate(email,password))
    try {
      const newUser = { email ,password } ;
      const loginRes = await axios.post("http://localhost:8000/api/login" , newUser)
      localStorage.setItem("theToken", loginRes.data.token);
      localStorage.setItem("id", loginRes.data.user.id);
      localStorage.setItem("role", loginRes.data.user.role);
      localStorage.setItem("Name", loginRes.data.user.name)
      history.push('/')
      window.location.reload(false);
       } catch (error) {
      }
    }
  return(
    <div  className = 'logIn'>
      <div className ='container'>
        <div className=" p-5 py-3 px-md-5" size="6" >
            <form  className="form">
            <div style={{float:"right"}}>
                   <div className="image"  >
            <img  src="https://cdn.dribbble.com/users/484196/screenshots/2658398/robs-rocket-3.gif" style={{height:"500px",marginTop:"-40px",float:"left",width:"100%",marginLeft:"190px" }} />
          </div></div>    
        <label htmlFor="formGroupExampleInput">
          
         <div></div>
         <div className="logdes" style={{marginTop:"-70px",marginLeft:"-1000px",height:"34rem",width:"30rem"}}>
          <div style={{marginTop:"140px" ,width:"400px",marginLeft:"40px"}}>
          <h1 style={{fontFamily:"cursive",color:"red"}}>Login</h1>

          <label htmlFor="username" style={{fontSize:"30px",color:"white"}}>Email</label>

        <InputGroup className="mb-3">
        <InputGroup.Append>
        <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
        </InputGroup.Append>
        <FormControl
        name
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          type="text" className="form-control" placeholder="Enter Your email"
          onChange={(e)=>{setEmail(e.target.value)}} 
          required
        />
        </InputGroup> 
       <p style={{color:"red",marginLeft:"-200px"}}>{errors.email &&<p>{errors.email}</p>}</p> 
    <div className="form-group">
    <label htmlFor="username" style={{fontSize:"30px",color:"white"}}>Username</label>

        <InputGroup className="mb-3">
        <InputGroup.Append>
        <InputGroup.Text id="basic-addon2">Password</InputGroup.Text>
        </InputGroup.Append>
        <FormControl
          placeholder="Recipient's password"
          aria-label="Recipient's password"
          aria-describedby="basic-addon2"
          type="password" className="form-control"
          placeholder="Enter Your Password" 
           onChange={(e)=>{setPassword(e.target.value)}}
            required
         />
        </InputGroup> 
        <p  style={{color:"red",marginLeft:"-200px"}}>{errors.password &&<p>{errors.password}</p>}</p> 
    </div>
        <div className="footer">
            <Button  style={{marginLeft:"10rem",backgroundColor:"red"}} as="input" className="btn btn-primary" type="submit" value="Submit"  onClick={submit}    />{' '}
     </div>     
      <h4 style={{color:"white"}}>if you don't have account<a href="/registrate">SignUP</a> </h4>
 </div></div>
</label>  
    </form> 
  </div></div></div>
)};
export default Signin; 
