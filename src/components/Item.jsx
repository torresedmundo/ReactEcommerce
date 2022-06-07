import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Item({producto}) {
    const {name, image, des, price, id} = producto
  return (
    <>
                    <div  className="card tamCardsProduct d-flex m-3">
                        <img src={image}  className="card-img-top img-fluid" alt=""/>
                    <div  className="card-body">
                        <h5  className="card-title">{name}</h5>
                        <p  className="card-text">Descripción: <br></br>{des}</p>
                        <p  className="card-text">Id: {id}</p>
                    </div>
                    <div className="list-group list-group-flush">
                        <p className="list-group-item">Precio: {price}</p>
                    </div>
                
                    <div  className="card-body justify-item-center">
                        <button className='btn btn-info '>Ver Detalle</button>
                    </div>
                    </div>

    </>
  )
}
