import React from 'react';
import '../homeMobile.css';
import {Link} from 'react-router-dom';
import Nav from './navbar';

function HomeMobile() {
    return (

        <React.Fragment>
                      
                  <Nav></Nav>

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