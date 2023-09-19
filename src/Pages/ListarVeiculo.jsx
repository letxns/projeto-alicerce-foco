import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ListarVeiculos() {
    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
        const storedVehicles = JSON.parse(localStorage.getItem('vehicles')) || [];
        setVehicles(storedVehicles);
    }, []);

    const handleRemoveVehicle = (index) => {
        const updatedVehicles = vehicles.filter((_, i) => i !== index);
        localStorage.setItem('vehicles', JSON.stringify(updatedVehicles));
        setVehicles(updatedVehicles);
    };

    return (
        <div>
            <h2>Lista de Veículos</h2>
            <ul>
                {vehicles.map((veiculo, index) => (
                    <div key={index} className='botoes' >
                        Marca: {veiculo.marca}, Modelo: {veiculo.modelo}, Ano: {veiculo.ano}
                        <Link to={`/edit/${index}`}>
                            <button>
                                Editar
                            </button>
                        </Link>
                        <button onClick={() => handleRemoveVehicle(index)}>
                            Remover
                        </button>
                    </div>
                ))}
            </ul>
        </div>
    );
}

export default ListarVeiculos;