import React, { Component } from 'react';
import './../css/dashboard.css';
import Nav from './navbar';
import avatar from '../img/avatar.png';
import config from '../firebase/config'


class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }


    logout() {
        config.auth().signOut();
    }

    render() {
  return (
      <React.Fragment>
         <Nav className="navbar fixed-top navbar-expand-md navbar-dark bg-primary mb-3">
        <div className="flex-row d-flex">
            <button type="button" className="navbar-toggler mr-2 " data-toggle="offcanvas" title="Toggle responsive left sidebar">
                <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand" href="/#" title="Free Bootstrap 4 Admin Template">hola</a>
        </div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse collapse" id="collapsingNavbar">
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link" href="/#">Home <span className="sr-only">Home</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="//www.codeply.com">Link</a>
                </li>
            </ul>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <a className="nav-link" href="#myAlert" data-toggle="collapse">Alert</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/#" data-target="#myModal" data-toggle="modal">About</a>
                </li>
            </ul>
        </div>
    </Nav>
    <div className="container-fluid" id="main">
        <div className="row row-offcanvas row-offcanvas-left">
            <div className="col-md-3 col-lg-2 sidebar-offcanvas bg-light pl-0" id="sidebar" role="navigation">
                <ul className="nav flex-column sticky-top pl-0 pt-5 mt-3">
                    <li className="nav-item"><a class="nav-link" href="/#">Overview</a></li>
                    <li className="nav-item">
                        <a className="nav-link" href="#submenu1" data-toggle="collapse" data-target="#submenu1">Reports▾</a>
                        <ul className="list-unstyled flex-column pl-3 collapse" id="submenu1" aria-expanded="false">
                        <li class="nav-item"><a class="nav-link" href="/#">Report 1</a></li>
                        <li class="nav-item"><a class="nav-link" href="/#">Report 2</a></li>
                        </ul>
                    </li>
                    <button onClick={this.logout}>Cerrar sesión</button>
                   
                </ul>
            </div>
        

            <div class="col main pt-5 mt-3">
                <h1 class="display-4 d-none d-sm-block">
                Bootstrap 4 Dashboard
                </h1>
                <p class="lead d-none d-sm-block">Plus off-canvas sidebar, based on Bootstrap v4</p>

                <div class="alert alert-warning fade collapse" role="alert" id="myAlert">
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">×</span>
                        <span class="sr-only">Close</span>
                    </button>
                    <strong>Holy guacamole!</strong> It's free.. this is an example theme.
                </div>
                <div class="row mb-3">
                    <div class="col-xl-3 col-sm-6 py-2">
                        <div class="card bg-success text-white h-100">
                            <div class="card-body bg-success">
                                <div class="rotate">
                                    <i class="fa fa-user fa-4x"></i>
                                </div>
                                <h6 class="text-uppercase">Users</h6>
                                <h1 class="display-4">134</h1>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-sm-6 py-2">
                        <div class="card text-white bg-danger h-100">
                            <div class="card-body bg-danger">
                                <div class="rotate">
                                    <i class="fa fa-list fa-4x"></i>
                                </div>
                                <h6 class="text-uppercase">Posts</h6>
                                <h1 class="display-4">87</h1>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-sm-6 py-2">
                        <div class="card text-white bg-info h-100">
                            <div class="card-body bg-info">
                                <div class="rotate">
                                    <i class="fa fa-twitter fa-4x"></i>
                                </div>
                                <h6 class="text-uppercase">Tweets</h6>
                                <h1 class="display-4">125</h1>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-sm-6 py-2">
                        <div class="card text-white bg-warning h-100">
                            <div class="card-body">
                                <div class="rotate">
                                    <i class="fa fa-share fa-4x"></i>
                                </div>
                                <h6 class="text-uppercase">Shares</h6>
                                <h1 class="display-4">36</h1>
                            </div>
                        </div>
                    </div>
                </div>
            

                <hr></hr>
                <div class="row placeholders mb-3">
                    <div class="col-6 col-sm-3 placeholder text-center">
                        <img src={avatar} class="mx-auto img-fluid rounded-circle" alt="Generic placeholder thumbnail"></img>
                        <h4>Responsive</h4>
                        <span class="text-muted">Device agnostic</span>
                    </div>
                    <div class="col-6 col-sm-3 placeholder text-center">
                        <img src="//placehold.it/200/e4e4e4/fff?text=2" class="mx-auto img-fluid rounded-circle" alt="Generic placeholder thumbnail"></img>
                        <h4>Frontend</h4>
                        <span class="text-muted">UI / UX oriented</span>
                    </div>
                    <div class="col-6 col-sm-3 placeholder text-center">
                        <img src="//placehold.it/200/d6d6d6/fff?text=3" class="mx-auto img-fluid rounded-circle" alt="Generic placeholder thumbnail"></img>
                        <h4>HTML5</h4>
                        <span class="text-muted">Standards-based</span>
                    </div>
                    <div class="col-6 col-sm-3 placeholder text-center">
                        <img src="//placehold.it/200/e0e0e0/fff?text=4" class="center-block img-fluid rounded-circle" alt="Generic placeholder thumbnail"></img>
                        <h4>Framework</h4>
                        <span class="text-muted">CSS and JavaScript</span>
                    </div>
                </div>

                
                <hr></hr>
                
                <div class="row my-4">
                    <div class="col-lg-3 col-md-4">
                        <div class="card">
                            <img class="card-img-top img-fluid" src="//placehold.it/740x180/bbb/fff?text=..." alt="Card cap"></img>
                            <div class="card-body">
                                <h4 class="card-title">Layouts</h4>
                                <p class="card-text">Flexbox provides simpler, more flexible layout options like vertical centering.</p>
                                <a href="/#" class="btn btn-primary">Button</a>
                            </div>
                        </div>
                        <div class="card card-inverse bg-inverse mt-3">
                            <div class="card-body">
                                <h3 class="card-title">Flexbox</h3>
                                <p class="card-text">Flexbox is now the default, and Bootstrap 4 supports SASS out of the box.</p>
                                <a href="/#" class="btn btn-outline-secondary">Outline</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-9 col-md-8">
                        <div class="table-responsive">
                            <table class="table table-striped">
                                <thead class="thead-inverse">
                                    <tr>
                                        <th>#</th>
                                        <th>Label</th>
                                        <th>Header</th>
                                        <th>Column</th>
                                        <th>Data</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1,001</td>
                                        <td>responsive</td>
                                        <td>bootstrap</td>
                                        <td>cards</td>
                                        <td>grid</td>
                                    </tr>
                                    <tr>
                                        <td>1,002</td>
                                        <td>rwd</td>
                                        <td>web designers</td>
                                        <td>theme</td>
                                        <td>responsive</td>
                                    </tr>
                                    <tr>
                                        <td>1,003</td>
                                        <td>free</td>
                                        <td>open-source</td>
                                        <td>download</td>
                                        <td>template</td>
                                    </tr>
                                    <tr>
                                        <td>1,003</td>
                                        <td>frontend</td>
                                        <td>developer</td>
                                        <td>coding</td>
                                        <td>card panel</td>
                                    </tr>
                                    <tr>
                                        <td>1,004</td>
                                        <td>migration</td>
                                        <td>bootstrap 4</td>
                                        <td>mobile-first</td>
                                        <td>design</td>
                                    </tr>
                                    <tr>
                                        <td>1,005</td>
                                        <td>navbar</td>
                                        <td>sticky</td>
                                        <td>jumbtron</td>
                                        <td>header</td>
                                    </tr>
                                    <tr>
                                        <td>1,006</td>
                                        <td>collapse</td>
                                        <td>affix</td>
                                        <td>submenu</td>
                                        <td>flexbox</td>
                                    </tr>
                                    <tr>
                                        <td>1,007</td>
                                        <td>layout</td>
                                        <td>examples</td>
                                        <td>themes</td>
                                        <td>grid</td>
                                    </tr>
                                    <tr>
                                        <td>1,008</td>
                                        <td>migration</td>
                                        <td>bootstrap 4</td>
                                        <td>flexbox</td>
                                        <td>design</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
              

                

            </div>
            
        </div>

    </div>
  
    <footer class="container-fluid" Style="background-color: #355E7E ">
        <p class="text-right small">©2016-2018 Company</p>
    </footer>

   
    <div class="modal fade" id="myModal" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title" id="myModalLabel">Modal</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                        <span class="sr-only">Close</span>
                    </button>
                </div>
                <div class="modal-body">
                    <p>This is a dashboard layout for Bootstrap 4. This is an example of the Modal component which you can use to show content.
                    Any content can be placed inside the modal and it can use the Bootstrap grid classes.</p>
                    <p>
                        <a href="https://www.codeply.com/go/KrUO8QpyXP" target="_ext">Grab the code at Codeply</a>
                    </p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary-outline" data-dismiss="modal">OK</button>
                </div>
            </div>
        </div>
    </div>


    </React.Fragment>
  );
}
}

export default Dashboard
