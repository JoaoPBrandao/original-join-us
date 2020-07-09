import React from 'react';
import {ReactComponent as Fechar} from "./images/X.svg";
import Modal from "react-modal";
import './Carrinho.scss';
import axios from "axios";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {adicionarUnidade, removerUnidade, removerProduto, definirInicial} from './actions';
import { formatarNumero } from "./scripts";

class Carrinho extends React.Component {

    constructor(props) {
        super(props);
    }
    componentDidMount() {
        axios.get('http://localhost:3300/carrinho')
            .then(resultado => {
                this.props.definirInicial(resultado.data);
            }).catch(erro => {
                this.props.definirInicial([]);
            });
    }
    gerarTotal(){
        let total = 0;
        let parcelas = 0;
        let produtos = this.props.produtos;
        produtos.forEach(produto =>{
            total += produto.valor*produto.quantidade;
        });
        if(total > 0){
            parcelas = total/3;
        }
        return({total, parcelas});
    }
    gerarProdutos(){
        let {produtos, adicionarUnidade, removerUnidade, removerProduto} = this.props;
        produtos = produtos.map((produto, i) =>{
            return(
                <div className="produto" key={i}>
                    <img src={produto.foto}/>
                    <div className="informacoes">
                        <span className="nome">{produto.nome}</span>
                        <span className="preco">R$ {formatarNumero(produto.valor)}</span>
                    </div>
                    <div className="quantidade">
                        <span className="controleQuantidade clicavel" onClick={() => {removerUnidade(i); this.forceUpdate()}}>-</span>
                        {('0' + produto.quantidade).slice(-2)}
                        <span className="controleQuantidade clicavel" onClick={() => {adicionarUnidade(i); this.forceUpdate()}}>+</span>
                    </div>
                    <Fechar className="remover clicavel" onClick={() => removerProduto(i)}/>
                </div>
            )
        });
        return produtos;
    }
    render(){
        let valores = this.gerarTotal();
        let produtos = this.gerarProdutos();
        let parcelasSpan;
        if (valores.parcelas > 0){
            parcelasSpan = <span className="parcelas">até 3x de R$ {formatarNumero(valores.parcelas)} sem juros</span>
        }
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
                <Fechar className="fechar clicavel" onClick={this.props.fecharModal}/>
            </div>
            <div className="headerModal">
                <span className="titulo">Sacola</span>
                <span className="quantidade">{this.props.quantidade} Itens</span>
            </div>
            <div className="bodyModal">
                {produtos}
            </div>
            <div className="footerModal">
                <div className="freteGratis">Faltam R$ xx,xx para você <span className="destaque">Ganhar Frete Grátis</span></div>
                <div className="finalizar">
                    <div className="valor">
                        <span className="valorTotal">Total: R$ {formatarNumero(valores.total)}</span>
                        {parcelasSpan}
                    </div>
                    <button className="botaoGrande">Finalizar Compra</button>
                </div>
            </div>
        </Modal>
        )
    }
}

const mapStateToProps = store => ({
    produtos: store.carrinhoState.produtos,
    quantidade: store.carrinhoState.quantidade
});

const mapDispatchToProps = dispatch => bindActionCreators({adicionarUnidade, removerUnidade, removerProduto, definirInicial}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps) (Carrinho);