import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';
import './App.scss';

function App() {
  return (
    <div className="App">
        <Header></Header>
        <Content></Content>
        <Footer></Footer>
    </div>
  );
}

export default App;
