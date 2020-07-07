/*
Pratileira de produtos relacionados, Cards da pratileira foram transformados em um componente próprio para facilitar a
legibilidade do código.
 */
import React from 'react';
import {ReactComponent as Esquerda} from './images/esquerda.svg';
import {ReactComponent as Direita} from './images/direita.svg';
import './Outros.scss';
import Card from './Card.js';
import Bolsa from './images/bolsa.png';
import Rasteira from './images/rasteiraOutros.png';
import Chinelo from './images/chinelo.png';
import Carteira from './images/carteira.png';

class Outros extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            produtos: [
                {
                    nome: 'Bolsa',
                    imagem: Bolsa,
                    valor: "1",
                    cores: ['#A9095E', '#6B85C1', '#A14830', '#000000']
                },
                {
                    nome: 'Chinelo',
                    imagem: Chinelo,
                    valor: "2",
                    cores: ['#A9095E', '#6B85C1', '#A14830', '#000000']
                },
                {
                    nome: 'Rasteira',
                    imagem: Rasteira,
                    valor: "3",
                    cores: []
                },
                {
                    nome: 'Carteira',
                    imagem: Carteira,
                    valor: "4",
                    cores: ['#6B85C1', '#A14830', '#000000']
                },
                {
                    nome: 'Chinelo',
                    imagem: Chinelo,
                    valor: "5",
                    cores: ['#A9095E', '#6B85C1', '#A14830', '#000000']
                },
                {
                    nome: 'Rasteira',
                    imagem: Rasteira,
                    valor: "6",
                    cores: []
                },
                {
                    nome: 'Carteira',
                    imagem: Carteira,
                    valor: "7",
                    cores: ['#6B85C1', '#A14830', '#000000']
                },
                {
                    nome: 'Bolsa',
                    imagem: Bolsa,
                    valor: "8",
                    cores: ['#A9095E', '#6B85C1', '#A14830', '#000000']
                },
                {
                    nome: 'Carteira',
                    imagem: Carteira,
                    valor: "9",
                    cores: ['#6B85C1', '#A14830', '#000000']
                }
            ],
            inicio: 0,
            fim: 0,
            tamanho: 0,
            exibidos: [],
            paginas: 0,
            paginaAtual: 1
        };
    }
    componentDidMount() {
        let tamanho = this.state.produtos.length;
        let fim = tamanho;
        let exibidos;
        let paginas = Math.ceil(tamanho/4);
        if (fim >= 4) {
            fim = 4;
        }
        exibidos = this.gerarLista(0, fim);
        this.setState({exibidos, tamanho, paginas, fim});
    }
    gerarLista(inicio, fim){
        let resultado =[];
        for (let i = inicio; i < fim; i++){
            resultado.push(<Card className="card" imagem={this.state.produtos[i].imagem} valor={this.state.produtos[i].valor} cores={this.state.produtos[i].cores} key={i}/>)
        }
        return resultado;
    }
    moverCarrosselDireita(){
        let {inicio, fim, paginaAtual, tamanho} = this.state;
        let exibidos;
        let resto;
        if(fim === tamanho){
            return
        }
        paginaAtual += 1;
        inicio += 4;
        fim += 4;
        resto = tamanho-fim;
        if (resto < 0){
            inicio += resto;
            fim += resto;
        }
        exibidos = this.gerarLista(inicio, fim);
        this.setState({exibidos, inicio, fim, paginaAtual});
    }
    moverCarrosselEsquerda(){
        let {inicio, fim, paginaAtual} = this.state;
        let exibidos;
        if(inicio === 0){
            return
        }
        paginaAtual -= 1;
        if(fim % 4 !== 0){
            inicio -= fim%4;
            fim -= fim%4
        }else{
            inicio -= 4;
            fim -= 4;
        }
        if (inicio < 0){
            inicio = 0;
            fim = 4;
        }
        exibidos = this.gerarLista(inicio, fim);
        this.setState({exibidos, inicio, fim, paginaAtual});
    }
    render(){
        return (
            <div className="Outros">
                <p className="titulo"> Quem viu, viu também</p>
                <div className="carrossel">
                    <div className="cards">
                        {this.state.exibidos}
                    </div>
                    <div className="controle">
                        <Esquerda className="botao" onClick={() => this.moverCarrosselEsquerda()}/>
                        <span className="paginas">{this.state.paginaAtual} de {this.state.paginas}</span>
                        <Direita className="botao" onClick={() => this.moverCarrosselDireita()}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Outros;