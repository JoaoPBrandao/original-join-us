import React from 'react';
import './Content.scss';
import Produto from './Produto';
import Outros from './Outros';

function Content() {
    return (
        <section className="container">
            <Produto />
            <Outros />
        </section>
    );
}

export default Content;