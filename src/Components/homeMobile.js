import React from 'react';
import '../homeMobile.css';
import logo from '../img/logo.svg';
import {Link} from 'react-router-dom';

function HomeMobile() {
    return (

        <React.Fragment>
                      
                    <nav class="navbar navbar-expand-lg navbar-dark bg-light">
                        <div className="logomoms col col-lg-2 col-md-2">
                        <Link to="/home"><img src={logo} alt="logo"/></Link>
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

                    <div class="main-container">

                    <div class="home-intro">
                    <div class="home-intro__wrapper">
                    <div class="home-intro__block">
                    <h1 class="home-intro__subtitle">Trusted by more than a thousand women and companies</h1>
                    <h1 class="home-intro__title home-intro__title--playfair">We connect female talent with the very best companies that have flexible offers for them.</h1>
                    </div>

                    <div class="row justify-content-around">
                    <div class="home-intro__column col col-lg-5 col-sm-3">
                    <div class="home-block home-block--fill">
                    <h1 class="home-block__text home-block__text--blue">I&#x27;m an individual looking for my next professional opportunity.</h1>
                    <Link to="register"> <button type="button" class="btn btn-light m-2" id="unete">Únete a nosotros</button></Link>
                    </div>
                    </div>
                    <div class="home-intro__column col col-lg-5 col-sm-3">
                    <div class="home-block">
                    <h1 class="home-block__text">I&#x27;m looking to hire for a role or project on behalf of a company.</h1>
                    <Link to="/login"> <button type="button" class="btn btn-light m-2" id="ingresar">Regístrate</button></Link>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>

                    <div className="home-intro__anchor inline-block">
                    <div className="home-intro__anchor__text">Conoce más</div>
                   </div>   

                   <div class="home-heading">
                   <div class="home-heading__wrapper">
                   <h1 class="home-heading__subtitle home-heading__subtitle--pink">Our Purpose</h1>
                   <h1 class="home-heading__title">The maternity GAP is the real GAP</h1>
                   <div class="home-heading__text">Being a working mom is a real challenge, that’s the real gap. So, companies need to innovate the way they seek for female talent.</div>
                   </div>
                   </div>       

                   <div class="home-intro__content row justify-content-around">
                   <div class="home-intro__column col col-lg-6 col-sm-4">
                   </div>
                   </div>


                    </div> 
        </React.Fragment>
    );
}

export default HomeMobile;