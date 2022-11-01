const Header = () => {
    return (
        <header className="d-flex flex-wrap justify-content-center py-2 mb-4 ms-3 me-3 border-bottom">
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                <span className="fs-4">
                    <strong style={{ color: 'blue' }}>Omega</strong><strong style={{ color: 'black' }}>PetShop</strong>
                </span>
            </a>
            <ul className="nav nav-pills">
                <li className="nav-item"><a href="/" className="nav-link">Inicio</a></li>
                <li className="nav-item"><a href="/categorias" className="nav-link">Categorias</a></li>
                <li className="nav-item"><a href="/productos" className="nav-link">Productos</a></li>
            </ul>
        </header>
    );
}

export default Header;