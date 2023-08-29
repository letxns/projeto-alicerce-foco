import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ListarVeiculos() {
    const [veiculos, setVeiculos] = useState([]);

    useEffect(() => {
        const storedVeiculos = JSON.parse(localStorage.getItem('veiculos')) || [];
        setVeiculos(storedVeiculos);
    }, []);

    const handleRemoverVeiculo = (index) => {
        const updatedVeiculo = veiculos.filter((_, i) => i !== index);
        localStorage.setItem('veiculos', JSON.stringify(updatedVeiculo));
        setVeiculos(updatedVeiculo);
    }

    return (
        <div>
            <h2>Lista de Veículos</h2>
            <ul>
                {veiculos.map((veiculo, index) => (
                    <li key={index}>
                        Marca: {veiculo.marca}, Modelo: {veiculo.modelo}
                        <Link to={`/edit/${index}`}>
                            <button>
                                Editar
                            </button>
                        </Link>
                        <button onClick={() => handleRemoverVeiculo(index)}>Remover</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListarVeiculos;
