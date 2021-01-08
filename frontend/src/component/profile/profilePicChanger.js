import React, { Component } from 'react';
import axios from 'axios';
import "antd/dist/antd.css";
import { Modal, Button } from 'antd';
import { ImagesArray } from './images';
import {storage} from '../addLesson/firebase'



/************************************************ */
export default class ProfilePicChanger extends Component {
    constructor(props) {
 
        super(props);
        this.onChangeProfileImg = this.onChangeProfileImg.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
        this.state = {
            visible: false,
            ImagesArray,
            image:"",
            role:localStorage.getItem("role"),
            profileImg: null,
            url: ""
        }
    }


    handleUpload = () => {
        const uploadTask = storage.ref(`profileImg/${this.state.profileImg.name}`).put(this.state.profileImg); 
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
          storage.ref('profileImg')
          .child(this.state.profileImg.name)
          .getDownloadURL()
          .then(url => {
              console.log(url);
              this.setState({url:url});
  
          })
      });
    }
  

    onChangeProfileImg(e) {
    
        if(e.target.files[0]){
          this.setState({
            profileImg : e.target.files[0]
          })
          console.log('profileImg',e.target.files[0])
          
        }
      }





    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = async (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
     
    }
    hideModal = (e) => {
        console.log(e)
        this.setState({
            visible: false,
        });
    };

    // handleOk(e) {
    //     console.log('satet url' ,this.state.url)
    //     this.props.handelImageChange(this.state.url)
    //     console.log(e);
    //     this.setState({
    //         visible: false,
    //     });
    // }
      
    

    render() {
        const imageMapper = ImagesArray.map((image) => {
            
            return (
                <div style={{height :'100px',
                width :' 100px'}} key="image.id">
                <img src={image.url}
                style={{width:"100px",height:"100px "}}
                 onClick={() => this.props.handelImageChange(image.url)}
                 height = '100px'
                 width = ' 48px'
                 alt="profpic"
                />
                </div>
            )
        })
        return (
            <div >

               {this.state.role==="student"?   
               <div> <Button type="primary" onClick={this.showModal}>
                    Change Picture
                     </Button>
                     <Modal title="Profile Pic Changer Modal" visible={this.state.visible} onOk={this.handleOk} onCancel={this.hideModal}>
                     {imageMapper}
                    
                    </Modal> 
              </div>: 
              <div> 
                  <Button type="primary" onClick={this.showModal}>
                     Change Picture
                  </Button>
                  <Modal title="Profile Pic Changer Modal" visible={this.state.visible} onOk={this.handleOk} onCancel={this.hideModal}>
              <div>
               <div className = "col">
                <h1>Add Profile Avatar</h1>
                <input 
                  type = "file" 
                  required="true"
                  className = "form-control" 
                  onChange = {this.onChangeProfileImg}
                  />
               </div>  
              

              <button onClick={this.handleUpload}>Upload</button>
            
              <br />
                <img  src={this.state.url}
                style={{width:"100px",height:"100px "}}
                onChange = {this.onChangeProfileImg}
                 height = '100px'
                 width = ' 48px'
                 alt="css"
                />
                <button  onClick={() => this.props.handelImageChange(this.state.url)}>Supmet</button>
             </div>
                 
             </Modal> 
             </div>
               
                }
                
            </div>
        )
    }
}
