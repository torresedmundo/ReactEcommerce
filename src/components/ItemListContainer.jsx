import React, { useState, useEffect } from 'react'
import ItemList from './ItemList';



const ItemListContainer = ({greeting}) => {
  const [personajes, setPersonajes] = useState ([])
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
    .then(res => res.json())
    .then(res => setPersonajes(res.results))
    .catch(error => console.error("ERROR:", error))
  }, [])
console.log(personajes);
  return (
    <>
    <div className='d-flex m-0 p-0 justify-item-center'>
    <ItemList personajes={personajes} />
    </div>
    
    </>
  )
}

export default ItemListContainer;
