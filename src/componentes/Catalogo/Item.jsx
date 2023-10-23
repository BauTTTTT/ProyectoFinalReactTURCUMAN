import { Link } from 'react-router-dom';

const Item = ({producto}) => {
    return (
        <li key={producto.id}>
            <span>{producto.nombre}</span>
            <span>${producto.precio}</span>
            <Link to={`/producto/${producto.id}`}>Ver Detalles</Link>
        </li>
    );
}

export default Item;