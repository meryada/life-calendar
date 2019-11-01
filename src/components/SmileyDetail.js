import React from 'react';
import { Link } from 'react-router-dom';

const SmileyDetail = props => {
    const { smileys } = props
    return (
        <div>
            <h1>soy detalle del estado</h1>
            <p>{smileys.date}</p>
            <p>{smileys.status}</p>
            <p>{smileys.message}</p>
            <Link to='/'>
                <input type='button' value='Volver al calendario' />
            </Link>
        </div>
    )
}

export default SmileyDetail;