import React, { Component } from 'react';
import { MenuItems } from './MenuItems'
import { Link } from 'react-router-dom';
// import logo from './logo.png';
import './Navbar.css';

export class NavBar extends Component {

  state = { clicked: false , token: localStorage.getItem('theToken')}

  handleClick = () => {
    console.log('this is ',this.state.token)
      this.setState({ clicked: !this.state.clicked })
  }
   logout=()=> {
    window.localStorage.clear();
    window.location = "/";
  }
  
  
  render() {
    if(this.state.token){
      var logout = <li className="nav-links1" onClick={this.logout}>
      logout </li>
    }else{var register = <li className="nav-links1"><Link to='/registrate'>Register</Link></li>
    var login = <li className="nav-links1"><Link to='/login'>login</Link></li>
    }
  
    return(
      <nav className="NavbarItems1">
          <h1 className="navbar-logo1"><Link to='/'>Teck kid</Link><span className="fab fa-react"></span></h1>
          <div className="menu-icon1" onClick={this.handleClick}>
              <span className={this.state.clicked ? 'fas fa-times' : 'fas fa-hamburger'}></span>
          </div>
          <ul className={this.state.clicked ? 'nav-menu1 active' : 'nav-menu1'}>
              {MenuItems.map((item, index) => {
                  return (
                      <li key={index}>
                          <Link className={item.cName} to={item.url}>
                          {item.title}
                          </Link>
                       </li>
                  )
              })}


              {logout}
              {login}
              {register}
          </ul>
          
         
      </nav>
  )
  }
}

export default NavBar

