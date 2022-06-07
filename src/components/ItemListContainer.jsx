import React, { useState, useEffect } from 'react'
import ItemList from './ItemList';
//import productosJson from './productos.json'


const ItemListContainer = ({greeting}) => {
  const [productos, setproductos] = useState ([])
  const [loading, setLoading] =useState (true)
  const [error, setError] =useState (false)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
      //fetch("https://rickandmortyapi.com/api/character")
      //.then(res => res.json())
      //.then(res => setproductos(res.results))
      setproductos([
        {name: "MACBOOK PRO",  price: "clp $1.000.000", des: "Macbook Pro 512 GB", id: 1, image: "/macbook1.png"},
        {name: "IPAD AIR", price: "clp $700.000", des: "Ipad Air 256 GB", id: 2, image: "/ipadair.png"},
        {name: "AIR TAG", price: "clp $35.000", des: "1 pcs Air Tag", id: 3, image: "/airtag.png"}])
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
