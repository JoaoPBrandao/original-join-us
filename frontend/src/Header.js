import React from 'react';
import logo from './images/logo.svg';
import lupa from './images/lupa.svg';
import carrinho from './images/carrinho.svg';
import './Header.scss';
import {ReactComponent as Fechar} from "./images/X.svg";
import {ReactComponent as Adicionar} from "./images/mais.svg";
import {ReactComponent as Subtrair} from "./images/menos.svg";
import Rasteira from "./images/rasteira.png";
import Modal from "react-modal";

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
                            </div>
                        </div>
                    </div>
                </nav>
                    <Modal
                        isOpen={this.state.mostrarModal}
                        contentLabel="Carrinho de compras"
                        className="carrinhoModal"
                        shouldCloseOnOverlayClick={true}
                        onRequestClose={() => this.fecharModal()}
                        overlayClassName="overlay"
                        appElement={document.getElementById('root')}
                    >
                        <div className="controle">
                            <Fechar className="fechar" onClick={() => this.fecharModal()}/>
                        </div>
                        <div className="headerModal">
                            <span className="titulo">Sacola</span>
                            <span className="quantidade">5 Itens</span>
                        </div>
                        <div className="bodyModal">
                            <div className="produto">
                                <img src={Rasteira}/>
                                <div className="informacoes">
                                    <span className="nome">Rasteira Tira Dedo</span>
                                    <span className="preco">R$ 49,90</span>
                                </div>
                                <div className="quantidade">
                                    <span className="controleQuantidade">-</span>
                                    01
                                    <span className="controleQuantidade">+</span>
                                </div>
                                <Fechar className="remover"/>
                            </div>
                            <div className="produto">
                                <img src={Rasteira}/>
                                <div className="informacoes">
                                    <span className="nome">Rasteira Tira Dedo</span>
                                    <span className="preco">R$ 49,90</span>
                                </div>
                                <div className="quantidade">
                                    <span className="controleQuantidade">-</span>
                                    01
                                    <span className="controleQuantidade">+</span>
                                </div>
                                <Fechar className="remover"/>
                            </div>
                            <div className="produto">
                                <img src={Rasteira}/>
                                <div className="informacoes">
                                    <span className="nome">Rasteira Tira Dedo</span>
                                    <span className="preco">R$ 49,90</span>
                                </div>
                                <div className="quantidade">
                                    <span className="controleQuantidade">-</span>
                                    01
                                    <span className="controleQuantidade">+</span>
                                </div>
                                <Fechar className="remover"/>
                            </div>
                            <div className="produto">
                                <img src={Rasteira}/>
                                <div className="informacoes">
                                    <span className="nome">Rasteira Tira Dedo</span>
                                    <span className="preco">R$ 49,90</span>
                                </div>
                                <div className="quantidade">
                                    <span className="controleQuantidade">-</span>
                                    01
                                    <span className="controleQuantidade">+</span>
                                </div>
                                <Fechar className="remover"/>
                            </div>
                            <div className="produto">
                                <img src={Rasteira}/>
                                <div className="informacoes">
                                    <span className="nome">Rasteira Tira Dedo</span>
                                    <span className="preco">R$ 49,90</span>
                                </div>
                                <div className="quantidade">
                                    <span className="controleQuantidade">-</span>
                                    01
                                    <span className="controleQuantidade">+</span>
                                </div>
                                <Fechar className="remover"/>
                            </div>
                            <div className="produto">
                                <img src={Rasteira}/>
                                <div className="informacoes">
                                    <span className="nome">Rasteira Tira Dedo</span>
                                    <span className="preco">R$ 49,90</span>
                                </div>
                                <div className="quantidade">
                                    <span className="controleQuantidade">-</span>
                                    01
                                    <span className="controleQuantidade">+</span>
                                </div>
                                <Fechar className="remover"/>
                            </div>
                            <div className="produto">
                                <img src={Rasteira}/>
                                <div className="informacoes">
                                    <span className="nome">Rasteira Tira Dedo</span>
                                    <span className="preco">R$ 49,90</span>
                                </div>
                                <div className="quantidade">
                                    <span className="controleQuantidade">-</span>
                                    01
                                    <span className="controleQuantidade">+</span>
                                </div>
                                <Fechar className="remover"/>
                            </div>
                            <div className="produto">
                                <img src={Rasteira}/>
                                <div className="informacoes">
                                    <span className="nome">Rasteira Tira Dedo</span>
                                    <span className="preco">R$ 49,90</span>
                                </div>
                                <div className="quantidade">
                                    <span className="controleQuantidade">-</span>
                                    01
                                    <span className="controleQuantidade">+</span>
                                </div>
                                <Fechar className="remover"/>
                            </div>
                        </div>
                        <div className="footerModal">
                            <div className="freteGratis">Faltam R$ xx,xx para você <span className="destaque">Ganhar Frete Grátis</span></div>
                            <div className="finalizar">
                                <div className="valor">
                                    <span className="valorTotal">Total: R$ 149,00</span>
                                    <span className="parcelas">até 3x de R$ 49,90 sem juros</span>
                                </div>
                                <button className="botaoGrande">Finalizar Compra</button>
                            </div>
                        </div>
                    </Modal>
            </header>
        );
    }
}

export default Header;