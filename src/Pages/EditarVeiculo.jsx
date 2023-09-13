import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditarVeiculo() {
    const { index } = useParams();
    const navigate = useNavigate();
    const [vehicle, setVehicle] = useState({ marca: '', modelo: ''});
    
    useEffect(() => {
        const storedVehicles = JSON.parse(localStorage.getItem('vehicles')) || [];
        if(storedVehicles[index]){
            setVehicle(storedVehicles[index]);
        }
    }, [index]);

    const handleSubmit = (event) => {
        event.preventDefault();

        const storedVehicles = JSON.parse(localStorage.getItem('vehicles')) || [];
        storedVehicles[index] = vehicle;
        localStorage.setItem('vehicles', JSON.stringify(storedVehicles));

        console.log("Veículo editado: ", vehicle);
        navigate('/');
    }


    return (
        <div>
            <h2>Editar Veículo</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Marca:
                </label>
                <input 
                    type="text" 
                    value={vehicle.marca} 
                    onChange={(e) => setVehicle({ ...vehicle, marca: e.target.value})} 
                />
                <br/>
                <label>
                    Modelo:
                </label>
                <input 
                    type="text" 
                    value={vehicle.modelo} 
                    onChange={(e) => setVehicle({ ...vehicle, modelo: e.target.value})} 
                />
                <br/>
                <button type="submit">Salvar alterações</button>
            </form>
        </div>
    );
}

export default EditarVeiculo;