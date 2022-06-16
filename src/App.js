import NavBar from "./components/NavBar";
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from  'react-router-dom';


function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer/>} />
        <Route path="/category/:category" element={<ItemListContainer/>} />
        <Route path="/producto/:id" element={<ItemDetailContainer/>} />
      </Routes>
    </BrowserRouter>
    </>

  );
}
export default App;
