import React from 'react';
import '../homeMobile.css';
import logo from '../img/logo.svg';
import {Link} from 'react-router-dom';
import image1 from '../img/home-purpose_1.jpg'
import image2 from '../img/home-purpose_2.jpg'
import image3 from '../img/home-purpose_3.jpg'


function HomeMobile() {
    return (

        <React.Fragment>
                      
                    <nav className="navbar navbar-expand-lg navbar-dark bg-light">
                        <div className="logomoms col col-lg-2 col-md-2">
                        <Link to="/home"><img src={logo} alt="logo"/></Link>
                        </div>

                        <div className="info col col-lg-7 col-md-6">
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                              <span className="navbar-toggler-icon"></span>
                            </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link">Sobre nosotros</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link">Servicios</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" >Advisors</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link">PM Academy</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link">Blog</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link">Contáctanos</a>
                                </li>
                            </ul>
                            </div>
                            </div>
                            <div className="buttons col col-lg-3 col-md-3">
                             <Link to="/login"> <button type="button" className="btn btn-light m-2" id="ingresa">INGRESA</button></Link> 
                             <Link to="register"> <button type="button" className="btn btn-light m-2" id="unete">ÚNETE</button></Link>
                            </div>
                    </nav>

                    <div className="main-container">

                    <div className="home-intro">
                    <div className="home-intro__wrapper">
                    <div className="home-intro__block">
                    <h1 className="home-intro__subtitle">Trusted by more than a thousand women and companies</h1>
                    <h1 className="home-intro__title home-intro__title--playfair">We connect female talent with the very best companies that have flexible offers for them.</h1>
                    </div>

                    <div className="row justify-content-around">
                    <div className="home-intro__column col col-lg-5 col-sm-3">
                    <div className="home-block home-block--fill">
                    <h1 className="home-block__text home-block__text--blue">I&#x27;m an individual looking for my next professional opportunity.</h1>
                    <Link to="register"> <button type="button" className="btn btn-light m-2" id="unete">Únete a nosotros</button></Link>
                    </div>
                    </div>
                    <div className="home-intro__column col col-lg-5 col-sm-3">
                    <div className="home-block">
                    <h1 className="home-block__text">I&#x27;m looking to hire for a role or project on behalf of a company.</h1>
                    <Link to="/login"> <button type="button" className="btn btn-light m-2" id="ingresar">Regístrate</button></Link>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>

                    <div className="home-intro__anchor">
                    <div className="home-intro__anchor__text">Conoce más</div>
                    
                   </div>   

                   <div className="home-purpose">
                   <div className="home-heading__wrapper">
                   <h1 className="home-heading__subtitle home-heading__subtitle--pink">Our Purpose</h1>
                   <h1 className="home-heading__title">The maternity GAP is the real GAP</h1>
                   <div className="home-heading__text">Being a working mom is a real challenge, that’s the real gap. So, companies need to innovate the way they seek for female talent.</div>
                   </div>
                   </div>       

                  <div className="home-purpose row justify-content-around">
                   <div className="card" Style="width: 22rem;">
                   <img src={image1} className="card-img-top" alt="..."/>
                   <div className="card-body">
                   <h5 class="card-title">Fit cultural</h5>
                   <p className="card-text">Te ofrecemos oportunidades laborales en empresas que tienen programas de atracción y retención de mujeres profesionales.</p>
                 </div>
                 </div>
                 <div className="card" Style="width: 22rem;">
                   <img src={image2} className="card-img-top" alt="..."/>
                   <div className="card-body">
                   <h5 class="card-title">Work-Life Balance</h5>
                   <p className="card-text">Buscamos que tengas un balance entre tu vida personal y profesional, sin dejar de lado tus sueños.</p>
                 </div>
                 </div>
                 <div className="card" Style="width: 22rem;">
                   <img src={image3} className="card-img-top" alt="..."/>
                   <div className="card-body">
                   <h5 class="card-title">Flexibility</h5>
                   <p className="card-text">Puedes elegir el tipo de trabajo que quieras, según el tiempo que tengas disponible: Part-time, Full-time o Proyectos individuales.</p>
                 </div>
                 </div>
                   
                   <div className="home-purpose__actions">
                   <h6 className="home-purpose__title">¿Lista para unirte a más de 1.000 profesionales?</h6>
                   <Link to="register"> <button type="button" className="btn btn-light m-2" id="registro">¡Regístrate aquí!</button></Link>
                   </div>
                   </div>

                   <div className="home-services">
                   </div>

                   </div> 
        </React.Fragment>
    );
}

export default HomeMobile;