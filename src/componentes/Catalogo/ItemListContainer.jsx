// import React from 'react';
import Item from './Item';

import {ContextoProductos} from '../../App'

import { useContext } from 'react';

import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    let { id } = useParams();

    const productos = useContext(ContextoProductos);

    const items = productos.filter((producto) => producto.categoria == id)


    return (
        <div className='ItemListContainer'>
            <h2>Catálogo de Productos</h2>
            <ul>
                {items.map(producto => (
                    <Item producto={producto}/>
                ))}
            </ul>
        </div>
    );
}

export default ItemListContainer;
