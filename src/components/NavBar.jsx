import logo from '../logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'


function NavBar() {
    return (

<header class="fondoGradienteBanner container-fluid position-fixed indexNav">
    <div class="row">
        <div class="col-md-2 d-flex align-items-center">
            <img src={logo} className="App-logo img-fluid tamImgHeader m-1" alt="logo header" />  
            <a className="nav-link active textBlanco" href="./index.html">MiEcommerce</a>
        </div>
        <div className="col-md-8 d-flex align-items-center justify-content-center">
            <div className="nav justify-content-end">
                  <a className="nav-link active textBlanco" href="./index.html">Ofertas</a>
                  <a className="nav-link active textBlanco" href="./index.html">Más Comprados</a>
                  <a className="nav-link active textBlanco" href="./index.html">En su Mejor Precio</a>
            </div>
        </div>
        <div class="col-md-2 d-flex align-items-center justify-content-end text-secondary">
            <div className="nav justify-content-end">
                    <a className="nav-link active textBlanco" href="./login.html">Login</a>
              </div>
        </div>
    </div>
</header>
      );
  }
  
  export default NavBar;