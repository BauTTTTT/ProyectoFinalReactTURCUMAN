import { useContext } from 'react';
import { Link } from 'react-router-dom';

import {ContextoProductos} from '../App'




const Navbar = () => {
    const carrito = useContext(ContextoProductos);
    console.log(carrito)
    let cantidad = 0
    for (let index = 0; index < carrito.length; index++) {
        cantidad += carrito[index].cantidad        
    }

    return (
        <nav>
            <div className="logo">
                <Link to="/">Mi Tienda</Link>
            </div>
            <div className="cartagorias">
                <Link to="/category/1">categoria 1</Link>
                <Link to="/category/2">categoria 2</Link>
            </div>
            <div className='cart'>
                <Link to="/Carrito"> carrito({cantidad})</Link>
            </div>
        </nav>
    );
    
}

export default Navbar;
