import React from 'react';
import logo from './images/logo.svg';
import lupa from './images/lupa.svg';
import carrinho from './images/carrinho.svg';
import './Header.scss';
import Carrinho from './Carrinho';
import { connect } from 'react-redux';

class Header extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            mostrarModal: false
        };
    }

    abrirModal () {
        this.setState({ mostrarModal: true });
    }

    fecharModal () {
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
                                    {this.props.quantidade}
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

const mapStateToProps = store => ({
    quantidade: store.carrinhoState.quantidade
});

export default connect(mapStateToProps) (Header);