import React, { Component } from 'react';
import '../css/publish.css'


class Publish extends Component {
    
    render() {
    return (
    <React.Fragment>
        <form>
            <h1>Publicar empleo</h1>
            <h3>Información del cargo</h3>
            <div class="form-group">
                <label for="exampleFormControlTextarea1">Descripción del cargo</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            
                <label for="inputAddress">Título empleo</label>
                <input type="text" class="form-control" id="inputAddress" placeholder="Front-End developer avanzada"></input>
                <label for="inputState">Categoría de empleo</label>
                <select id="inputState" class="form-control">
                    <option selected>Choose..</option>
                    <option>...</option>
                </select>
            
            <div class="form-row">
                <div class="form-group col-md-6">
                <label for="inputCity">City</label>
                <input type="text" class="form-control" id="inputCity"></input>
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
                <input type="text" class="form-control" id="inputZip"></input>
                </div>
            </div>
            <div class="form-group">
                <div class="form-check">
                <input class="form-check-input" type="checkbox" id="gridCheck"></input>
                <label class="form-check-label" for="gridCheck">
                    Check me out
                </label>
                </div>
            </div>
            <button type="submit" class="btn btn-primary">Sign in</button>
            </form>
    </React.Fragment>);
}
}

export default Publish