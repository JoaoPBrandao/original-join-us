import React from 'react';
import './Footer.scss';
import facebook from "./images/facebook.svg";
import instagram from "./images/instagram.svg";
import pinterest from "./images/pinterest.svg";
import vtex from "./images/vtex.svg";
import ebit from "./images/ebit.svg";
import logo from "./images/logoBranco.svg";
import {ReactComponent as Mais} from "./images/mais.svg";


class Footer extends React.Component{
    constructor() {
        super();
        this.state = {
            nomeAtivo: false,
            emailAtivo: false,
            institucionalAberto: false,
            informacoesAberto: false,
            conhecaAberto: false,
        };
    };

    handleFocus(campo, e) {
       if(e.type === 'focus'){
           this.setState(state => ({
               [campo]: true
           }));
       }else if(e.target.value === ''){
           this.setState(state => ({
               [campo]: false
           }));
       }
    };
    alternarLista(campo){
        this.setState({[campo]: !this.state[campo]})
    }


    render(){
        return (
            <footer className="footerContainer">
                <div className="Footer">
                    <div className="mainFooterSection">
                        <div className="container">
                            <div className="mainFooter">
                                <div className="news">
                                    <span className="titulo">Assine Nossa News</span>
                                    <label className="labelNome">
                                        <span className={`texto ${this.state.nomeAtivo ? 'ativo' : ''}`}>Nome</span>
                                        <input
                                            onFocus={(e) => this.handleFocus('nomeAtivo',e)}
                                            onBlur={(e) => this.handleFocus('nomeAtivo',e)}
                                        />
                                    </label>
                                    <label  className="labelEmail">
                                        <span className={`texto ${this.state.emailAtivo ? 'ativo' : ''}`}>Email</span>
                                        <input
                                            onFocus={(e) => this.handleFocus('emailAtivo',e)}
                                            onBlur={(e) => this.handleFocus('emailAtivo',e)}
                                        />
                                    </label>
                                    <button className="botaoPequeno">Enviar</button>
                                </div>
                                <div className="icones">
                                    <div className="redesSociais">
                                        <img src={facebook} alt="facebook" className="logoRede clicavel"/>
                                        <img src={instagram} alt="instagram" className="logoRede clicavel"/>
                                        <img src={pinterest} alt="pinterest" className="logoRede clicavel"/>
                                    </div>
                                    <div className="premios">
                                        <img src={vtex} alt="certificado PCI" className="logoPremio"/>
                                        <img src={ebit} alt="ebit ouro 29/11/2016" className="logoPremio"/>
                                    </div>
                                </div>
                                <div className="links">
                                    <div className="footerNav">
                                        <div className="titulo" onClick={() => this.alternarLista('institucionalAberto')}>
                                            Institucional
                                            <Mais className="botaoAbrir"/>
                                        </div>
                                        <ul className={`${this.state.institucionalAberto ? 'aberto' : ''}`}>
                                            <li className="clicavel">A Marca</li>
                                            <li className="clicavel">Lojas</li>
                                            <li className="clicavel">Contato</li>
                                        </ul>
                                    </div>
                                    <div className="footerNav">
                                        <div className="titulo" onClick={() => this.alternarLista('informacoesAberto')}>
                                            Informações
                                            <Mais className="botaoAbrir"/>
                                        </div>
                                        <ul className={`${this.state.informacoesAberto ? 'aberto' : ''}`}>
                                            <li className="clicavel">Formas de Pagamento</li>
                                            <li className="clicavel">Trocas e Devoluções</li>
                                            <li className="clicavel">Cuidados Com o Produto</li>
                                        </ul>
                                    </div>
                                    <div className="footerNav">
                                        <div className="titulo" onClick={() => this.alternarLista('conhecaAberto')}>
                                            Conheça
                                            <Mais className="botaoAbrir"/>
                                        </div>
                                        <ul className={`${this.state.conhecaAberto ? 'aberto' : ''}`}>
                                            <li className="clicavel">Franquias e Multimarcas</li>
                                            <li className="clicavel">Trabalhe com Gente</li>
                                            <li className="clicavel">Procon-RJ</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rodapeSection">
                        <div className="container">
                            <div className="rodape">
                                <p>Via Mia | V. Milano Centro Comercio de Bolsas Eireli - EPP.Av.das Américas, 500 - bloco 20, loja 126 - Barra da Tijuca - Rio de Janeiro - RJ - CEP: 22640-100 CNPJ: 05.292.288/0002-10 - I.E: 86.732.548 - E-mail: ecommerce@viamia.com.br</p>
                                <div className="logoContainer">
                                    <img src={logo} alt="Logo Original" className="logo"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    };
}

export default Footer;