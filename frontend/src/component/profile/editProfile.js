import React, { Component } from 'react';
import axios from "axios";
import "antd/dist/antd.css";

export default class EditProfile extends Component {
    constructor(props) {
      super(props);
  
      //Defining the "this" in the functions using .bind method
      this.onChangeUsername = this.onChangeUsername.bind(this);
      this.onChangePassword = this.onChangePassword.bind(this);
      this.onChangeAge= this.onChangeAge.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
     
  
      this.state = {
        id:localStorage.getItem("id"),
        username: "",
        password: "",
        age: "",
      
      }
    }
       componentDidMount() {
        axios.get("http://localhost:8000/user/account/"+this.state.id)
          .then(response => {
            console.log(response)      
            this.setState({
              username: response.data.userName,
              password: response.data.password,
              age: response.data.age,
            })  
          })
          .catch(function (error) {
            console.log(error);
          })
        }



//Event Handlers:
  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password : e.target.value
    });
  }
  
  onChangeAge(e) {
    this.setState({
      age: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();   
    const user= {
      username: this.state.username,
      password: this.state.password,
      age: this.state.age
    }
    // this event will send the new user info to database
    console.log(user);
    axios.post("http://localhost:8000/user/update/"+this.state.id, user)
      .then(res => console.log(res.data));

    window.location = '/account/'+this.state.id 
  }

// form edit user
  render(){
    return (

      <div 
            style={{
                position: 'absolute', left: '50%', top: '50%',
                transform: 'translate(-50%, -50%)'
            }}>

        <br />
        <div  className="col-md-offset-5 col-md-5" >
        <form className="text-center border border-light p-9" onSubmit={this.onSubmit}>
            <h3 className = "mb-3">
            Edit user Profile 
            </h3>
            <br />
            <div className = "col">
            <label >  New User Name </label>
            <br></br>
            <input required={true} type='text'className="form-control col" value= {this.state.username} onChange={this.onChangeUsername} placeholder='User Name'/>                   
            <br></br>                
            </div>

            <div className = "col">
            <label > New Password </label>
            <br></br>
            <input required={true}  type="password" name="password" className="form-control col"value= {this.state.password} onChange={this.onChangePassword} placeholder='Creat Password' />
            <br></br>
            </div>

            <div className = "col">
            <label >  New Phone Number </label>

            <input required={true}  className="form-control col"  value= {this.state.age} onChange={this.onChangeAge} placeholder='Age' />
            <br></br>
            </div>
            

            <input type='submit' value='Edit Account' className="btn btn-deep-orange darken-4"/>
            <br></br>
            <br></br>
        </form>
   
        </div>
       
        </div>
      
     
    )
}
}