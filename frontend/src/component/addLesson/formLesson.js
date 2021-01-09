import React, {Component} from 'react';
import {storage} from './firebase'
import axios from 'axios';
import {Form , Button} from 'react-bootstrap'
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
const queryString = require('query-string');
/************************************************** */
toast.configure();//for the notification

class Formlesson extends Component {
  


  constructor(props) {
    super(props);
    this.onChangeMaterial = this.onChangeMaterial.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangevideo = this.onChangevideo.bind(this);
    this.handleUpload = this.handleUpload.bind(this);



    this.state = {
      video: null,
      url: '',
      progress: 0,
      material: '',
      description: '',
      title: '',
      role:localStorage.getItem("role")
    }
    
  }
  handleUpload = () => {
      const uploadTask = storage.ref(`videos/${this.state.video.name}`).put(this.state.video); 
      uploadTask.on('state_changed', 
      (snapshot) => {
        // progrss function ....
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        this.setState ({
          progress : progress
        })
      }, 
      (error) => {
           // error function ....
        console.log(error);
      }, 
    () => {
        // complete function ....
        storage.ref('videos')
        .child(this.state.video.name)
        .getDownloadURL()
        .then(url => {
            console.log(url);
            this.setState({url:url});

        })
    });
  }

  onChangeMaterial(e) {
    this.setState({
      material: e.target.value
    })
  }
  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    })
  }
  onChangeTitle(e) {
    this.setState({
      title: e.target.value
    })
  }
  video
  onChangevideo(e) {
    
    if(e.target.files[0]){
      this.setState({
        video : e.target.files[0]
      })
      console.log('video',e.target.files[0])
      
    }
   
  }
  onSubmit(e) {
    e.preventDefault();
    console.log('this is the id',queryString.parse(this.props.location.search));
    const courseId = queryString.parse(this.props.location.search);
    //declare an obj that holds all values after change
    const task = {
      title: this.state.title,
      material: this.state.material,
      description: this.state.description,
      video: this.state.url,
      role:localStorage.getItem('role'),
      courseId:courseId.id
    }
    console.log('task before send',task);
    axios.post('http://localhost:8000/materials/add', task) //create?
      .then(res => { 
        if (res.status === 200) 
        toast("Success! New lesson is added ", { type: "success" });
      else {
          toast("Something went wrong :(", { type: "error" });
        } });
     
  
  }

  onSubmit(e) {
    e.preventDefault();
    //declare an obj that holds all values after change
    const task = {
      title: this.state.title,
      material: this.state.material,
      description: this.state.description,
      video: this.state.url,
      role:localStorage.getItem("role")
      
    }
    console.log(task);
    const res = axios.post('http://localhost:8000/materials/add', task) //create?
      res.then(res => console.log(res.data));
      console.log(res.data);
      /*
      if (res.status === 200) 
      toast("Success! New lesson is added ", { type: "success" });
    else {
        toast("Something went wrong :(", { type: "error" });
      } 
*/
  
    console.log(task);
   
  }



  
  render() {
    return (

      
      <div 
      style={{
        padding: '10px',
        width: '600px',
        border: '4px solid #080600',
        borderTopLeftRadius: '20px',
        borderTopRightRadius: '20px',
        border: '1px solid',
        padding: '70px',
        boxShadow: '5px 10px 10px #888888' ,
        margin:'auto'
      }}>
      <Form>
              <Form.Group>
                <Form.File id="exampleFormControlimage" label="Add image" onChange = {this.onChangevideo} />
                 <iframe  title="myFrame" src={this.state.url} alt="firebase-image" height='400' style={{ width: '100%',height: 'auto'}}></iframe>
                 <Button  onClick={this.handleUpload}>Upload</Button>
              </Form.Group>
               <Form.Group controlId='formBasiccourseTitel'>
                <Form.Label>matireal</Form.Label>
                <Form.Control type='text' placeholder='Enter the name of lesson' onChange = {this.onChangeMaterial} />
              </Form.Group>
              <Form.Group controlId='formBasiccourseTitel'>
                <Form.Label>Title</Form.Label>
                <Form.Control type='text' placeholder='Enter the course titel' onChange={this.onChangeTitle} />
              </Form.Group>
              <Form.Group controlId='formBasicDescription'>
                <Form.Label>Description</Form.Label>
                <Form.Control size="lg" type='text' placeholder='course Description' onChange={this.onChangeDescription} />
              </Form.Group>
              <Button variant='primary' type='submit' onClick={this.onSubmit}>
                Submit
              </Button>
              <Button variant='primary' type='submit' onClick={()=>{}}>
                Back To profile
              </Button>
            </Form>
      </div>
    )
  }
}

export default Formlesson; 