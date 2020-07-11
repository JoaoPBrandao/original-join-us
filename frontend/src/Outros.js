/*
Pratileira de produtos relacionados, calcula a quantidade de cards que devem ser exibidos a partir da largura atual da tela.
Os produtos são resgatados do backend.
 */
import React from 'react';
import {ReactComponent as Esquerda} from './images/esquerda.svg';
import {ReactComponent as Direita} from './images/direita.svg';
import './Outros.scss';
import Card from './Card.js';
import axios from 'axios';
import config from "./config";

class Outros extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            produtos: [],
            inicio: 0,
            fim: 0,
            tamanho: 0,
            exibidos: [],
            paginas: 0,
            paginaAtual: 1,
            carregando: true,
            quantidadeExibida: 4
        };
        this.atualizarQuantidade = this.atualizarQuantidade.bind(this);
    }

    /*
    Calcular a quantidade de produtos que sera exibida com a resolução atual essa função é chamada sempre que o
    tamanho da tela é alterado
    */
    atualizarQuantidade(){
        let largura = window.outerWidth;
        if (largura <= 400){
            this.setState({quantidadeExibida: 1});
        } else if (largura <= 950){
            this.setState({quantidadeExibida: 2});
        } else if (largura <= 1250){
            this.setState({quantidadeExibida: 3});
        } else {
            this.setState({quantidadeExibida: 4});
        }
        this.calcularPropriedades();
    }

    //Calcula os dados iniciais necessários para o correto funcionamento do carrossel
    calcularPropriedades(){
        let tamanho = this.state.produtos.length;
        let quantidade = this.state.quantidadeExibida;
        let fim = tamanho;
        let exibidos;
        let inicio = 0;
        let paginaAtual = 1;
        let paginas = Math.ceil(tamanho/quantidade);
        if (fim >= quantidade) {
            fim = quantidade;
        }
        exibidos = this.gerarLista(inicio, fim);
        this.setState({exibidos, tamanho, paginas, fim, inicio, paginaAtual});
    }

    componentWillUnmount() {
        window.removeEventListener("resize");
    }

    componentDidMount() {
        console.log(config.apiHost);
        this.atualizarQuantidade();
        window.addEventListener("resize", this.atualizarQuantidade);
        axios.get(config.apiHost+'/produto/todos')
            .then(resultado =>{
                let produtos = resultado.data;
                this.setState({produtos, carregando: false});
                this.calcularPropriedades();
            }).catch(erro =>{
                console.log(erro)
        });
    }

    //Gera a lista de Cards a serem exibidos atualmente
    gerarLista(inicio, fim){
        let resultado =[];
        for (let i = inicio; i < fim; i++){
            resultado.push(<Card className="card" id={i} imagem={this.state.produtos[i].imagens[0].medio} valor={this.state.produtos[i].precoAtual} cores={this.state.produtos[i].cores} key={i}/>)
        }
        return resultado;
    }
    moverCarrosselDireita(){
        let {inicio, fim, paginaAtual, tamanho, quantidadeExibida} = this.state;
        let exibidos;
        let resto;
        if(fim === tamanho){
            return
        }
        paginaAtual += 1;
        inicio += quantidadeExibida;
        fim += quantidadeExibida;
        resto = tamanho-fim;
        if (resto < 0){
            inicio += resto;
            fim += resto;
        }
        exibidos = this.gerarLista(inicio, fim);
        this.setState({exibidos, inicio, fim, paginaAtual});
    }
    moverCarrosselEsquerda(){
        let {inicio, fim, paginaAtual, quantidadeExibida} = this.state;
        let exibidos;
        if(inicio === 0){
            return
        }
        paginaAtual -= 1;
        if(fim % quantidadeExibida !== 0){
            inicio -= fim%quantidadeExibida;
            fim -= fim%quantidadeExibida
        }else{
            inicio -= quantidadeExibida;
            fim -= quantidadeExibida;
        }
        if (inicio < 0){
            inicio = 0;
            fim = quantidadeExibida;
        }
        exibidos = this.gerarLista(inicio, fim);
        this.setState({exibidos, inicio, fim, paginaAtual});
    }
    render(){
        if(this.state.carregando){
            return(<div className="Outros">Carregando</div> )
        }
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