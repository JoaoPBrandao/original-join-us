import React from 'react';
import logo from './images/logo.svg';
import lupa from './images/lupa.svg';
import carrinho from './images/carrinho.svg';
import carrinhoMobile from './images/carrinhoMobile.svg';
import './Header.scss';
import Carrinho from './Carrinho';
import { connect } from 'react-redux';
import {ReactComponent as Barras} from "./images/barras.svg";

class Header extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            mostrarModal: false,
            menuAberto: false,
            buscaAberta: false
        };
    }

    abrirModal () {
        this.setState({ mostrarModal: true });
    }

    fecharModal () {
        this.setState({ mostrarModal: false });
    }

    alternarMenu() {
        this.setState({menuAberto: !this.state.menuAberto})
    }

    alternarBusca() {
        this.setState({buscaAberta: !this.state.buscaAberta})
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
                            <div className={`menu ${this.state.menuAberto ? 'aberto' : ''}`}>
                                <ul>
                                    <li><span className="clicavel">Sapatos</span></li>
                                    <li><span className="clicavel">Bolsas</span></li>
                                    <li><span className="clicavel">Acessórios</span></li>
                                    <li><span className="clicavel">OFF</span></li>
                                </ul>
                            </div>
                            <div className="buscaCarrinho">
                                <Barras className="controleNav" onClick={() => this.alternarMenu()}/>
                                <div className="logoMobile">
                                    <img src={logo} alt="original.io"/>
                                </div>
                                <label className="busca">
                                    <img src={lupa} alt="lupa" onClick={() => this.alternarBusca()}/>
                                    <input placeholder="Busca" className={`${this.state.buscaAberta ? 'aberto' : ''}`}/>
                                </label>
                                <div className="carrinho clicavel" onClick={() => this.abrirModal()}>
                                    <img src={carrinho} alt="sacola" className="iconeDesktop"/>
                                    <img src={carrinhoMobile}  alt="sacola" className="iconeMobile"/>
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