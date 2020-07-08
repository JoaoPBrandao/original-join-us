import React from 'react';
import './Content.scss';
import Produto from './Produto';
import Outros from './Outros';
import {useParams} from 'react-router-dom';

function Content() {
    let {id} = useParams();
    return (
        <section className="container">
            <Produto key={id} id={id || 0}/>
            <Outros />
        </section>
    );
}

export default Content;