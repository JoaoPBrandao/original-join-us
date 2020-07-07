/*
Cards da pratileira de outros produtos, recebe as props nome, imagem, valor e cores(Array com os códigos hex das cores a serem
exibidas, este array poderá estar vazio para um produto sem opções de cores).
 */
import React from 'react';
import './Card.scss';

class Card extends React.Component{

    render(){
        let cores = [];
        cores = this.props.cores.map((cor, i) =>{
           return (
               <div className="cor" style={{backgroundColor: cor}} key={i}></div>
           )
        });
        return (
            <div className="Card">
                <img src={this.props.imagem} alt={this.props.nome}/>
                <div className="informacoes">
                    <span className="valor">R$ {this.props.valor}</span>
                    <span className="cores"> {cores} </span>
                </div>
            </div>
        );
    }
}

export default Card;