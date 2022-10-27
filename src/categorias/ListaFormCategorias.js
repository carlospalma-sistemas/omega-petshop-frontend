const ListaFormCategorias = () => {
    return (
        <div className="container">
            <h4 class="d-flex justify-content-center">Categorías de productos</h4>
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
                        <tr>
                            <td>Alimento para perros</td>
                            <td>bolsa.jpg</td>
                            <td>Sí</td>
                            <td>
                                <button class="btn btn-success btn-sm me-2">Editar</button>
                                <button class="btn btn-danger btn-sm">Eliminar</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Alimento para gatos</td>
                            <td>bolsa.jpg</td>
                            <td>Sí</td>
                            <td>
                                <button class="btn btn-success btn-sm me-2">Editar</button>
                                <button class="btn btn-danger btn-sm">Eliminar</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <h4 class="d-flex justify-content-center mt-5">Añadir categoría</h4>
            <div id="formulario">
                <form action="">
                    <div className="row">
                        <div class="mb-3 col-4">
                            <input type="text" class="form-control form-control-sm col-md-3" id="categoria" name="categoria" placeholder="Ingrese categoría" />
                        </div>
                        <div class="mb-3 col-3">
                            <input class="form-control form-control-sm" id="imagen" type="file"></input>
                        </div>
                        <div class="mb-3 col-3">
                            <input class="form-check-input me-2" type="checkbox" value="" id="activo" name="activo"></input>
                            <label class="form-check-label" for="activo">Activo</label>                            
                        </div>
                        <div class="mb-3 col-2">
                            <button class="btn btn-success btn-sm me-2">Guardar</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ListaFormCategorias;