import React from 'react';
import chile from '../data/chile.json';

console.log(chile);
function Register() {
  return (
      <div className="contenedor" Style="padding:20px;">
    <form>
        <h3>Datos de Usuario</h3>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input type="email" class="form-control" id="inputEmail4" placeholder="Email"></input>
    </div>
    <div className="form-group col-md-6">
      <label for="inputPassword4">Contraseña</label>
      <input type="password" class="form-control" id="inputPassword4" placeholder="Password"></input>
    </div>
    <div className="col">
    <label for="inputEmail4">Nombre</label>
      <input type="text" class="form-control" placeholder="First name"></input>
    </div>
    <div className="col">
    <label for="inputEmail4">Apellidos</label>
      <input type="text" class="form-control" placeholder="Last name"></input>
    </div>
  </div>
  <h3 Style="margin-top:20px;">Datos de la Empresa</h3>
  <div className="form-row">
    <div className="col-4">
    <label for="inputEmail4">Nombre</label>
      <input type="text" class="form-control" placeholder="City"></input>
    </div>
    <div className="col-4">
    <label for="inputEmail4">Razón Social</label>
      <input type="text" class="form-control" placeholder="State"></input>
    </div>
    <div className="col-4">
    <label for="inputEmail4">Sector</label>
      <input type="text" class="form-control" placeholder="Zip"></input>
    </div>
  </div>
  <div className="form-row">
    <div class="form-group col-md-3">
    <label for="inputState">Región</label>
      <select id="inputState" class="form-control ">
        
        <option>...</option>
      </select>
    </div>
    <div className="form-group col-md-3">
      <label for="inputState">Comuna</label>
      <select id="inputState" class="form-control">
        <option selected>Choose...</option>
        <option>...</option>
      </select>
    </div>
    <div className="form-group col-md-6">
      <label for="inputZip">Dirección</label>
      <input type="text" class="form-control" id="inputZip"></input>
    </div>
  </div>
  <div className="form-group">
    <label for="inputAddress">Dirección</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"></input>
  </div>
  <div className="form-group">
    <label for="inputAddress2">Address 2</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"></input>
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
  );
}

export default Register;
