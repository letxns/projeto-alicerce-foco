import { Link } from 'react-router-dom';
import './Navbar.css';

export const Navbar = () => {

    return(
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/add">Adicionar Veículo</Link>
                </li>
                <li>
                    <Link to="/criar-conta">Criar Conta</Link>
                </li>
            </ul>
        </nav>
    )
}