import React, { Component } from 'react';
import chile from '../data/chile.json';



class Register extends Component{
 

regiones = () =>{
  chile.regiones.forEach(element => {
    console.log(element.region)
  });
}
  render(){
  return (
    <React.Fragment>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link active">Home <span class="sr-only">(current)</span></a>
      <a class="nav-item nav-link">Features</a>
      <a class="nav-item nav-link">Pricing</a>
      <a class="nav-item nav-link disabled" tabindex="-1" aria-disabled="true">Disabled</a>
    </div>
  </div>
</nav>
      <div  Style="padding:9%; background-color:#355E7E">
      <div className="card" Style="padding: 20px">
    <form>
        <h3>Datos de Usuario</h3>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input type="email" class="form-control" id="inputEmail4" placeholder="Correo electrónico"></input>
    </div>
    <div className="form-group col-md-6">
      <label for="inputPassword4">Contraseña</label>
      <input type="password" class="form-control" id="inputPassword4" placeholder="Contraseña"></input>
    </div>
    <div className="col">
    <label for="inputEmail4">Nombre</label>
      <input type="text" class="form-control" placeholder="Nombre"></input>
    </div>
    <div className="col">
    <label for="inputEmail4">Apellidos</label>
      <input type="text" class="form-control" placeholder="Apellidos"></input>
    </div>
  </div>
  <h3 Style="margin-top:20px;">Datos de la Empresa</h3>
  <div className="form-row">
    <div className="col-4">
    <label for="inputEmail4">Nombre</label>
      <input type="text" class="form-control" placeholder="Nombre Empresa"></input>
    </div>
    <div className="col-4">
    <label for="inputEmail4">Razón Social</label>
      <input type="text" class="form-control" placeholder="Razón Social"></input>
    </div>
    <div className="col-4">
    <label for="inputEmail4">Sector</label>
      <input type="text" class="form-control" placeholder="Sector"></input>
    </div>
  </div>
  <div className="form-row">
    <div class="form-group col-md-3">
    <label for="inputState">Región</label>
      <select id="inputState" class="form-control ">
      <option selected>Escoger...</option>
        {chile.regiones.map((element,i) => (
            <option key={i}>{element.region}</option>
            )
          )}
      </select>
    </div>
    <div className="form-group col-md-3">
      <label for="inputState">Comuna</label>
      <select  class="form-control">
        <option selected>Choose...</option>
        <option>...</option>
      </select>
    </div>
    <div className="form-group col-md-6">
      <label for="inputZip">Dirección</label>
      <input type="text" class="form-control" id="inputZip"></input>
    </div>
  </div>
  <div className="form-row">
    <div className="col-4">
    <label for="inputEmail4">RUT EMPRESA</label>
      <input type="text" class="form-control" placeholder="RUT Empresa"></input>
    </div>
    <div className="col-4">
    <label for="inputEmail4">D Verificador</label>
      <input type="text" class="form-control" placeholder="D Verificador"></input>
    </div>
    <div className="col-4">
    <label for="inputEmail4">Web</label>
      <input type="text" class="form-control" placeholder="Sitio Web"></input>
    </div>
  </div>
  <div className="form-group">
    <div className="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"></input>
      <label class="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <button type="submit" class="btn btn-primary">Sign in</button>
</form>
</div>
</div>
</React.Fragment>
  );
}
}

export default Register;
