import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './ItemCount';

export default function ItemDetail({producto}) {
    const {name, image, des, price, id} = producto
    const onAdd =(cont)=> {
        alert('Productos Agregados al Carro');
      }
    
  return (
    <>
    <div className="container-fluid d-flex  m-0 p-0">
    <div className="container col-md-4 card">           
        <div  className="">
            <img src={image}  className="tamImgDetail" alt=""/>
        </div>
        <div  className="card-body">
            <h5  className="card-title text-center">{name}</h5>
            <p  className="card-text text-center">Descripción: <br></br>{des}</p>
            <p  className="card-text text-end">Id: {id}</p>
        </div>
        <div className="list-group list-group-flush">
            <p className="list-group-item text-end fw-bold">Precio: {price}</p>
        </div>
    
        <div  className="card-body justify-item-center">
            <div className="row d-flex">
                <ItemCount valInicial ={1} stock={7} onAdd={onAdd} />
            </div>
        </div>
    </div>
    </div>                
    </>
  )
}
