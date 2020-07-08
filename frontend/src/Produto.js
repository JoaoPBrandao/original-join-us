/*
Componente para eibição de um produto. Ao ser montado busca no servidor backend os dados do produto a ser exibido.
Verifica a existência de desconto, cores e tamanhos para para realizar a renderização dessas partes.
 */

import React from 'react';
import './Produto.scss';
import RasteiraVideo from './images/rasteiraVideo.png'
import Play from './images/play.svg'
import Cima from './images/cima.svg'
import Baixo from './images/baixo.svg'
import Modal from 'react-modal'
import {ReactComponent as Fechar} from './images/X.svg';
import axios from 'axios';

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
        document.body.style.overflow = 'hidden';
        this.setState({ mostrarModal: true });
    }

    fecharModal () {
        document.body.style.overflow = 'unset';
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

    componentDidMount() {
        axios.get('http://localhost:3300/produto/0')
            .then(resposta => {
                let produto = resposta.data;
                produto.desconto = produto.precoAtual < produto.precoOriginal;
                produto.parcelas = (produto.precoAtual/6);
                produto.precoAtual = produto.precoAtual.toFixed(2);
                produto.precoOriginal = produto.precoOriginal.toFixed(2);
                produto.parcelas = produto.parcelas.toFixed(2);
                produto.precoAtual = produto.precoAtual.replace('.',',');
                produto.precoOriginal = produto.precoOriginal.replace('.',',');
                produto.parcelas = produto.parcelas.replace('.',',');
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
        let desconto;
        //Verifica a existencia de desconto para gerar a div correspondente
        if (this.state.produto.desconto) {
            desconto = <span className="precoDesconto">R$ {this.state.produto.precoOriginal}</span>
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
                        <img src={this.state.produto.imagens[this.state.imagemSelecionada].grande} />
                    </div>
                </div>
                <div className="descricao">
                    <span className="nome">{this.state.produto.nome}</span>
                    <span className="codigo">{this.state.produto.codigo}</span>
                    <div className="preco">
                        {desconto}
                        <span className="precoAtual">R$ {this.state.produto.precoAtual}</span>
                        <span className="parcelas"> Ou 6x de R$ {this.state.produto.parcelas}</span>
                    </div>
                    {cores}
                    {tamanhos}
                    <button className="botaoGrande" onClick={() => this.abrirModal()}> Adicionar à Sacola</button>
                    <p className="descricaoProduto">
                        Rasteira em atanado soft com tira no dedo e fechamento de fivela. Possui sola sempre na cor do cabedal.
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
                        <img src={this.state.produto.imagens[0].exibicao} />
                        <p className="titulo">Produto Adicionado Com Sucesso!</p>
                        <button className="botaoGrande" onClick={() => this.fecharModal()}>Finalizar Compra</button>
                        <p className="continuar" onClick={() => this.fecharModal()}>Continuar Comprando</p>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default Produto;