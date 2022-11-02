import { useState } from "react";

const Variables = () => {
    const [ datos, setDatos ] = useState([]);
    
    const agregar = () => {
        setDatos(datos.concat("Valor"))
    }

    return (
        <div>
            <ul>
            {
                datos.map((dato) => (
                    <li>{dato}</li>
                ))
            }
            </ul>
            <button onClick={agregar}>Agregar valor</button>
        </div>
    );
}

export default Variables;