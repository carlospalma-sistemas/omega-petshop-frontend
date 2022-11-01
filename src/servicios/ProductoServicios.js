const productos = [
    {
        id: 1,
        nombre: "Alimento para perros pequeños",
        marca: "Dog Chow",
        precio: 12000,
        categorias: [ "Alimentos para perros" ],
        imagen : "bolsa_dogchow.jpg",
        disp : true
    },
    {
        id: 2,
        nombre: "Alimento para gatos pequeños",
        marca: "Cat Chow",
        precio: 10000,
        categorias: [ "Alimentos para gatos" ],
        imagen : "bolsa_catchow.jpg",
        disp : true
    }
]

const ProductoServicios = {};

ProductoServicios.listarProductos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos);
        }, 2000)
    })
}

export default ProductoServicios;