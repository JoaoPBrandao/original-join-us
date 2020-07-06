import React from 'react';
import './Card.scss';

class Card extends React.Component{

    constructor() {
        super();
        this.state = {
        };
    }
    render(){
        let cores = [];
        cores = this.props.cores.map(cor =>{
           return (
               <div className="cor" style={{backgroundColor: cor}}></div>
           )
        });
        return (
            <div className="Card">
                <img src={this.props.imagem} />
                <div className="informacoes">
                    <span className="valor">R$ {this.props.valor}</span>
                    <span className="cores"> {cores} </span>
                </div>
            </div>
        );
    }
}

export default Card;