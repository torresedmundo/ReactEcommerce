import React from 'react'
import Item from './Item'

const ItemList= ({personajes})=>{
  return (
    <>    <div className='container-fluid justify-content-center'>
            <div className='container'>
                <div className='d-flex flex-wrap'>
                    {personajes?.map(personaje => <Item key={personaje.id}  personaje={personaje}/>)}
                </div>
            </div>
    </div>
    </>
  )
}

export default ItemList

