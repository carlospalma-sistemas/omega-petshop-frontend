import { useEffect } from "react";
import { useState } from "react";
import Estados from "../../enums/Estados";
import ProductoServicios from "../../servicios/ProductoServicios";

const ListaProductos = () => {

    const [ estado, setEstado ] = useState(Estados.CARGANDO);
    const [ listaProductos, setListaproductos ] = useState([]);

    const cargarDatos = async () => {
        try {
            const respuesta = await ProductoServicios.listarProductos();
            if (respuesta.data.length > 0) {
                setEstado(Estados.OK);
                setListaproductos(respuesta.data);
            }
            else {
                setEstado(Estados.VACIO);
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        cargarDatos();
    }, [])

    return (
        <div className="container">
            <h4>Lista de productos<a href="/productos/form" className="btn btn-sm btn-primary ms-3">Añadir producto</a> </h4>
            <div id="tabla">
                <table className="table table-sm">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Marca</th>
                            <th>Precio</th>
                            <th>Disponible</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            estado === Estados.ERROR ?
                            (<tr>
                                <td colSpan="5">Ocurrió un error, intente más tarde</td>
                            </tr>) :
                            estado === Estados.CARGANDO ? 
                            (<tr>
                                <td colSpan="5" align="center">
                                    <div className="spinner-border text-secondary" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                </td>
                            </tr>) :
                            estado === Estados.OK ?
                                listaProductos.map((producto)=> (
                                    <tr key={producto._id}>
                                        <td>{producto.nombre}</td>
                                        <td>{producto.marca}</td>
                                        <td>{producto.precio}</td>
                                        <td>{producto.disp ? "Sí" : "No"}</td>
                                        <td>
                                            <a href={"/productos/form/"+producto._id} className="btn btn-sm btn-success me-2">Editar</a>
                                            <button className="btn btn-sm btn-danger">Eliminar</button>
                                        </td>
                                    </tr>
                                )) :
                                (<tr>
                                    <td colSpan="5">No hay datos</td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ListaProductos;