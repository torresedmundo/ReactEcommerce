import NavBar from "./components/NavBar";
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemCount from "./components/ItemCount";



function App() {
  return (
    <>

    <NavBar />
    <div className="row d-flex">
      <ItemListContainer productosDisponibles/>
    </div>
    <div className="row d-flex">
      <ItemDetailContainer />
    </div>
    </>

  );
}
export default App;
