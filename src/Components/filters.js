import React, { Component } from 'react';


class Filters extends Component {
    
    render() {
  return (
      <React.Fragment>
         
          <h1>Publicar empleo</h1>
          <h3>Información del cargo</h3>
          <div class="form-group">
          <label for="inputAddress">Título empleo</label>
          <input
            type="text"
            class="form-control"
            id="inputAddress"
            placeholder="Ejemplo: Front-End developer avanzada"/>
            <label for="inputState">Categoría de empleo</label>
          <select id="inputState" class="form-control">
            <option selected>Escoger</option>
            <option>...</option>
          </select>
            <label for="exampleFormControlTextarea1">
              Descripción del cargo
            </label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Ejemplo: Tareas, beneficios etc.  "
            />
          </div>

          
          

          <div class="form-row">
            <div class="form-group col-md-6">
            <label for="inputState">Jornada Laboral</label>
              <select id="inputState" class="form-control">
                <option selected>Escoger</option>
                <option>Proyecto</option>
                <option>Part-time</option>
                <option>Freelance</option>
                <option>Full-time con flexibilidad</option>
              </select>
            </div>
            <div class="form-group col-md-6">
            <label for="inputState">Educación</label>
              <select id="inputState" class="form-control">
                <option selected>Escoger</option>
                <option>...</option>
              </select>
            </div>
            
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
            <label for="inputState">Rango renta</label>
              <input
              type="text"
              class="form-control"
              id="inputAddress"
              placeholder="Mínimo"/>
            </div>
            <div class="form-group col-md-6">
            
              <input
              type="text"
              class="form-control"
              id="inputAddress"
              placeholder="Máximo"
              style={{marginTop: "40px"}}/>
              
            </div>
            
          </div>
         
      
    </React.Fragment>
  );
}
}

export default Filters