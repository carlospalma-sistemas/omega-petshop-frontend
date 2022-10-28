import categoriaServicios from "../../servicios/categoriaServicios";

const FormProducto = () => {
    const listaCategorias = categoriaServicios.listarCategorias();

    return (
        <form className="container">
            <h4 className="mb-3">Formulario de productos</h4>
            <div className="row">
                <div className="mb-3 col-4">
                    <label htmlFor="nombre">Ingrese nombre</label>
                    <input type="text" className="form-control form-control-sm col-md-3" id="nombre" name="nombre" />
                </div>
                <div className="mb-3 col-4">
                    <label htmlFor="nombre">Ingrese marca</label>
                    <input type="text" className="form-control form-control-sm col-md-3" id="marca" name="marca" />
                </div>
                <div className="mb-3 col-4">
                    <label htmlFor="nombre">Ingrese precio</label>
                    <input type="number" className="form-control form-control-sm col-md-3" id="precio" name="precio" value="0"/>
                </div>
            </div>
            <div className="row">
                <div className="mb-3 col-4">
                    <select class="form-select form-select-sm" aria-label="Categorias">
                        <option selected>Seleccione categoría</option>
                        {
                            listaCategorias.map((categoria) => (
                                <option key={categoria.nombre} value={categoria.nombre}>{categoria.nombre}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="mb-3 col-4">
                    <input type="file" className="form-control form-control-sm col-md-3" id="imagen" name="imagen" />
                </div>
                <div className="mb-3 col-3">
                    <input className="form-check-input me-2" type="checkbox" value="" id="disponible" name="disponible"></input>
                    <label className="form-check-label" htmlFor="disponible">Disponible</label>
                </div>
            </div>
            <div>
                <div className="mb-3 col-2">
                    <button className="btn btn-success btn-sm me-2">Guardar</button>
                </div>
            </div>
        </form>
    );
}

export default FormProducto;