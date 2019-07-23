import React, { Component } from 'react'

class Login extends Component {
    render() {
  return (
      <React.Fragment>
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
      <a class="nav-item nav-link" href="#">Features</a>
      <a class="nav-item nav-link" href="#">Pricing</a>
      <a class="nav-item nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
    </div>
  </div>
</nav>
            <section Style="padding:9%; background-color:#355E7E">
                <div className="card" >
                    <article className="card-body">
                        <h4 className="card-title text-center mb-4 mt-1">Sign in</h4>
                        <hr></hr>
                        <p className="text-success text-center">Some message goes here</p>
                        <form>
                            <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"> <i className="fa fa-user"></i> </span>
                                    </div>
                                    <input name="" className="form-control" placeholder="Email or login" type="email"></input>
                                </div> 
                            </div> 
                            <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
                                    </div>
                                    <input className="form-control" placeholder="******" type="password"></input>
                                </div> 
                            </div> 
                            <div className="form-group">
                            <button type="submit" className="btn btn-primary btn-block"> Login  </button>
                            </div> 
                            <p className="text-center"> Forgot password?</p>
                        </form>
                    </article>
                </div>
                </section>
    </React.Fragment>
  );
}
}

export default Login
