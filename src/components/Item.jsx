import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Item({personaje}) {
    const {name, image, species, status} = personaje
  return (
    <>
                    <div  className="card tamCardsProduct d-flex m-3">
                        <img src={image}  className="card-img-top img-fluid" alt=""/>
                    <div  className="card-body">
                        <h5  className="card-title">{name}</h5>
                        <p  className="card-text">{species}</p>
                    </div>
                    <div className="list-group list-group-flush">
                        <p className="list-group-item">{status}</p>
                    </div>
                
                    <div  className="card-body justify-item-center">
                        <button className='btn btn-info '>Ver Detalle</button>
                    </div>
                    </div>

    </>
  )
}
