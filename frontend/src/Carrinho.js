import React from 'react';
import {ReactComponent as Fechar} from "./images/X.svg";
import Rasteira from "./images/rasteira.png";
import Modal from "react-modal";
import './Carrinho.scss';

class Carrinho extends React.Component {

    constructor(props) {
        super(props);
    }
    render(){
        return(
        <Modal
            isOpen={this.props.mostrarModal}
            contentLabel="Carrinho de compras"
            className="carrinhoModal"
            shouldCloseOnOverlayClick={true}
            onRequestClose={this.props.fecharModal}
            overlayClassName="overlay"
            appElement={document.getElementById('root')}
        >
            <div className="controle">
                <Fechar className="fechar" onClick={this.props.fecharModal}/>
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
        )
    }
}
export default Carrinho;