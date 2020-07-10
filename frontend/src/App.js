import React from 'react';
import Header from './Header';
import Footer from './Footer';
import BreadCrumbs from './BreadCrumbs'
import Content from './Content';
import {Route, useRouteMatch, useLocation} from "react-router-dom";
import './App.scss';

function App() {
    let match = useRouteMatch();
    let location = useLocation();
    return (
    <div className="App">
        <Header></Header>
        <BreadCrumbs rota={location.pathname}/>
        <Route path={`${match.path}:id?`}>
            <Content/>
        </Route>
        <Footer></Footer>
    </div>
  );
}

export default App;
