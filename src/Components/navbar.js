import React, { Component } from 'react';
import logo from '../img/logo.svg';
import { Link } from 'react-router-dom';
import '../homeMobile.css';

class Nav extends Component{
    render(){

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-light fixed-top">
    <div className="logomoms col col-lg-2 col-md-2">
        <Link to="/home"><img src={logo} id="logo-nav" alt="logo"/></Link>
    </div>

    <div className="info col col-lg-7 col-md-6">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
            <li className="nav-item">
                <a href="/#" className="nav-link">Sobre nosotros <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
                <a href="/#" className="nav-link">Servicios</a>
            </li>
            <li className="nav-item">
                <a href="/#" className="nav-link">Contáctanos</a>
            </li>
        </ul>
        </div>
        </div>
        
        <div className="buttons col col-lg-3 col-md-3">
         <Link to="/login"> <button type="button" className="btn btn-light m-2" id="ingresa">INGRESA</button></Link> 
         <Link to="/register"> <button type="button" className="btn btn-light m-2" id="unete">ÚNETE</button></Link>
        </div>
</nav>
) }
}

export default Nav
