import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CategoriaServicios from "../../servicios/CategoriaServicios";

const FormEdicionCategoria = () => {
    const [ nombre, setNombre ] = useState("");
    const [ imagen, setImagen ] = useState("");
    const [ activo, setActivo ] = useState(false);
    const { id } = useParams();
    const navigateTo = useNavigate();

    const guardarCategoria = async (event) => {
        event.preventDefault();
        try {
            const datosModificados = {
                nombre: nombre,
                imagen: imagen,
                activo: activo
            }
            const respuesta = await CategoriaServicios.modificarCategoria(id, datosModificados);
            console.log(respuesta);
            navigateTo("/categorias");
        } catch (error) {
            
        }
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

    const cargarCategoria = async () => {
        try {
            const respuesta = await CategoriaServicios.cargarCategoria(id);
            if (respuesta.data != null) {
                setNombre(respuesta.data.nombre);
                setImagen(respuesta.data.imagen);
                setActivo(respuesta.data.activo)
            }
        } catch (error) {
            console.log("Error. "+error);
        }
    }

    useEffect(() => {
       cargarCategoria(); 
    }, [])

    return (
        <div className="container">
            <h4 className="d-flex justify-content-center mt-5">Editar categoría</h4>
            <div id="formulario">
                <form action="">
                    <div className="row">
                        <div className="mb-3 col-4">
                            <input type="text" className="form-control form-control-sm col-md-3" id="nombre" name="nombre" value={nombre} onChange={cambiarNombre} placeholder="Ingrese categoría" />
                        </div>
                        <div className="mb-3 col-4">
                            <input className="form-control form-control-sm" id="imagen" name="imagen" value={imagen} onChange={cambiarImagen} type="text" placeholder="Ingrese nombre de archivo"></input>
                        </div>
                        <div className="mb-3 col-4">
                            <input className="form-check-input me-2" type="checkbox" id="activo" name="activo" onChange={cambiarActivo} checked={activo}></input>
                            <label className="form-check-label" htmlFor="activo">Activo</label>
                        </div>
                    </div>
                    <div className="d-flex">
                        <div className="mb-3">
                            <button className="btn btn-success btn-sm me-2" onClick={guardarCategoria}>Guardar</button>
                        </div>
                        <div className="mb-3">
                            <a href="/categorias" className="btn btn-light btn-sm me-2" >Cancelar</a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FormEdicionCategoria;