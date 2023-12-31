import { useState } from "react";
import { useNavigate } from "react-router-dom";

function FormularioVeiculo(){
    const navigate = useNavigate();
    const [vehicle, setVehicle] = useState({ marca: '', modelo: '', ano: '' });

    const handleSubmit = (event) => {
        event.preventDefault();

        const storedVehicles = JSON.parse(localStorage.getItem('vehicles')) || [];
        storedVehicles.push(vehicle);
        localStorage.setItem('vehicles', JSON.stringify(storedVehicles));

        console.log("Veículo adicionado com sucesso!", vehicle);
        navigate('/');
    }

    return (
        <div>
            <h2>Adicionar Veículo</h2>
            <form onSubmit={handleSubmit} >
                <label>
                    Marca:
                    <input 
                        type="text" 
                        name="marca"
                        value={vehicle.marca} 
                        required
                        onChange={(e) => setVehicle({ ...vehicle, marca: e.target.value })} 
                    />
                </label>
                <br />
                <label>
                    Modelo:
                    <input 
                        type="text" 
                        name="modelo" 
                        value={vehicle.modelo} 
                        required
                        onChange={(e) => setVehicle({ ...vehicle, modelo: e.target.value })} 
                    />
                </label>
                <label>
                    Ano:
                    <input 
                        type="number" 
                        name="ano" 
                        value={vehicle.ano} 
                        required
                        onChange={(e) => setVehicle({ ...vehicle, ano: e.target.value })} 
                    />
                </label>
                <br />
                <button type="submit"> Adicionar Veículo </button>
            </form>
        </div>
    )
}

export default FormularioVeiculo;