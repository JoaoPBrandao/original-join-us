import React from 'react';
import logo from './images/logo.svg';
import lupa from './images/lupa.svg';
import carrinho from './images/carrinho.svg';
import './Header.scss';

function Header() {
    return (
        <header className="Header">
            <div className="Logo">
                <img src={logo} alt="original.io" />
            </div>
            <div className="navbar">
                <div className="login">
                    <a href={'#'}>Entrar</a>
                    <span className="separador">|</span>
                    <a href={'#'}>Cadastre-se</a>
                </div>
                <nav className="menu">
                    <ul>
                        <li><a href="#">Sapatos</a></li>
                        <li><a href="#">Bolsas</a></li>
                        <li><a href="#">Acessórios</a></li>
                        <li><a href="#">OFF</a></li>
                    </ul>
                </nav>
                <div className="buscaCarrinho">
                    <label className="busca">
                        <img src={lupa} alt="lupa"/>
                        <input placeholder="Busca"/>
                    </label>
                    <div className="carrinho">
                        <img src={carrinho} alt="sacola"/>
                        0
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;