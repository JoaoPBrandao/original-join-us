/*
Cards da pratileira de outros produtos, recebe as props nome, imagem, valor e cores(Array com os códigos hex das cores a serem
exibidas, este array poderá estar vazio para um produto sem opções de cores).
 */
import React from 'react';
import './Card.scss';
import {Link} from 'react-router-dom';

class Card extends React.Component{

    render(){
        let cores = [];
        let valor = this.props.valor;
        valor = valor.toFixed(2);
        valor = valor.replace('.',',');
        cores = this.props.cores.map((cor, i) =>{
           return (
               <div className="cor" style={{backgroundColor: cor.codigo}} key={i}></div>
           )
        });
        return (
            <div className="Card">
                <Link to={`/${this.props.id}`} onClick={() => window.scrollTo(0, 0)}>
                    <img src={this.props.imagem} alt={this.props.nome}/>
                    <div className="informacoes">
                        <span className="valor">R$ {valor}</span>
                        <span className="cores"> {cores} </span>
                    </div>
                </Link>
            </div>
        );
    }
}

export default Card;