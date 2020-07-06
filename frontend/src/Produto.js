import React from 'react';
import './Produto.scss';
import Rasteira from './images/rasteira.png'
import RasteiraVideo from './images/rasteiraVideo.png'
import RasteiraCarrossel from './images/rasteiraCarrossel.png'
import Play from './images/play.svg'
import Cima from './images/cima.svg'
import Baixo from './images/baixo.svg'

class Produto extends React.Component{
    constructor() {
        super();
        this.state = {
            produto: {
                nome: 'Rasteira Tira Dedo',
                codigo: 'RT 0568 | 03.07.0653',
                precoOriginal: '69,00',
                precoAtual: '55,20'
            }
        };
    }

    render(){
        return (
                <div className="Produto">
                    <div className="fotosVideo">
                        <div className="video">
                            <p>Vídeo</p>
                            <div className="videoButtonContainer">
                                <img src={Play} className="play" />
                                <img src={RasteiraVideo} className="videoTumb"/>
                            </div>
                        </div>
                        <div className="carrossel">
                            <img src={Cima} className="controleCarrossel" />
                            <div className="imagens">
                                <img src={RasteiraCarrossel} className="imagemCarrossel ativo"/>
                                <img src={RasteiraCarrossel} className="imagemCarrossel"/>
                                <img src={RasteiraCarrossel} className="imagemCarrossel"/>
                                <img src={RasteiraCarrossel} className="imagemCarrossel"/>
                            </div>
                            <img src={Baixo} className="controleCarrossel" />
                        </div>
                    </div>
                    <div className="imagem">
                        <img src={Rasteira} />
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
                            <span className="selecaoAtual"> (Fucsia)</span>
                            <div className="coresDisponiveis">
                                <div className="divCor ativo" style={{backgroundColor: '#A9095E'}}></div>
                                <div className="divCor" style={{backgroundColor: '#2A5A75'}}></div>
                                <div className="divCor" style={{backgroundColor: '#A14830'}}></div>
                                <div className="divCor" style={{backgroundColor: '#000000'}}></div>
                            </div>
                        </div>
                        <div className="tamanho">
                            Tamanho:
                            <span className="selecaoAtual"> (37)</span>
                            <span className="guia">Guia de medidas</span>
                            <div className="tamanhosDisponiveis">
                                <div className="divTamanho">33</div>
                                <div className="divTamanho">34</div>
                                <div className="divTamanho">35</div>
                                <div className="divTamanho">36</div>
                                <div className="divTamanho ativo">37</div>
                                <div className="divTamanho">38</div>
                                <div className="divTamanho">39</div>
                                <div className="divTamanho">40</div>
                                <div className="divTamanho">41</div>
                                <div className="divTamanho">42</div>
                            </div>
                        </div>
                        <button> Adicionar à Sacola</button>
                        <p className="descricaoProduto">
                            Rasteira em atanado soft com tira no dedo e fechamento de fivela. Possui sola sempre na cor do cabedal.
                        </p>
                    </div>
                </div>
        );
    }
}

export default Produto;