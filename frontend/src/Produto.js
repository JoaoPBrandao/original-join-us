import React from 'react';
import './Produto.scss';
import Rasteira from './images/rasteira.png'
import Chinelo from './images/chinelo.png'
import Bolsa from './images/bolsa.png'
import Carteira from './images/carteira.png'
import RasteiraVideo from './images/rasteiraVideo.png'
import RasteiraCarrossel from './images/rasteiraCarrossel.png'
import ChineloCarrossel from './images/chineloCarrossel.png'
import BolsaCarrossel from './images/bolsaCarrossel.png'
import CarteiraCarrossel from './images/carteiraCarrossel.png'
import Play from './images/play.svg'
import Cima from './images/cima.svg'
import Baixo from './images/baixo.svg'
import Modal from 'react-modal'
import {ReactComponent as Fechar} from './images/X.svg';

class Produto extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            produto: {
                nome: 'Rasteira Tira Dedo',
                codigo: 'RT 0568 | 03.07.0653',
                precoOriginal: '69,00',
                precoAtual: '55,20',
                cores:[
                    {codigo: '#A9095E', nome: 'Fucsia'},
                    {codigo: '#2A5A75', nome: 'Azul'},
                    {codigo: '#A14830', nome: 'Marrom'},
                    {codigo: '#000000', nome: 'Preto'}
                    ],
                tamanhos:[33, 34, 35, 36, 37, 38, 39, 40, 41, 42],
                imagens: [
                    {
                        miniatura: RasteiraCarrossel,
                        exibicao: Rasteira
                    },
                    {
                        miniatura: ChineloCarrossel,
                        exibicao: Chinelo
                    },
                    {
                        miniatura: BolsaCarrossel,
                        exibicao: Bolsa
                    },
                    {
                        miniatura: CarteiraCarrossel,
                        exibicao: Carteira
                    },
                ]
            },
            corSelecionada: 0,
            tamanhoSelecionado: 0,
            imagemSelecionada: 0,
            mostrarModal: false
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
                    src={imagem.miniatura}
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

    render(){
        let cores = this.gerarCores();
        let tamanhos = this.gerarTamanhos();
        let carrossel = this.gerarCarrossel();
        return (
                <div className="Produto">
                    <div className="carrosselContainer">
                        <div className="fotosVideo">
                            <div className="video clicavel">
                                <p>Vídeo</p>
                                <div className="videoButtonContainer">
                                    <img src={Play} className="play" />
                                    <img src={RasteiraVideo} className="videoTumb"/>
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
                            <img src={this.state.produto.imagens[this.state.imagemSelecionada].exibicao} />
                        </div>
                    </div>
                    <div className="descricao">
                        <span className="nome">{this.state.produto.nome}</span>
                        <span className="codigo">{this.state.produto.codigo}</span>
                        <div className="preco">
                            <span className="precoDesconto">R$ {this.state.produto.precoOriginal}</span>
                            <span className="precoAtual">R$ {this.state.produto.precoAtual}</span>
                            <span className="parcelas"> Ou 6x de R$ 9,20</span>
                        </div>
                        <div className="cor">
                            Cor:
                            <span className="selecaoAtual"> ({this.state.produto.cores[this.state.corSelecionada].nome})</span>
                            <div className="coresDisponiveis">
                                {cores}
                            </div>
                        </div>
                        <div className="tamanho">
                            Tamanho:
                            <span className="selecaoAtual"> ({this.state.produto.tamanhos[this.state.tamanhoSelecionado]})</span>
                            <span className="guia clicavel">Guia de medidas</span>
                            <div className="tamanhosDisponiveis">
                                {tamanhos}
                            </div>
                        </div>
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