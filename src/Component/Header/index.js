import { Link } from 'react-router-dom'
import "../../Assets/Style/header.css";

function Header () {
    return (
        <div className="contentHeader">
            <div className="rightHeader">
                <nav>
                    <ul className='ulHeader'>
                        <li className="nav_header_li about"><a href="#about">A propos</a></li>
                        <li className="nav_header_li quality"><a href="#quality">Mes qualités</a></li>
                        <li className="nav_header_li projectDone"><a href="#project">Mes projets</a></li>
                        <li className="nav_header_li contactMe"><a href="#contact_me">Contactez moi</a></li>
                    </ul>     
                </nav>
            </div>
        </div>
    )
}

export default Header;