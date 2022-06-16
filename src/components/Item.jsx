import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

export default function Item({producto}) {
    const {id, title, image, price, category} = producto
  return (
    <>
                    <div  className="card tamCardsProduct d-flex m-3">
                        <img src={image}  className="card-img-top tamImgProducto img-fluid" alt="productos disponibles"/>
                    <div  className="card-body">
                        <p  className="card-title text-center fw-bold">{title}</p>
                        <p  className="card-text text-end">Id: {id}</p>
                        <p  className="card-text text-end">Categoría: {category}</p>
                    </div>
                    <div className="list-group list-group-flush">
                        <p className="list-group-item">Precio: Usd {price}</p>
                    </div>
                
                    <div  className="card-body m-auto">
                        <Link to = {'/producto/'+id} className='btn btn-info '>Ver Detalle</Link>
                    </div>
                    </div>

    </>
  )
}
