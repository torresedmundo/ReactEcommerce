import React, { useState } from 'react'


export default function ItemCount({valInicial, stock, onAdd}) {
    const [cont, setCont] = useState (valInicial, stock, onAdd);

    const sumar = () =>{
        cont < stock ? setCont(cont+1) : alert ('excede stock')
        }

    const restar = () =>{
        cont > valInicial ? setCont(cont-1) : alert ('No se puede eliminar más productos')
    }

    const borrar = () =>{
        setCont(valInicial)
    }

    return (
      <>
      <div className='container-fluid col-md-4'>
        <div className='row'>
            <p className='text-center mt-3'>Cantidad de productos a comprar</p>
            <div className='d-flex container text-center justify-content-center'>
                <button className='btn btn-danger me-5' onClick={restar}>-</button> 
                <p className='col-md-1 text-center p-0 m-0 align-self-center'>{cont}</p>
                <button className='btn btn-primary ms-5' onClick={sumar}>+</button>
            </div>
        </div>
        <div className='row container m-0'>
            <button className='btn btn-warning mt-3 mb-3' onClick ={()=> {onAdd(cont); borrar()}} >Agregar al Carro</button>
        </div>
      </div>
    </>
  )
}
