import { useEffect } from "react";
import { useState } from "react";
import Estados from "../../enums/Estados";
import CategoriaServicios from "../../servicios/CategoriaServicios";

const ListaFormCategorias = () => {

    const [ estado, setEstado ] = useState(Estados.CARGANDO);
    const [ listaCategorias, setListaCategorias ] = useState([]);
    const [ busqueda, setBusqueda ] = useState("");
    const [ nombre, setNombre ] = useState("");
    const [ imagen, setImagen ] = useState("");
    const [ activo, setActivo ] = useState(false);
   
    const cargarDatos = async () => {
        try {
            const respuesta = await CategoriaServicios.listarCategorias();
            console.log(respuesta.data);
            if (respuesta.data.length > 0 ) {
                setListaCategorias(respuesta.data);
                setEstado(Estados.OK);
            }
            else {
                setEstado(Estados.VACIO);
            }
        } catch (error) {
            setEstado(Estados.ERROR);
            console.log(error);
        }
    }

    useEffect(() => {
        cargarDatos();
    }, [])

    const buscarCategoria = async (event) => {
        event.preventDefault();
        try {
            const respuesta = await CategoriaServicios.buscarCategorias(busqueda);
            console.log(respuesta.data);
            if (respuesta.data.length > 0 ) {
                setListaCategorias(respuesta.data);
                setEstado(Estados.OK);
            }
            else {
                setEstado(Estados.VACIO);
            }
        } catch (error) {
            setEstado(Estados.ERROR);
            console.log(error);
        }
    }

    const guardarCategoria = async (event) => {
        event.preventDefault();
        const categoria = {
            nombre: nombre,
            imagen: imagen,
            activo : activo
        }
        await CategoriaServicios.guardarCategorias(categoria);
        cargarDatos();
        setNombre("");
        setImagen("");
        setActivo(false);
    }

    const cambiarCriterio = (event) => {
        setBusqueda(event.target.value);
    }

    const cambiarNombre = (event) => {
        setNombre(event.target.value);
    }

    const cambiarImagen = (event) => {
        setImagen(event.target.value);
    }

    const cambiarActivo = (event) => {
        setActivo(event.target.checked);
    }
   
    return (
        <div className="container">
            <h4 className="d-flex justify-content-center">Categorías de productos</h4>
            <form action="">
                <div className="row">
                    <div className="mb-3 col-4">
                        <input type="text" onChange={cambiarCriterio} value={busqueda} className="form-control form-control-sm col-md-3" id="busqueda" name="busqueda" placeholder="Ingrese dato a buscar" />
                    </div>
                    <div className="col-1">
                        <button className="btn btn-sm btn-primary" onClick={buscarCategoria}>Buscar</button>
                    </div>
                </div>
            </form>
            <div id="tabla">
                <table className="table table-sm">
                    <thead>
                        <tr>
                            <th>Categoria</th>
                            <th>Imagen</th>
                            <th>Activo</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        estado === Estados.ERROR ? (
                            <tr><td>Ocurrió un error...</td></tr>
                        ) 
                        :
                        estado === Estados.CARGANDO ? (
                            <tr><td>Cargando...</td></tr>
                        ) 
                        :
                        estado === Estados.VACIO ? (
                            <tr><td>No hay datos</td></tr>
                        )
                        :
                        listaCategorias.map((categoria) => (
                            <tr key={categoria._id}>
                                <td>{categoria.nombre}</td>
                                <td>{categoria.imagen}</td>
                                <td>{categoria.activo ? "Sí" : "No"}</td>
                                <td>
                                    <a href={"/categorias/form/"+categoria._id} className="btn btn-sm btn-success">Editar</a>
                                    <button className="btn btn-sm btn-danger">Eliminar</button>
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
            <h4 className="d-flex justify-content-center mt-5">Añadir categoría</h4>
            <div id="formulario">
                <form action="">
                    <div className="row">
                        <div className="mb-3 col-4">
                            <input type="text" className="form-control form-control-sm col-md-3" id="nombre" name="nombre" value={nombre} onChange={cambiarNombre} placeholder="Ingrese categoría" />
                        </div>
                        <div className="mb-3 col-3">
                            <input className="form-control form-control-sm" id="imagen" name="imagen" value={imagen} onChange={cambiarImagen} type="text" placeholder="Ingrese nombre de archivo"></input>
                        </div>
                        <div className="mb-3 col-3">
                            <input className="form-check-input me-2" type="checkbox" id="activo" name="activo" onChange={cambiarActivo} checked={activo}></input>
                            <label className="form-check-label" htmlFor="activo">Activo</label>
                        </div>
                        <div className="mb-3 col-2">
                            <button className="btn btn-success btn-sm me-2" onClick={guardarCategoria}>Guardar</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ListaFormCategorias;