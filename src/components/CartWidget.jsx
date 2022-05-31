import carrito from "../img/carrito.png";

function CartWidget({cantProd}) {
    return (
        <>
        <img className="img-fluid tamImgCarrito" src={carrito} alt="imagen carrito" />
        <span className="textBlanco ms-2">{cantProd}</span>
        </>
      );
    }
    
    export default CartWidget;