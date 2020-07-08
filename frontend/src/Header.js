import React from 'react';
import logo from './images/logo.svg';
import lupa from './images/lupa.svg';
import carrinho from './images/carrinho.svg';
import './Header.scss';
import Carrinho from './Carrinho';

class Header extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            mostrarModal: false
        };
    }

    abrirModal () {
        document.body.style.overflow = 'hidden';
        this.setState({ mostrarModal: true });
    }

    fecharModal () {
        document.body.style.overflow = 'unset';
        this.setState({ mostrarModal: false });
    }

    render() {
        return (
            <header className="Header">
                <div className="Logo container">
                    <img src={logo} alt="original.io"/>
                </div>
                <nav className="navbarContainer">
                    <div className="container">
                        <div className="navbar">
                            <div className="login">
                                <a href={'#'}>Entrar</a>
                                <span className="separador">|</span>
                                <a href={'#'}>Cadastre-se</a>
                            </div>
                            <div className="menu">
                                <ul>
                                    <li><a href="#">Sapatos</a></li>
                                    <li><a href="#">Bolsas</a></li>
                                    <li><a href="#">Acessórios</a></li>
                                    <li><a href="#">OFF</a></li>
                                </ul>
                            </div>
                            <div className="buscaCarrinho">
                                <label className="busca">
                                    <img src={lupa} alt="lupa"/>
                                    <input placeholder="Busca"/>
                                </label>
                                <div className="carrinho" onClick={() => this.abrirModal()}>
                                    <img src={carrinho} alt="sacola"/>
                                    0
                                </div>
                                <Carrinho
                                    mostrarModal={this.state.mostrarModal}
                                    fecharModal={() => this.fecharModal()}
                                />
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;