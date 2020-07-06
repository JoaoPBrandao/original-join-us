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

    constructor() {
        super();
        this.state = {
            produtos: [
                {
                    imagem: Bolsa,
                    valor: "204,90",
                    cores: ['#A9095E', '#6B85C1', '#A14830', '#000000']
                },
                {
                    imagem: Chinelo,
                    valor: "204,90",
                    cores: ['#A9095E', '#6B85C1', '#A14830', '#000000']
                },
                {
                    imagem: Rasteira,
                    valor: "204,90",
                    cores: []
                },
                {
                    imagem: Carteira,
                    valor: "204,90",
                    cores: ['#6B85C1', '#A14830', '#000000']
                },
            ]
        };
    }
    render(){
        let cards = this.state.produtos.map(produto =>{
            return(
                <Card className="card" imagem={produto.imagem} valor={produto.valor} cores={produto.cores}/>
            )
        });
        return (
            <div className="Outros">
                <p className="titulo"> Quem viu, viu também</p>
                <div className="carrossel">
                    <div className="cards">
                        {cards}
                    </div>
                    <div className="controle">
                        <Esquerda className="botao"/>
                        <span className="paginas">1 de 3</span>
                        <Direita className="botao"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Outros;