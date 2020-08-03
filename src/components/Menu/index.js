import React from 'react';
import Logo from '../../assets/img/amazonflix.png';
import { Link } from 'react-router-dom';
// import ButtonLink from './components/ButtonLink';
import './Menu.css';
import Button from '../Button';

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="Animeflix logo"/>
            </Link>

            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo conteúdo
            </Button>
        </nav>
    );
}

export default Menu;