import React from 'react';
import './BreadCrumbs.scss';

class BreadCrumbs extends React.Component{
    gerarRota(){
        let caminho = this.props.rota.split('/');
        caminho.pop();
        caminho.shift();
        let resultado = [];
        let inicio = 0;
        let tamanho = caminho.length;
        if (tamanho>4){
            inicio = tamanho-3;
            resultado.push(<span className="clicavel">...</span>);
        }
        for (let i = inicio;i < tamanho; i++){
            resultado.push(<span className="clicavel">{caminho[i]}</span>)
        }
        return resultado;
    }
    render(){
        let caminho = this.gerarRota();
        return (
            <div className="container">
                <div className="BreadCrumbs">
                    <span className="clicavel">Home</span>
                    {caminho}
                </div>
            </div>
        );
    }
}

export default BreadCrumbs;
