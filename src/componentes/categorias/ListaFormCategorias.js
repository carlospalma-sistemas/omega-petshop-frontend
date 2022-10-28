import categoriaServicios from "../../servicios/categoriaServicios";

const ListaFormCategorias = () => {
    const listaCategorias = categoriaServicios.listarCategorias();
    console.log(listaCategorias);

    return (
        <div className="container">
            <h4 className="d-flex justify-content-center">Categorías de productos</h4>
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
                        listaCategorias.map((categoria) => (
                            <tr key={categoria.id}>
                                <td>{categoria.nombre}</td>
                                <td>{categoria.imagen}</td>
                                <td>{categoria.activo ? "Sí" : "No"}</td>
                                <td>
                                    <button className="btn btn-sm btn-success">Editar</button>
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
                            <input type="text" className="form-control form-control-sm col-md-3" id="categoria" name="categoria" placeholder="Ingrese categoría" />
                        </div>
                        <div className="mb-3 col-3">
                            <input className="form-control form-control-sm" id="imagen" type="file"></input>
                        </div>
                        <div className="mb-3 col-3">
                            <input className="form-check-input me-2" type="checkbox" value="" id="activo" name="activo"></input>
                            <label className="form-check-label" htmlFor="activo">Activo</label>
                        </div>
                        <div className="mb-3 col-2">
                            <button className="btn btn-success btn-sm me-2">Guardar</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ListaFormCategorias;