import logo from '../logo.svg';
import CartWidget from "./CartWidget";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import ItemListContainer from './ItemListContainer';


function NavBar() {
    return (
        <>
        <header className="fondoGradienteBanner container-fluid indexNav">
            <div className="row">
                <div className="col-md-2 d-flex align-items-center">
                    <img src={logo} className="App-logo img-fluid tamImgHeader m-1" alt="logo header" />  
                    <a className="nav-link active textBlanco" href="./index.html">MiEcommerce</a>
                </div>
                <div className="col-md-6 d-flex align-items-center justify-content-center">
                    <div className="nav justify-content-end">
                        <a className="nav-link active textBlanco" href="./index.html">Ofertas</a>
                        <a className="nav-link active textBlanco" href="./index.html">Más Comprados</a>
                        <a className="nav-link active textBlanco" href="./index.html">En su Mejor Precio</a>
                    </div>
                </div>
                <div className="col-md-2 d-flex align-items-center justify-content-start">
                        <CartWidget cantProd={99}/>
                </div>
                <div className="col-md-2 d-flex align-items-center justify-content-end text-secondary">
                    <div className="nav justify-content-end">
                            <a className="nav-link active textBlanco" href="./login.html">Login</a>
                    </div>
                </div>
            </div>
        </header>
        <body>
            <div className='container-fluid'>
                <div className='row'>
                    <ItemListContainer greeting={'Producto Prueba'}/>
                </div>

            </div>
        </body>
        </>
      );
    }
    
    export default NavBar;
