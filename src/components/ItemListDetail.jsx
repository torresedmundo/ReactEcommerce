import React from 'react'
import ItemDetail from './ItemDetail'

const ItemListDetail= ({productos})=>{
  
  return (
    <>    <div className=''>
            <div className=''>
                <div className=''>
                    {productos?.map(producto => <ItemDetail key={producto.id}  producto={producto}/>)}
                </div>
            </div>
    </div>
    </>
  )
}

export default ItemListDetail

