import React from 'react'
import { Noticias } from './Noticias';
import PropTypes from 'prop-types';

export const ListadoNoticias = ({ noticias }) => (
    <div className="row">
        { noticias.map( noticia => (
            <Noticias 
                key={ noticia.url }
                noticia={ noticia }
            />
        )) }
    </div>
);

ListadoNoticias.propTypes = {
    noticias: PropTypes.array.isRequired
}