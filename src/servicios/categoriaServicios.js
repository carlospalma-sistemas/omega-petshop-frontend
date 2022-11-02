import axios from "axios";

const CategoriaServicios = {};

CategoriaServicios.listarCategorias = () => {
    return axios.get("http://localhost:8000/api/categorias");
}

CategoriaServicios.buscarCategorias = (busqueda) => {
    return axios.get("http://localhost:8000/api/categorias?q="+busqueda);
}

CategoriaServicios.guardarCategorias = (categoria) => {
    return axios.post("http://localhost:8000/api/categorias", categoria);
}

export default CategoriaServicios;
