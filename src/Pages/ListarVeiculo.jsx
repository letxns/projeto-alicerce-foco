import React, { useState, useEffect } from 'react';

function ListarVeiculos() {
    const [veiculos, setVeiculos] = useState([]);

    useEffect(() => {
        const storedVeiculos = JSON.parse(localStorage.getItem('veiculos')) || [];
        setVeiculos(storedVeiculos);
    }, []);

    return (
        <div>
            <h2>Lista de Veículos</h2>
            <ul>
                {veiculos.map((veiculo, index) => (
                <li key={index}>
                    Marca: {veiculo.marca}, Modelo: {veiculo.modelo}
                </li>
                ))}
            </ul>
        </div>
    );
}

export default ListarVeiculos;
