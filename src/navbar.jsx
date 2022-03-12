import React, { Component } from 'react'
import { Link } from 'react-router-dom';


class Navbar extends Component {
    state = {  } 
    render() { 
        return (<nav  className="navbar navbar-expand-lg navbar-dark bg-transparent">
        <div  className="container-fluid">
          <a  className="navbar-brand" href="/">Navbar</a>
          <button  className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span  className="navbar-toggler-icon"></span>
          </button>
          <div  className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul  className="navbar-nav mr-auto mb-2 mb-lg-0">
            
              <li  className="nav-item">
                <Link  className="nav-link" to="/home">Home</Link>
              </li>
              <li  className="nav-item">
                <Link  className="nav-link" to="/movies">Movies</Link>
              </li>
              <li  className="nav-item">
                <Link  className="nav-link" to="/tv">tv</Link>
              </li>  
          </ul>     
          </div>
          <ul  className="navbar-nav ml-auto ">
            
              <li  className="nav-item">
                <Link  className="nav-link" to="/register">register</Link>
              </li>
              <li  className="nav-item">
                <Link  className="nav-link" to="/login">login</Link>
              </li>
              </ul>
                      
        </div>
      </nav>);
    }
}
 
export default Navbar;