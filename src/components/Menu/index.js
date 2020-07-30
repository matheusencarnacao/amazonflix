import React from 'react';
import Logo from '../../assets/img/amazonflix.png';
// import ButtonLink from './components/ButtonLink';
import './Menu.css';
import Button from '../Button';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="Animeflix logo"/>
            </a>

            <Button as='a' className="ButtonLink" href="/">
                Novo conteúdo
            </Button>
        </nav>
    );
}

export default Menu;