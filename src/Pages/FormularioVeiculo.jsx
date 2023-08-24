import { useState } from "react";
import { useNavigate } from "react-router-dom";

function FormularioVeiculo(){
    const navigate = useNavigate();
    const [veiculo, setVeiculo] = useState({ marca: '', modelo: '' });

    const handleSubmit = (event) => {
        event.preventDefault();

        const storedVeiculos = JSON.parse(localStorage.getItem('veiculos')) || [];
        storedVeiculos.push(veiculo);
        localStorage.setItem('veiculos', JSON.stringify(storedVeiculos));

        console.log("Veículo adicionado com sucesso!", veiculo);
        navigate('/');
    }

    return (
        <div>
            <h2>Adicionar Veículo</h2>
            <form onSubmit={handleSubmit} >
                <label>
                    Marca:
                    <input type="text" name="marca" value={veiculo.marca} onChange={(e) => setVeiculo({ ...veiculo, marca: e.target.value })} />
                </label>
                <br />
                <label>
                    Modelo:
                    <input type="text" name="modelo" value={veiculo.modelo} onChange={(e) => setVeiculo({ ...veiculo, modelo: e.target.value })} />
                </label>
                <br />
                <button type="submit"> Adicionar Veículo </button>
            </form>
        </div>
    )
}

export default FormularioVeiculo;