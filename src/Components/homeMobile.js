import React from 'react';
import '../homeMobile.css';
import {Link} from 'react-router-dom';
import image1 from '../img/home-purpose_1.jpg';
import image2 from '../img/home-purpose_2.jpg';
import image3 from '../img/home-purpose_3.jpg';
import image4 from '../img/case-study1.jpg';
import image5 from '../img/case-study2.jpg';
import Nav from './navbar';

function HomeMobile() {
    return (

        <React.Fragment>
                      
                  <Nav></Nav>

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
                   <div className="card" id="purpose">
                   <img src={image1} className="card-img-top" alt="..."/>
                   <div className="card-body">
                   <h5 className="card-title">Fit cultural</h5>
                   <p className="card-text">Te ofrecemos oportunidades laborales en empresas que tienen programas de atracción y retención de mujeres profesionales.</p>
                 </div>
                 </div>
                 <div className="card" id="purpose2">
                   <img src={image2} className="card-img-top" alt="..."/>
                   <div className="card-body">
                   <h5 className="card-title">Work-Life Balance</h5>
                   <p className="card-text">Buscamos que tengas un balance entre tu vida personal y profesional, sin dejar de lado tus sueños.</p>
                 </div>
                 </div>
                 <div className="card" id="purpose3">
                   <img src={image3} className="card-img-top" alt="..."/>
                   <div className="card-body">
                   <h5 className="card-title">Flexibility</h5>
                   <p className="card-text">Puedes elegir el tipo de trabajo que quieras, según el tiempo que tengas disponible: Part-time, Full-time o Proyectos individuales.</p>
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
                   <h3 class="service-block__subtitle">Contrata a una mamá experta por tiempo acotado y con un objetivo claro</h3>
                   <div class="service-block__text">Podemos entregarte a las mujeres más talentosas del mercado para desarrollar los proyectos que necesitas. Conoce a este grupo de mamás expertas y flexibles que adecuarán sus horarios para cubrir las necesidades de tu negocio.
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
                   <h3 class="service-block__subtitle">Contrata mamás por menos horas a la semana</h3>
                   <div class="service-block__text">Mamás expertas pueden trabajar por menos horas a la semana y tener los resultados que tu negocio necesita. Este grupo quiere un trabajo con disponibilidad en oficina de 20 a 30 horas por semana.
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

                   <div className="case-studies row justify-content-around">
                   
                   <div className="case-study col col-lg-6">
                   <div className="case-study__wrapper row justify-content-around">
                   <div className="case-study__block col col-lg-5">
                   <img src={image4} alt="logo"/>
                   </div>
                   <div className="case-study__block col col-lg-5">
                   <div className="case-study__content">
                   <h1 className="case-study__subtitle">PEPsico</h1>
                   <h1 className="case-study__title">How Cristina got to work as GM &amp; Operation MG</h1>
                   <div className="case-study__excerpt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut sodales turpis. Donec aliquet convallis velit, a volutpat mi mattis ut. Donec non massa tincidunt risus tempus accumsan vel at augue.
                   </div>
                   <a href="#" className="link">Read more</a>
                   </div>
                   </div>
                   </div>
                   </div>
                   

                   <div className="case-study col col-lg-6">
                   <div className="case-study__wrapper row justify-content-around">
                   <div className="case-study__block col col-lg-5">
                   <img src={image5} alt="logo"/>
                   </div>
                   <div className="case-study__block col col-lg-5">
                   <div className="case-study__content">
                   <h1 className="case-study__subtitle">P&amp;G</h1>
                   <h1 className="case-study__title">How Teresa started as <strong>Communications &amp; PR Manager </strong></h1>
                   <div className="case-study__excerpt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut sodales turpis. Donec aliquet convallis velit, a volutpat mi mattis ut. Donec non massa tincidunt risus tempus accumsan vel at augue.
                   </div>
                   <a href="#" className="link">Read more</a>
                   </div>
                   </div>
                   </div>
                   </div>
                   </div>

                   <div className="case-studies row justify-content-around">
                  
                   <div className="card" id="case-study">
                   <img src={image4} className="card-img-top" alt="..."/>
                   <div className="card-body">
                   <h1 className="case-study__subtitle">P&amp;G</h1>
                   <h5 className="card-title">Work-Life Balance</h5>
                   <p className="card-text">Buscamos que tengas un balance entre tu vida personal y profesional, sin dejar de lado tus sueños.</p>
                 </div>
                 </div>
                   </div>

                   <div className="card" id="case-study1">
                   <img src={image5} className="card-img-top" alt="..."/>
                   <div className="card-body">
                   <h5 className="card-title">Work-Life Balance</h5>
                   <p className="card-text">Buscamos que tengas un balance entre tu vida personal y profesional, sin dejar de lado tus sueños.</p>
                 </div>
                 </div>
                   
                   </div>



                   </div> 
        </React.Fragment>
    );
}

export default HomeMobile;