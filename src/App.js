import NavBar from "./components/NavBar";
import ItemListContainer from './components/ItemListContainer';
import ItemCount from "./components/ItemCount";



function App() {
  const onAdd =(cont)=> {
    alert('Productos Agregados al Carro');
  }
  return (
    <>

    <NavBar />
    <div className="row d-flex">
      <ItemCount valInicial ={1} stock={7} onAdd={onAdd} />
    </div>
    <div className="row d-flex">
      <ItemListContainer greeting={'Producto  V1'}/>
    </div>
    </>

  );
}
export default App;
