import React, { Component } from "react";
import "../css/publish.css";
class Publish extends Component {
  sendMail() {
    let to = "jferrada@vchile.cl";
    let subject = "probando el envio";
    let message =
      "hola josefin estoy enviando un correo de prueba, integre un back y el front";
    let url = "http://advisergroup.cl/email_sender.php";
    url += "?to=" + to + "&subject=" + subject + "&message=" + message;
    fetch(url);
  }
  
  render() {
    return (
      <React.Fragment>
        <form id="publish">
          <h1>Publicar empleo</h1>
          <h3>Información del cargo</h3>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">
              Descripción del cargo
            </label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            />
          </div>

          <label for="inputAddress">Título empleo</label>
          <input
            type="text"
            class="form-control"
            id="inputAddress"
            placeholder="Front-End developer avanzada"
          />
          <label for="inputState">Categoría de empleo</label>
          <select id="inputState" class="form-control">
            <option selected>Choose..</option>
            <option>...</option>
          </select>

          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputCity">City</label>
              <input type="text" class="form-control" id="inputCity" />
            </div>
            <div class="form-group col-md-4">
              <label for="inputState">State</label>
              <select id="inputState" class="form-control">
                <option selected>Choose...</option>
                <option>...</option>
              </select>
            </div>
            <div class="form-group col-md-2">
              <label for="inputZip">Zip</label>
              <input type="text" class="form-control" id="inputZip" />
            </div>
          </div>
          <div class="form-group">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="gridCheck" />
              <label class="form-check-label" for="gridCheck">
                Check me out
              </label>
            </div>
          </div>
          <button type="button" class="btn btn-primary" onClick={this.sendMail}>
            Sign in
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default Publish;
