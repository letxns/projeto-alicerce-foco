import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar(){

    return(
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/add">Adicionar Veículo</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;