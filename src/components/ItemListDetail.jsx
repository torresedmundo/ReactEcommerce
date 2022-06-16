import React from 'react'
import ItemDetail from './ItemDetail'

const ItemListDetail= ({productos})=>{
  return (
    <>    <div className=''>
            <div className=''>
                <div className=''>
                    <ItemDetail key={productos.id}  producto={productos}/>
                </div>
            </div>
    </div>
    </>
  )
}

export default ItemListDetail

