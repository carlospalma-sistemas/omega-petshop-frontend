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

const CategoriaServicios = {};

CategoriaServicios.listarCategorias = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Uy no, se despapayó");
        }, 2000)
    })
}

export default CategoriaServicios;
