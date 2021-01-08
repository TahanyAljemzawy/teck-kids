import React, { Component } from 'react';
import axios from 'axios';
import {storage} from './firebase'

export default class EditMatreals extends Component {
  constructor(props) {
    super(props);
    this.onChangeMaterial = this.onChangeMaterial.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangevideo = this.onChangevideo.bind(this);
    this.handleUpload = this.handleUpload.bind(this);

    this.state = {
      material: '',
      description: '',
      title: '', 
      video : null,
      url :"",
      progress: 0,
    }
  }
  retrieveOneItem() {
    axios.get('http://localhost:8000/materials/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          video: response.data.video,
          material: response.data.material,
          description: response.data.description,
          title: response.data.title
          })
          console.log("retrieve one client side",response.data)

      })
      .catch(function (error) {
        console.log(error);
      })
  }

  componentDidMount() {
    // this.retrieveData();
    this.retrieveOneItem();
    
    }
    onChangevideo(e) {
    
      if(e.target.files[0]){
        this.setState({
          video : e.target.files[0]
        })
        console.log('video',e.target.files[0])
        
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
  onSubmit(e) {
    e.preventDefault();
    const task = {
      material: this.state.material,
      description: this.state.description,
      title: this.state.title,
      video:this.state.video
      
      
    }
    //  console.log(this.props)
     // console.log(task);
    axios.post('http://localhost:8000/materials/update/'+this.props.match.params.id, task)
  //  console.log(this.props.params.id)
      .then( res => console.log(res.data))
  .catch(function (error) {
    console.log(error);
  });
window.location = "/Lissons"
  }
  render() {
    return (
    <div>
      <h3  >Edit </h3>
      <form onSubmit={this.onSubmit}>
        <div >
        <h1  >Material: </h1>
          <input  
              type="text"
              required="{true}"
              value={this.state.material}
              onChange={this.onChangeMaterial}
              />
        </div>
        <div >
        <h1  >Description: </h1>
          <input  
              type="text"
              required="{true}"
              
              value={this.state.description}
              onChange={this.onChangeDescription}
              />
        </div>
        <div >
        <h1>title: </h1>
          <input 
              type="text"
              required="{true}"
              
              value={this.state.title}
              onChange={this.onChangeTitle}
              />
        </div>
        <div >
        <input type="submit" value="EditMatreals" className="btn btn-primary btn btn-outline-#4a148c purple darken-4" />
        </div>
      </form>
    </div>
    )
  }
}