import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';
import {Route, useRouteMatch} from "react-router-dom";
import './App.scss';

function App() {
    let match = useRouteMatch();
    return (
    <div className="App">
        <Header></Header>
        <Route path={`${match.path}:id?`}>
            <Content/>
        </Route>
        <Footer></Footer>
    </div>
  );
}

export default App;
