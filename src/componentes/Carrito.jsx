import { Link } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import {ContextoProductos, actualizarCarrito} from '../App'

const CarritoCompra = () => {
        
        const productos = useContext(ContextoProductos)
        


        const carrito = productos.filter((producto) => producto.cantidad > 0)

    return (
        <div className='carrito'>
            <h2>carrito</h2>
            <ul>
                {carrito.map(producto => (
                    <li key={producto.id}>
                        <span>{producto.nombre}</span>
                        <span>${producto.precio}</span>
                        <span>${producto.cantidad}</span>
                        <Link to={`/producto/${producto.id}`}>Ver Detalles</Link>
                        <button onClick={() => actualizarCarrito(producto.id, 0)}>
                eliminar
            </button>
                    </li>
                ))
                }
            </ul>
        </div>
    );
}

export default CarritoCompra;
