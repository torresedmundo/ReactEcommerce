import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import ItemListDetail from './ItemListDetail';
//import productosJson from './productos.json'


const ItemDetailContainer = ({greeting}) => {

  const [productos, setProductos] = useState ([])
  const [loading, setLoading] =useState (true)
  const [error, setError] =useState (false)
  const {id} = useParams ();


  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
      fetch('https://fakestoreapi.com/products')
      .then(res=>res.json())
      .then(res => setProductos(res.find(item => item.id == id)))
      .catch(error => {
        setLoading(false)
        setError(true)
        console.error("ERROR:", error)})
      }, 20);
    },[id])
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


