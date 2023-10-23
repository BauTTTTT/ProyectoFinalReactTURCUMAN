import { useParams } from 'react-router-dom';

import {ContextoProductos, actualizarCarrito} from '../App'

import { useContext, useState } from 'react';


const ItemDetailContainer = ({ match }) => {
    let { id } = useParams();
    // Suponiendo que tienes un conjunto de productos con detalles
    const productos = useContext(ContextoProductos);
    const [numero, setNumero] = useState(null);
    const changeHandler = (e) => {
        setNumero(parseInt(e.target.value));
        console.log(e.target.value)
    }

    const productoId = parseInt(id);
    const producto = productos.find(p => p.id === productoId);

    if (!producto) {
        return <div>Producto no encontrado</div>;
    }

    return (
        <div className="detalle-producto">
            <h2>{producto.nombre}</h2>
            <p>{producto.descripcion}</p>

            {/* <button onClick={actualizarCarrito(producto.id, producto.cantidad + 1)}>
                agregar
            </button> */}
            <button onClick={() => actualizarCarrito(producto.id, producto.cantidad + numero)}>
                agregar
            </button>
            <input type="number" name="" id="" onChange={changeHandler}/>
            {/* Agrega más detalles según sea necesario */}
        </div>
    );
}

export default ItemDetailContainer;