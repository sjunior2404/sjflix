import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import Button from '../Button'
//import ButtonLink from './components/ButtonLink';

function Menu(){
    return(
        <header>
            <nav className="Menu">
                <a href="/">
                    <img className="Logo" src={Logo} alt="SJFlix logo"/>
                </a>
                <Button as="a" className="ButtonLink" href="/">Novo Vídeo</Button>
            </nav>
        </header>
    );
}

export default Menu;