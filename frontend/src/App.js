import React from 'react';
import Navbar from './components/sidebar/Navbar';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import lessons from './pages/Lessons';
import Exercises from './pages/Exercises';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/lessons' component={lessons} />
          <Route path='/exercises' component={Exercises} />
        </Switch>
      </BrowserRouter>
    </> 
  );
}

export default App;