import React from 'react';
import '../homeMobile.css'
import logo from '../img/logo.svg'

function HomeMobile() {
    return (

        <React.Fragment>
          <nav class="navbar navbar-expand-lg navbar-dark bg-light">
          <img src={logo}/>
  
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="#">Sobre nosotros <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Servicios</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Advisors</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">PM Academy</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Blog</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Contáctanos</a>
      </li>
    </ul>
    <button type="button" class="btn btn-light m-2">Light</button>
    <button type="button" class="btn btn-light m-2">Light</button>
  </div>
</nav>             

        </React.Fragment>
    );
}

export default HomeMobile;