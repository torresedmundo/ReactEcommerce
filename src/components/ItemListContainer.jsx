import React, { useState, useEffect } from 'react'
import ItemList from './ItemList';


const ItemListContainer = ({productosDisponibles}) => {
  const [productos, setproductos] = useState ([])
  const [loading, setLoading] =useState (true)
  const [error, setError] =useState (false)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
      fetch('https://fakestoreapi.com/products')
      .then(res=>res.json())
      .then(res => setproductos(res))
      .catch(error => {
        setLoading(false)
        setError(true)
        console.error("ERROR:", error)})
      }, 1000);
  })
console.log(productos);
  return (
    <>
    <div>{loading && 'Loading...'}</div>
    <div>{error && 'Error con los productos'}</div>
    <div className='d-flex m-0 p-0 justify-item-center'>
    <ItemList productos={productos} />
    </div>
    
    </>
  )
}

export default ItemListContainer;
