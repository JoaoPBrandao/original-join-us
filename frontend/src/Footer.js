import React from 'react';
import './Footer.scss';
import facebook from "./images/facebook.svg";
import instagram from "./images/instagram.svg";
import pinterest from "./images/pinterest.svg";
import vtex from "./images/vtex.svg";
import ebit from "./images/ebit.svg";
import logo from "./images/logoBranco.svg";



class Footer extends React.Component{
    constructor() {
        super();
        this.state = {
            classNome: 'texto',
            classEmail: 'texto'
        };
    }

    handleFocus(campo, e) {
       if(e.type === 'focus'){
           this.setState(state => ({
               [campo]: 'texto ativo'
           }));
       }else if(e.target.value == ''){
           this.setState(state => ({
               [campo]: 'texto'
           }));
       }
    };

    render(){
        return (
            <footer className="footerContainer">
                <div className="container">
                    <div className="news">
                    <span className="titulo">Assine Nossa News</span>
                    <label>
                        <span className={this.state.classNome}>Nome</span>
                        <input
                            onFocus={(e) => this.handleFocus('classNome',e)}
                            onBlur={(e) => this.handleFocus('classNome',e)}
                        />
                    </label>
                    <label>
                        <span className={this.state.classEmail}>Email</span>
                        <input
                            onFocus={(e) => this.handleFocus('classEmail',e)}
                            onBlur={(e) => this.handleFocus('classEmail',e)}
                        />
                    </label>
                    <button className="botaoPequeno">Enviar</button>
                </div>
                </div>
                <div className="Footer">
                    <div className="mainFooterSection">
                        <div className="container">
                            <div className="redesSociais">
                                <img src={facebook} alt="facebook" className="logoRede clicavel"/>
                                <img src={instagram} alt="instagram" className="logoRede clicavel"/>
                                <img src={pinterest} alt="pinterest" className="logoRede clicavel"/>
                            </div>
                            <div className="mainFooter">
                                <div className="premios">
                                    <img src={vtex} alt="certificado PCI" className="logoPremio"/>
                                    <img src={ebit} alt="ebit ouro 29/11/2016" className="logoPremio"/>
                                </div>
                                <div className="links">
                                    <div className="footerNav">
                                        <div className="titulo">Institucional</div>
                                        <ul className="footerList">
                                            <li className="clicavel">A Marca</li>
                                            <li className="clicavel">Lojas</li>
                                            <li className="clicavel">Contato</li>
                                        </ul>
                                    </div>
                                    <div className="footerNav">
                                        <div className="titulo">Informações</div>
                                        <ul className="footerList">
                                            <li className="clicavel">Formas de Pagamento</li>
                                            <li className="clicavel">Trocas e Devoluções</li>
                                            <li className="clicavel">Cuidados Com o Produto</li>
                                        </ul>
                                    </div>
                                    <div className="footerNav">
                                        <div className="titulo">Conheça</div>
                                        <ul>
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
                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie massa in nunc condimentum, vel placerat lacus pulvinar. Suspendisse vel nisl eu tortor feugiat tempus vel in tortor. Nunc semper leo nec tellus gravida faucibus.</span>
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