import React, { Component } from 'react';
import logo from '../img/logo.svg';
import { Link } from 'react-router-dom'




class Nav extends Component{
    render(){

  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-light fixed-top">
    <div className="logomoms col col-lg-2 col-md-2"><img src={logo} alt="logo"/>
    </div>

    <div className="info col col-lg-7 col-md-6">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link">Sobre nosotros <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link">Servicios</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" >Advisors</a>
            </li>
            <li class="nav-item">
                <a class="nav-link">PM Academy</a>
            </li>
            <li class="nav-item">
                <a class="nav-link">Blog</a>
            </li>
            <li class="nav-item">
                <a class="nav-link">Contáctanos</a>
            </li>
        </ul>
        </div>
        </div>
        
        <div className="buttons col col-lg-3 col-md-3">
         <Link to="/login"> <button type="button" class="btn btn-light m-2" id="ingresa">INGRESA</button></Link> 
         <Link to="register"> <button type="button" class="btn btn-light m-2" id="unete">ÚNETE</button></Link>
        </div>
</nav>
) }
}

export default Nav