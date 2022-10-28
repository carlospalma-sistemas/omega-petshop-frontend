const categorias = [
    {
        id: 1,
        nombre: "Alimentos para perros", 
        activo: true,
        imagen: "imagen.jpg"
    },
    {
        id: 2,
        nombre: "Alimentos para gatos", 
        activo: false,
        imagen: "otraimagen.jpg"
    },
]

const categoriaServicios = {};

categoriaServicios.listarCategorias = () => {
    return categorias;
}

export default categoriaServicios;