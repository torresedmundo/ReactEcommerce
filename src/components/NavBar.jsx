import logo from '../logo.svg';
import CartWidget from "./CartWidget";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import '../App.css'


function NavBar() {
        return (
        <>
        <header className="fondoGradienteBanner container-fluid indexNav">
            <div className="row">
                <div className="col-md-2 d-flex align-items-center">
                    <img src={logo} className="App-logo img-fluid tamImgHeader m-1" alt="logo header" />  
                    <Link to="./" className="nav-link active  textBlanco fw-bold">MiEcommerce</Link>
                </div>
                <div className="col-md-6 d-flex align-items-center justify-content-center">
                    <div className="nav justify-content-end">
                    <Link to="./" className="nav-link active  textBlanco">Todos los Productos</Link>
                    <Link to={'./categoria/jewelery'} className="nav-link active  textBlanco">Joyeria</Link>
                    <Link to={'./categoria/electronics'} className="nav-link active  textBlanco">Tecnología</Link>
                    <Link to={"./categoria/women's clothing"} className="nav-link active  textBlanco">Vestuario Mujer</Link>
                    <Link to={"./categoria/men's clothing"} className="nav-link active  textBlanco">Vestuario Hombre</Link>

                    </div>
                </div>
                <div className="col-md-2 d-flex align-items-center justify-content-start">
                        <CartWidget cantProd={99}/>
                </div>
                <div className="col-md-2 d-flex align-items-center justify-content-end text-secondary">
                    <div className="nav justify-content-end">
                        <Link to="./Producto/1" className="nav-link active textBlanco fw-bold">Login</Link>
                    </div>
                </div>
            </div>
        </header>
        </>
      );
    }
    
    export default NavBar;
