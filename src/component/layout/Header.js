import {Link} from "react-router-dom";  

const Header = (props) => {
    return (
        <header>
            <div>
                <Link to="/"><img src="img/pag/logo.png" width="70" alt="logo"/></Link>
                <h1>El hogar del libro</h1>
            </div>
            <nav className="navegador">
                <ul>
                    <li><Link to="productos">Productos</Link></li>
                    <li><Link to="sedes">Sedes y contacto</Link></li>
                    <li><Link to="comparti">Comparti</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;