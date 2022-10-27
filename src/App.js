import ListaFormCategorias from "./categorias/ListaFormCategorias";
import Header from "./general/Header";
import Tarjetas from "./general/Tarjetas";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () =>{
  return (
    <div>
      <Header></Header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Tarjetas/>} exact></Route>
          <Route path="/categorias" element={<ListaFormCategorias/>} exact></Route>
        </Routes>
      </BrowserRouter>
    </div>    
  );
}

export default App;
