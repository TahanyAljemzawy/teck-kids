import axios from 'axios';
import React from 'react';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import "antd/dist/antd.css";
import { Link, withRouter } from "react-router-dom";
import ProfilePicChanger from "./profilePicChanger";
import HtmlCard from '../CourseCards/HtmlCard';
import CssCard from '../CourseCards/CssCard';
import { Card } from 'antd';
import { Button} from 'react-bootstrap';
const queryString = require('query-string');


/************************************************** */



class Personalprofile extends React.Component {
    // this component is a pairent component of profilepicChanger and the props are inharitence
    constructor(props) {
        super(props);
        // ID forme the local storage 
        // and the user info we need 
        this.state = {
             id:localStorage.getItem("id"),
            name:"",
            age:"",
            img:"",
            profilepic:[],
            htmlCourse:'',
            cssCourse:'',
            jsCourse:'',
            role:localStorage.getItem("role"),
            courses:[],//contains the courses id of the user
            array:[]//contains the coursees returend from the db to render it 
            
        }

    }
   
// THIS FUNCTION WILL HANDELL THE IMAGES ARE COMNMING FROM PIC CHANGER COMPONENT AND WLL SEND A PUT REQ TO DATABASE 
    handelImageChange= async (profilepic)=>{
        console.log("hey",profilepic)
        
        this.setState({
            img :profilepic }) 
            var newImg = {"img":profilepic}
            try {     
                await axios.put("http://localhost:8000/user/account/" + this.state.id,newImg);
               } catch (error) {
                  alert(error.response.data.msg)
                  }  
    }


    componentDidMount= async()=> {
        console.log(this.state.role)
       try{//bring info of the user 
        await axios.get("http://localhost:8000/user/account/" + this.state.id)
            .then(res => {
                // console.log(res.data)
                console.log("id of teacher",this.state.id)
                this.setState({ 
                    name: res.data.userName,
                    age: res.data.age,
                    img:res.data.img,
                    htmlCourse:res.data.htmlCourse,
                    cssCourse:res.data.cssCourse,
                    jsCourse:res.data.jsCourse,
                    courses:res.data.Courses

                 })
                 console.log("this is courses of this teacher",this.state.courses)
                 
            })
           var data = this.state.courses
           var myCourses = []
           
           await
            data.map((courseId) => (
             axios.get("http://localhost:8000/teacher/card/"+courseId)//return the information of the courses the user teach
                .then(res=>{ 
                    this.setState({course:res.data})
                 myCourses.push(res.data)
                this.setState({array:myCourses})
                })
            )
            
            ,[])
        }catch(error) {
            alert(error)
            } 
   } 
   

    render() {
        const { Meta } = Card;
        if(this.state.htmlCourse){
            var x = <HtmlCard />
        }
        if(this.state.cssCourse){
            var y = <div style={{marginLeft:"700px" , marginTop:"-300px" }} ><CssCard /></div>
        }
      
        return (
            
            <div style={{marginLeft:"600px"}}>
                <span> {this.state.role==="teacher"? "hello teacher" : "helllo student" }</span>
                
            <div 
            style={{
                // position: 'absolute', right: '0%', top: '55%',
                // transform: 'translate(-50%, -50%)',
                // border:'2px solid pink',
                // height:'500px',
                // padding:'20px',
            }}>
            <div style={{marginLeft:"-550px",float:"left"}}>
                
                <Avatar  size={200} icon={<UserOutlined />} src={this.state.img} /><br/>
                <ProfilePicChanger handelImageChange={this.handelImageChange} /><br />

                <h2 style={{  fontFamily:"Cursive"}}>My Profile</h2>
               
                 <Link to ={"/edit/" + this.state.id}  className="btn btn-success" >Edit profile</Link>
              
              <br/>
                <h3  style={{  fontFamily:"Cursive"}}>{this.state.name}</h3>
                <span style={{  fontFamily:"Cursive"}}>Age</span>
                <h3  style={{  fontFamily:"Cursive"}}>{this.state.age}</h3>
                  {x}
                {y}
     </div>
             </div>
             <br/>
             <label>{this.state.role==="teacher"? "to add a card that will help u to show your lessons" :  "learn a new lesson"} </label>
             <Button>{this.state.role==="teacher"? <Link to="/teacher/addcard" style={{color:'white'}}> Add New Course </Link>:<Link to="/"> register to lesson </Link>}</Button> <br/>
            
             <div>
                 <h3>My Courses</h3>
                <ol>
                
                    {(this.state.array).map((course,i)=>{
                        return(
                        
                        <li key={i}>
                            <Card
                            hoverable
                            style={{ width: 400 ,hight: 200 , margin : 'auto',padding:'1rem'}}
                            cover={<img alt="courseImg" src={course.image} />}>
                            <Meta title={course.Title} description={course.Desceription} />

                        {this.state.role==="teacher"?  <Link to={`/addNewLesson ?id=${course._id}`} style={{fontSize:'1.2rem', padding:'2rem'}} > Add a new lesson </Link>  : <Link to={`/Lissons ?id=${course._id}`} style={{fontSize:'1.2rem', padding:'2rem'}} > Lets Study &#128516;</Link> }
                            </Card>
                        </li>
                    )
                    
                    })}
                 </ol>
             </div>
         
             </div>
            
            
        )
    }
}

export default withRouter(Personalprofile);