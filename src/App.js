import ListaFormCategorias from "./componentes/categorias/ListaFormCategorias";
import Header from "./componentes/general/Header";
import Tarjetas from "./componentes/general/Tarjetas";
import FormProducto from "./componentes/productos/FormProductos";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () =>{
  return (
    <div>
      <Header></Header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Tarjetas/>} exact></Route>
          <Route path="/categorias" element={<ListaFormCategorias/>} exact></Route>
          <Route path="/productos/form" element={<FormProducto/>} exact></Route>
        </Routes>
      </BrowserRouter>
    </div>    
  );
}

export default App;
