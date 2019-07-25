import React, { Component } from 'react';
import Nav from './navbar';
import config from '../firebase/config.js';
import { Link } from 'react-router-dom';
import '../css/register.css'



class Register extends Component{
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  signup(e){
    e.preventDefault();
    config.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).then((u)=>{console.log(u)})
    .catch((error) => {
        console.log(error);
      })
  }

  render(){
  return (
    <React.Fragment>
      <Nav></Nav>
      <div  Style="padding:5px; background-color:#ECEBEB">
      <div className="card" Style="padding:15px; margin: 80px 20px; background-color:#ECEBEB; border-color:#ECEBEB">
    <form>
        <h4>Datos de Usuario</h4>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input type="email" value={this.state.email} name="email"  onChange={this.handleChange} class="form-control" id="inputEmail4" placeholder="Correo electrónico"></input>
    </div>
    <div className="form-group col-md-6">
      <label for="inputPassword4">Contraseña</label>
      <input value={this.state.password} name="password"  onChange={this.handleChange} type="password" class="form-control" id="inputPassword4" placeholder="Contraseña"></input>
    </div>
    <div className="col-md-6">
    <label for="inputEmail4">Nombre</label>
      <input type="text" class="form-control" placeholder="Nombre"></input>
    </div>
    <div className="col-md-6">
    <label for="inputEmail4">Apellidos</label>
      <input type="text" class="form-control" placeholder="Apellidos"></input>
    </div>
  </div>
  <div className="build">
  <h4 Style="margin-top:20px;">Datos de la Empresa</h4>
  <div className="form-row">
    <div className="col-md-6">
    <label for="inputEmail4">Nombre o Razón Social</label>
      <input type="text" class="form-control" placeholder="Nombre Empresa"></input>
    </div>
    <div className="col-md-6">
    <label for="inputEmail4">Sector</label>
      <input type="text" class="form-control" placeholder="Sector"></input>
    </div>
  </div>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label for="inputZip">Dirección</label>
      <input type="text" class="form-control" id="inputZip"></input>
    </div>
  </div>
  <div className="form-row">
    <div className="col-md-6">
    <label for="inputEmail4">RUT EMPRESA</label>
      <input type="text" class="form-control" placeholder="RUT Empresa"></input>
    </div>
    <div className="col-md-6">
    <label for="inputEmail4">Web</label>
      <input type="text" class="form-control" placeholder="Sitio Web"></input>
    </div>
  </div>
  <div className="form-group">
    <div className="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"></input>
      <label class="form-check-label" for="gridCheck">
      <p>Al aceptar se aceptan los terminos y condiciones de uso.</p></label>
    </div>
  </div>
  </div>
  <Link to="/dashboard"><button onClick={this.signup} type="submit" class="btn btn-primary" id="init">REGISTRARSE</button></Link>
</form>
</div>
</div>
</React.Fragment>
  );
}
}

export default Register;
