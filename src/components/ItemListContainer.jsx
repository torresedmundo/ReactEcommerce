import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';


const ItemListContainer = ({productosDisponibles}) => {
  const [productos, setproductos] = useState ([])
  const [loading, setLoading] =useState (false)
  const [error, setError] =useState (false)
  const { category } = useParams ();


  useEffect(() => {
    console.log(category);
    setTimeout(() => {
      setLoading(false)
      fetch('https://fakestoreapi.com/products')
      .then(res=>res.json())
      .then(res =>{
        if(category){
        setproductos(res.filter(prod => prod.category === category))
        } else{
        setproductos(res)
        }
        } )
      .catch(error => {
        setLoading(false)
        setError(true)
        console.error("ERROR:", error)})
      });
    },[category]);
    return (
      <>
        <div>{loading && 'Loading...'}</div>
        <div>{error && 'Error con los productos'}</div>
        <div className='d-flex m-0 p-0 justify-item-center'>
        <ItemList productos={productos} />
        </div>
      </>
      )}

export default ItemListContainer;
