import React, { useState, useEffect } from 'react'
import ItemListDetail from './ItemListDetail';
//import productosJson from './productos.json'


const ItemDetailContainer = ({greeting}) => {
  const [productos, setproductos] = useState ([])
  const [loading, setLoading] =useState (true)
  const [error, setError] =useState (false)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
      setproductos([
        {name: "Macbook Pro",  price: "clp $1.000.000", des: "MacBook Pro M1 8GB RAM 256GB SSD 13.3 Space Grey MYD82BE/A Un nuevo poder toma vuelo con el MacBook Pro M1 MYD82BE/A. El más liviano y delgado vuelve completamente renovado", id: 1, image: "/macbook1.png"}])
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
    <div className='m-0 p-0 justify-item-center'>
    <ItemListDetail productos={productos} />
    </div>
    
    </>
  )
}

export default ItemDetailContainer;
