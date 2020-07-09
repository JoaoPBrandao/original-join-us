/*
Componente para eibição de um produto. Ao ser montado busca no servidor backend os dados do produto a ser exibido.
Verifica a existência de desconto, cores e tamanhos para para realizar a renderização dessas partes.
 */

import React from 'react';
import './Produto.scss';
import Play from './images/play.svg'
import Cima from './images/cima.svg'
import Baixo from './images/baixo.svg'
import Modal from 'react-modal'
import {ReactComponent as Fechar} from './images/X.svg';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { adicionarProduto } from './actions';
import { formatarNumero } from "./scripts";


class Produto extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            produto: {
                nome: '',
                codigo: '',
                precoOriginal: '',
                precoAtual: '',
                cores:[],
                tamanhos:[],
                imagens: [],
                parcelas: 0,
                desconto: false
            },
            corSelecionada: 0,
            tamanhoSelecionado: 0,
            imagemSelecionada: 0,
            mostrarModal: false,
            carregando: true,
            erro: false
        };
    }

    selecionarCor(cor){
        this.setState({corSelecionada: cor});
    }

    selecionarTamanho(tamanho){
        this.setState({tamanhoSelecionado: tamanho});
    }

    selecionarImagem(imagem){
        this.setState({imagemSelecionada: imagem});
    }

    abrirModal () {
        this.setState({ mostrarModal: true });
    }

    fecharModal () {
        this.setState({ mostrarModal: false });
    }

    gerarCores(){
        return this.state.produto.cores.map((cor, i) =>{
            return (
                <div
                    className={`divCor clicavel ${(this.state.corSelecionada === i) ? 'ativo' : ''}`}
                    style={{backgroundColor: cor.codigo}}
                    onClick={() => this.selecionarCor(i)}
                    key={i}
                />
            )
        });
    }

    gerarTamanhos(){
        return this.state.produto.tamanhos.map((tamanho, i) =>{
            return (
                <div
                    className={`divTamanho clicavel ${(this.state.tamanhoSelecionado === i) ? 'ativo' : ''}`}
                    onClick={() => this.selecionarTamanho(i)}
                    key={i}
                >{tamanho}</div>
            )
        });
    }

    gerarCarrossel(){
        return this.state.produto.imagens.map((imagem, i) =>{
            return (
                <img
                    src={imagem.pequeno}
                    className={`imagemCarrossel clicavel ${(this.state.imagemSelecionada === i) ? 'ativo' : ''}`}
                    onClick={() => this.selecionarImagem(i)}
                    key={i}
                 />
            )
        });
    }

    gerarSeletor(){
        return this.state.produto.imagens.map((imagem, i) =>{
            return (
                <div
                    className={`botaoSeletor ${(this.state.imagemSelecionada === i) ? 'ativo' : ''}`}
                    onClick={() => this.selecionarImagem(i)}
                    key={i}
                />
            )
        });
    }

    controleCarrossel(movimento){
        let selecionado = this.state.imagemSelecionada;
        selecionado += movimento;
        if (selecionado >= this.state.produto.imagens.length){
            selecionado = 0;
        }
        if (selecionado < 0){
            selecionado = this.state.produto.imagens.length-1;
        }
        this.selecionarImagem(selecionado)
    }

    adicionar(){
        let produto = {
            foto : this.state.produto.imagens[0].pequeno,
            nome: this.state.produto.nome,
            valor: this.state.produto.precoAtual,
            quantidade: 1,
            id: this.props.id
        };
        this.props.adicionarProduto(produto);
        this.abrirModal();
    }

    componentDidMount() {
        axios.get(`http://localhost:3300/produto/${this.props.id}`)
            .then(resposta => {
                let produto = resposta.data;
                produto.desconto = produto.precoAtual < produto.precoOriginal;
                produto.parcelas = (produto.precoAtual/6);
                this.setState({produto, carregando: false})
            }).catch(err => {
                this.setState({erro: true, carregando: false});
        })
    }


    render(){
        // Impede o carregamento do componente enquanto espera os dados do servidor
        if(this.state.carregando){
            return (
                <div className="Produto">
                    <div className="mensagem">Carregando...</div>
                </div>
            )
        }
        // Impede o carregamento do componente caso o servidor retorne algum erro ao buscar o produto
        if(this.state.erro){
            return (
                <div className="Produto">
                    <div className="mensagem">Produto não encontrado :(</div>
                </div>
            )
        }
        let cores;
        let tamanhos;
        let carrossel = this.gerarCarrossel();
        let seletor = this.gerarSeletor();

        let desconto;
        //Verifica a existencia de desconto para gerar a div correspondente
        if (this.state.produto.desconto) {
            desconto = <span className="precoDesconto">R$ {formatarNumero(this.state.produto.precoOriginal)}</span>
        }
        //Verifica a existencia de opções de cores para gerar a div correspondente
        if (this.state.produto.cores.length>0){
            let divCor = this.gerarCores();
            cores = (
                <div className="cor">
                    Cor:
                    <span className="selecaoAtual"> ({this.state.produto.cores[this.state.corSelecionada].nome})</span>
                    <div className="coresDisponiveis">
                        {divCor}
                    </div>
                </div>
            )
        }
        //Verifica a existencia de opções de tamanho para gerar a div correspondente
        if (this.state.produto.tamanhos.length>0){
            let divTamanhos = this.gerarTamanhos();
            tamanhos = (
                <div className="tamanho">
                    Tamanho:
                    <span className="selecaoAtual"> ({this.state.produto.tamanhos[this.state.tamanhoSelecionado]})</span>
                    <span className="guia clicavel">Guia de medidas</span>
                    <div className="tamanhosDisponiveis">
                        {divTamanhos}
                    </div>
                </div>
            )
        }

        return (
            <div className="Produto">
                <div className="carrosselContainer">
                    <div className="fotosVideo">
                        <div className="video clicavel">
                            <p>Vídeo</p>
                            <div className="videoButtonContainer">
                                <img src={Play} className="play" />
                                <img src={this.state.produto.videoThumb} className="videoTumb"/>
                            </div>
                        </div>
                        <div className="carrossel">
                            <img src={Cima} className="controleCarrossel clicavel" onClick={() => this.controleCarrossel(-1)}/>
                            <div className="imagens">
                                {carrossel}
                            </div>
                            <img src={Baixo} className="controleCarrossel clicavel" onClick={() => this.controleCarrossel(1)}/>
                        </div>
                    </div>
                    <div className="imagem">
                        <div className="titulo">{this.state.produto.nome}</div>
                        <div className="codigo">{this.state.produto.codigo}</div>
                        <img src={this.state.produto.imagens[this.state.imagemSelecionada].grande} />
                        <div className="seletor">

                            <img src={Play} className="play" />
                            {seletor}
                        </div>
                    </div>
                </div>
                <div className="descricao">
                    <span className="nome">{this.state.produto.nome}</span>
                    <span className="codigo">{this.state.produto.codigo}</span>
                    <div className="preco">
                        {desconto}
                        <span className="precoAtual">R$ {formatarNumero(this.state.produto.precoAtual)}</span>
                        <span className="parcelas"> Ou 6x de R$ {formatarNumero(this.state.produto.parcelas)}</span>
                    </div>
                    {cores}
                    {tamanhos}
                    <button className="botaoGrande" onClick={() => this.adicionar()}> Adicionar à Sacola</button>
                    <span className="tituloDescricao">Descrição</span>
                    <p className="descricaoProduto">
                        {this.state.produto.descricao}
                    </p>
                </div>
                <Modal
                    isOpen={this.state.mostrarModal}
                    contentLabel="Produto adicionado ao carrinho"
                    className="caixaModal"
                    shouldCloseOnOverlayClick={true}
                    onRequestClose={() => this.fecharModal()}
                    overlayClassName="overlay"
                    appElement={document.getElementById('root')}
                >
                    <div className="controle">
                        <Fechar className="fechar" onClick={() => this.fecharModal()}/>
                    </div>
                    <div className="conteudo">
                        <img src={this.state.produto.imagens[0].grande} />
                        <p className="titulo">Produto Adicionado Com Sucesso!</p>
                        <button className="botaoGrande" onClick={() => this.fecharModal()}>Finalizar Compra</button>
                        <p className="continuar" onClick={() => this.fecharModal()}>Continuar Comprando</p>
                    </div>
                </Modal>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({adicionarProduto}, dispatch);

export default connect(null, mapDispatchToProps) (Produto);