import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';



const ItemListContainer = ({productosDisponibles}) => {
  const [productos, setproductos] = useState ([])
  const [loading, setLoading] =useState (true)
  const [error, setError] =useState (false)
  const {category} = useParams ();

  console.log(category);
  
  useEffect(() => {
    console.log(category);
    setTimeout(() => {
      setLoading(false)
      fetch('https://fakestoreapi.com/products')
      .then(res=>res.json())
      .then(res => setproductos(res))
      console.log(productos)
      .catch(error => {
        setLoading(false)
        setError(true)
        console.error("ERROR:", error)})
      }, 20);
  },[category])

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


// Buen dia! si con todo gusto, es en itemlistcontainer, haces un filter de la respuesta por los item=> item.category === category

// esta category la traes de useParams

// y dentro del useEffect haces un condicional

// if(category) haces la promise con el filter , else la promise que resuelva todos