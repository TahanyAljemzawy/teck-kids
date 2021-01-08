import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
const queryString = require('query-string');
 
const Task = props => (
  <tr>
    <td>{props.task.material}</td>
    <td>{props.task.description}</td>
    <td>{props.task.title}</td>
    <td>
    <iframe title="myFrame" src= {props.task.video}width='600' height='400' className="w3-round" alt="TheLessonVedio" />
    </td>
    <td>
      <Link to={"/EditMatreals/"+props.task._id}>edit</Link> <a href="/Lissons:kk"  onClick={() => { props.deleteTask(props.task._id) }}>delete</a>
    </td>
  </tr>
) 
export default class calender extends Component {
  constructor(props) {
    super(props);
    this.deleteTask = this.deleteTask.bind(this)
    this.state = {
      tasks: [],
      role:localStorage.getItem("role"),
      courseId: ''
     };
  }
  componentDidMount() {
    const courseId = queryString.parse(this.props.location.search);
    console.log(courseId);
    axios.get('http://localhost:8000/materials/lessons/'+courseId.id)
      .then(response => {
        this.setState({
          tasks: response.data,
          
        })
        console.log('this is my data', response.data)
        })
      .catch((error) => {
         console.log(error);
        })
  }

  deleteTask(id) {
    axios.delete('http://localhost:8000/materials/'+id)
      .then(response => { console.log(response.data)});

      //use filter to render elements except the deleted item 
    this.setState({
      tasks: this.state.tasks.filter(el => el._id !== id)
    })
  }

  //use this function to render every added task 
  taskList() {
    return this.state.tasks.map(currenttask => {
      console.log(currenttask._id)
      return <Task task={currenttask} deleteTask={this.deleteTask} key={currenttask._id}/>
    })
  }
 
  render() {

    
    return (
      
      <div>
        <div>
       
        <table className="table table-bordered">
          <div style={{color:'red'}}></div>
          <thead>
            <tr>
            <th></th>
              <th ></th>
              <th ></th>
              <td >video</td>
              
              <Link to="/addNewLesson:kk">
               <button type="button">
                Add Lessons
              </button>
              </Link>
            </tr>
          </thead>
          <tbody>
            { this.taskList() }
          </tbody>
        </table>
        </div>

        <div className = "note-app">
    </div>
    </div>
  )
};
}