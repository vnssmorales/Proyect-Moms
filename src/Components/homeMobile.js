import React from 'react';
import '../homeMobile.css';
import {Link} from 'react-router-dom';
import image1 from '../img/home-purpose_1.jpg';
import image2 from '../img/home-purpose_2.jpg';
import image3 from '../img/home-purpose_3.jpg';
import image4 from '../img/case-study1.jpg';
import image5 from '../img/case-study2.jpg';
import Nav from './navbar';
import image6 from '../img/EY.jpg';
import image7 from '../img/pepsico.jpg';
import image8 from '../img/p&g.jpg';
import image9 from '../img/achs.jpg';
import image10 from '../img/marsol.jpg';
import image11 from '../img/bci.jpg';
import logo from '../img/logo.svg';

function HomeMobile() {
    return (

        <React.Fragment>
                      
                  <Nav></Nav>

                    <div className="main-container">

                    <div className="home-intro">
                    <div className="home-intro__wrapper">
                    <div className="home-intro__block">
                    <h1 className="home-intro__subtitle">Cientos de mujeres y empresas confían en nosotros</h1>
                    <h1 className="home-intro__title home-intro__title--playfair">Te ayudamos a cubrir puestos de trabajo según tus necesidades.</h1>
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
                   <h1 className="home-heading__subtitle home-heading__subtitle--pink">Nuestro enfoque</h1>
                   <h1 className="home-heading__title">Ten el talento que buscas según tu medida</h1>
                   <div className="home-heading__text"></div>
                   </div>
                   </div>       

                  <div className="home-purpose row justify-content-around">
                   <div className="card" id="purpose">
                   <img src={image1} className="card-img-top" alt="..."/>
                   <div className="card-body">
                   <h5 className="card-title">El mejor Fit</h5>
                   <p className="card-text">Encuentra la candidata que más se ajuste a tus requerimientos específicos</p>
                 </div>
                 </div>
                 
                 <div className="card" id="purpose3">
                   <img src={image3} className="card-img-top" alt="..."/>
                   <div className="card-body">
                   <h5 className="card-title">Gestionamos</h5>
                   <p className="card-text">Te ayudamos a gestionar la cantidad de posibles postulantes según el tipo de trabajo: Part-time, Full-time o Proyectos individuales.</p>
                 </div>
                 </div>
                   
                   <div className="home-purpose__actions">
                   <h6 className="home-purpose__title">¿Lista para unirte a más de 1.000 profesionales?</h6>
                   <Link to="register"> <button type="button" className="btn btn-light m-2" id="registro">¡Regístrate aquí!</button></Link>
                   </div>
                   </div>

                   <div className="home-services">
                   <div className="home-heading">
                   <div className="home-heading__wrapper">
                   <h1 className="home-heading__title home-heading__title--white">Cómo ayudamos a tu empresa<br/></h1>
                   <div className="home-heading__text home-heading__text--white">Mejoramos tu representación de género y te guiamos con mejores prácticas de mercado.<br/>
                   </div>
                   </div>
                   </div>

                   <div className="home-services row justify-content-around">
                   <div className="service-block col col-lg-3">
                   <div className="service-block__wrapper">
                   <div className="service-block__heading">
                   <h1 className="service-block__title service-block__title--pink">Trabajos por proyecto</h1>
                   </div>
                   <div className="service-block__info">
                   <h3 className="service-block__subtitle">Contrata a una mamá experta por tiempo acotado y con un objetivo claro</h3>
                   <div className="service-block__text">Podemos entregarte a las mujeres más talentosas del mercado para desarrollar los proyectos que necesitas. Conoce a este grupo de mamás expertas y flexibles que adecuarán sus horarios para cubrir las necesidades de tu negocio.
                   </div>
                   </div>
                   </div>
                   </div>

                   <div className="service-block col col-lg-3">
                   <div className="service-block__wrapper">
                   <div className="service-block__heading">
                   <h1 className="service-block__title service-block__title--pink">Trabajos <br/>Part-time</h1>
                   </div>
                   <div className="service-block__info">
                   <h3 className="service-block__subtitle">Contrata mamás por menos horas a la semana</h3>
                   <div className="service-block__text">Mamás expertas pueden trabajar por menos horas a la semana y tener los resultados que tu negocio necesita. Este grupo quiere un trabajo con disponibilidad en oficina de 20 a 30 horas por semana.
                   </div>
                   </div>
                   </div>
                   </div>

                   <div className="service-block col-lg-3">
                   <div className="service-block__wrapper">
                   <div className="service-block__heading">
                   <h1 className="service-block__title service-block__title--pink">Full-time con Flexibilidad</h1>
                   </div>
                   <div className="service-block__info">
                   <h3 className="service-block__subtitle">Contrata profesionales por tiempo completo, pero con algún tipo de flexibilidad<br/></h3>
                   <div className="service-block__text">Tenemos Muchas mamás que quieren trabajar tiempo completo, pero no 100% desde una oficina o en horarios tradicionales. Puedes contratar mamás que quieren entre un 10% y 50% de flexibilidad para trabajar remoto (Teletrabajo) o buscan horarios diferentes o flexibles.
                   </div>
                   </div>
                   </div>
                   </div>
                   <div className="home-services__actions">
                   <div className="home-services__wrapper">
                   <h6 className="home-services__title">¿Listo para trabajar?</h6>
                   <Link to="/register"> <button type="button" className="btn btn-light m-2" id="ingresarEmp">Registra tu empresa</button></Link>
                   </div>
                   </div>
                   </div>
                   </div>


                   <div className="case-studies">
                   <div className="home-heading">
                   <div className="home-heading__wrapper">
                   <h1 className="home-heading__subtitle home-heading__subtitle--pink">Case Studies</h1>
                   <h1 className="home-heading__title">The stories behind the project</h1>
                   </div>
                   </div>

                   <div className="case-studies row justify-content-around" id="row-case-studies">

                   <div className="card" id="case-study">
                   <img src={image4} className="card-img-top" alt="..."/>
                   </div>

                   <div className="card" id="case-study-text"> 
                   <div className="card-body">
                   <h1 className="case-study__subtitle">PEPsico</h1>
                   <h1 className="case-study__title">How Cristina got to work as GM &amp; Operation MG</h1>
                   <div className="case-study__excerpt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut sodales turpis. Donec aliquet convallis velit, a volutpat mi mattis ut. Donec non massa tincidunt risus tempus accumsan vel at augue.</div>
                  <a href="#" className="link">Read more</a>
                   </div>
                   </div>

                   <div className="card" id="case-study1">
                   <img src={image5} alt="..."/>
                   </div>

                   <div className="card" id="case-study-text1"> 
                   <div className="card-body">
                   <h1 className="case-study__subtitle">P&amp;G</h1>
                   <h1 className="case-study__title">How Teresa started as <strong>Communications &amp; PR Manager </strong></h1>
                   <div className="case-study__excerpt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut sodales turpis. Donec aliquet convallis velit, a volutpat mi mattis ut. Donec non massa tincidunt risus tempus accumsan vel at augue.</div>
                   <a href="#" className="link">Read more</a>
                   </div>
                   </div>

                   </div>
                   
                   <div className="home-services__actions">
                   <div className="home-services__wrapper"><a href="#" class="case-studies__button w-button">See more Case Studies</a>
                   </div>
                   </div>
                   </div>

                   <div className="web-clients">
                   <div className="grid-x">
                   <div className="grid-cell">
                   <h1 className="web-clients__title">Nuestros clientes</h1>
                   </div>
                   </div>

                   <div className="grid-x ">
                   <div className="grid-column col col-2">
                   <img src={image6} alt="ey"/>
                   </div>
                   <div className="grid-column col col-2">
                   <img src={image7} alt="pepsico"/>
                   </div>
                   <div className="grid-column col col-2">
                   <img src={image8} alt="pg"/>
                   </div>
                   <div className="grid-column col col-2">
                   <img src={image9} alt="achs"/>
                   </div>
                   <div className="grid-column col col-2">
                   <img src={image10} alt="marsol"/>
                   </div>
                   <div className="grid-column col col-2">
                   <img src={image11} alt="bci"/>
                   </div>

                   </div>
                   </div> 

                   <div className="footer">
                   <div className="footer-newsletter">
                   <div className="grid-x justify-content-around">
                   <div className="grid-column col col-lg-3" id="footer-news">
                   <h6 className="footer-newsletter__title">Suscríbete a nuestro Newsletter</h6>
                   <div className="footer-newsletter__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut sodales turpis.
                   </div>
                   </div>

                   <div className="grid-column col col-lg-9">
                   <div className="footer-form form">
                   <form id="email-form" name="email-form" data-name="Email Form">
                   <div className="footer-form__wrapper">
                   <div className="footer-form__field">
                   <input type="email" className="footer-form__input w-input" maxLength="200" name="name-2" data-name="Name 2" placeholder="Tu correo" id="name-2"/>
                   </div>
                   <div className="footer-form__field">
                   <input type="text" className="footer-form__input w-input" maxLength="200" name="email-3" data-name="Email 3" placeholder="Tu nombre" id="email-3" required=""/>
                   </div>
                   <div className="footer-form__field">
                   <input type="text" className="footer-form__input w-input" maxLength="200" name="email-2" data-name="Email 2" placeholder="Tu apellido" id="email-2" required=""/>
                   </div>
                   <div className="footer-form__field">
                   <input type="submit" value="Suscríbete" data-wait="Please wait..." className="footer-form__submit w-button"/>
                   </div>
                   </div>
                   </form>
                   <div className="w-form-done">
                   <div>Thank you! Your submission has been received!
                   </div>
                   </div>
                   <div className="w-form-fail">
                   <div>Oops! Something went wrong while submitting the form.
                   </div>
                   </div>
                   </div>
                   </div>
                   </div>
                   </div>

                   <div className="grid-x justify-content-around">
                   <div className="grid-column col col-3">
                   <img src={logo} id="logo-footer" alt="..."/>
                   <div className="footer-description">This is a digital platform and community that connect female talent with the very best companies that have this flexible offers for them. We are a trusted careers resource for women and a trusted talent resource for companies.
                   </div>
                   </div>

                   <div className="grid-column col col-9">
                   <div className="footer-menu row">
                   <div className="footer-menu__block col col-3">
                   <h6 className="footer__title">Empresas</h6>
                   <ul className="footer-menu__list">
                   <li className="footer-menu__item"><a href="#" className="footer-menu__link">Cómo funciona</a></li>
                   <li className="footer-menu__item"><a href="#" className="footer-menu__link">Servicios</a></li>
                   <li className="footer-menu__item"><a href="#" className="footer-menu__link">Regístrate</a></li>
                   <li className="footer-menu__item"><a href="#" className="footer-menu__link">FAQ</a></li>
                   </ul>
                   </div>
                   <div className="footer-menu__block col col-3">
                   <h6 className="footer__title">Profesionales</h6>
                   <ul className="footer-menu__list">
                   <li className="footer-menu__item"><a href="#" className="footer-menu__link">Cómo funciona</a></li>
                   <li className="footer-menu__item"><a href="#" className="footer-menu__link">Historias de Éxito</a></li>
                   <li className="footer-menu__item"><a href="#" className="footer-menu__link">Regístrate</a></li>
                   <li className="footer-menu__item"><a href="#" className="footer-menu__link">FAQ</a></li>
                   </ul>
                   </div>
                   <div className="footer-menu__block col col-3">
                   <h6 className="footer__title">Sobre el Proyecto</h6>
                   <ul className="footer-menu__list">
                   <li className="footer-menu__item"><a href="#" className="footer-menu__link">Sobre Nosotros</a></li>
                   <li className="footer-menu__item"><a href="#" className="footer-menu__link">ProyectoMoms Academy</a></li>
                   <li className="footer-menu__item"><a href="#" className="footer-menu__link">Blog</a></li>
                   <li className="footer-menu__item"><a href="#" className="footer-menu__link">Contáctanos</a></li>
                   </ul>
                   </div>
                   <div className="col col-3">
                   <h6 className="footer__title">Síguenos</h6>
                   <ul className="footer-social">
                   <li className="footer-social__item"><a href="#" className="footer-social__link w-inline-block">
                   <img src="https://assets.website-files.com/5d0e42dd41baf263120aa3ab/5d0e5566d79ccabf719603e2_fab-facebook-square%20(white).svg" alt="" className="footer-social__icon"/> 
                   <div className="footer-social__text">/ProyectoMoms</div></a></li>
                   <li class="footer-social__item"><a href="#" class="footer-social__link w-inline-block"><img src="https://assets.website-files.com/5d0e42dd41baf263120aa3ab/5d0e5566d79cca694a9603e1_fab-instagram%20(white).svg" alt="" class="footer-social__icon"/><div class="footer-social__text">@ProyectoMoms</div></a></li>
                   <li class="footer-social__item"><a href="#" class="footer-social__link w-inline-block"><img src="https://assets.website-files.com/5d0e42dd41baf263120aa3ab/5d0e5565d79cca54069603dd_fab-twitter%20(white).svg" alt="" class="footer-social__icon"/><div class="footer-social__text">@ProyectoMoms</div></a></li>
                   <li class="footer-social__item"><a href="#" class="footer-social__link w-inline-block"><img src="https://assets.website-files.com/5d0e42dd41baf263120aa3ab/5d0e5566462b9967dfc40635_fab-youtube%20(white).svg" alt="" class="footer-social__icon"/><div class="footer-social__text">/ProyectoMoms</div></a></li>
                   </ul>
                   </div>
                   </div>
                   </div>
                   </div>

                   <div class="footer-copyright">
                   <div class="grid-x justify-content-around">
                   <div class="grid-column col col-6">
                   <div class="footer-copyright__text">© Copyright ProyectoMoms 2019. Todos los Derechos Reservados.
                   </div>
                   </div>
                   <div class="grid-column col col-6">
                   <div class="footer-copyright__text footer-copyright__text--right">Sitio Web diseñado por <strong>Sebastián Rocha</strong>.
                   </div>
                   </div>
                   </div>
                   </div>

                   </div>



                   </div> 
        </React.Fragment>
    );
}

export default HomeMobile;