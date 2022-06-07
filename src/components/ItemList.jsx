import React from 'react'
import Item from './Item'

const ItemList= ({productos})=>{
  return (
    <>    <div className='container-fluid justify-content-center'>
            <div className='container'>
                <div className='d-flex flex-wrap'>
                    {productos?.map(producto => <Item key={producto.id}  producto={producto}/>)}
                </div>
            </div>
    </div>
    </>
  )
}

export default ItemList

