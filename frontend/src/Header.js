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
                                <span className="clicavel">Entrar</span>
                                <span className="separador">|</span>
                                <span className="clicavel">Cadastre-se</span>
                            </div>
                            <div className="menu">
                                <ul>
                                    <li><span className="clicavel">Sapatos</span></li>
                                    <li><span className="clicavel">Bolsas</span></li>
                                    <li><span className="clicavel">Acessórios</span></li>
                                    <li><span className="clicavel">OFF</span></li>
                                </ul>
                            </div>
                            <div className="buscaCarrinho">
                                <label className="busca">
                                    <img src={lupa} alt="lupa"/>
                                    <input placeholder="Busca"/>
                                </label>
                                <div className="carrinho clicavel" onClick={() => this.abrirModal()}>
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