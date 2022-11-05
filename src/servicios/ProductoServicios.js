import axios from "axios";

const ProductoServicios = {};

ProductoServicios.listarProductos = () => {
    return axios.get("http://localhost:8000/api/productos");
}

ProductoServicios.guardarProducto = (producto) => {
    return axios.post("http://localhost:8000/api/productos", producto);
}

export default ProductoServicios;