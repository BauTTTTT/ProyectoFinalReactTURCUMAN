// import { BrowserRouter as Router } from 'react-router-dom';
import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './componentes/NavBar'
// import DetalleProducto from './componentes/detalleProducto'
import ItemListContainer from './componentes/Catalogo/ItemListContainer'
import ItemDetailContainer from './componentes/ItemDetailContainer'
import CarritoCompra from './componentes/Carrito'
// import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import ItemDetailContainer from './ItemDetailContainer';
// import ItemListContainer from './ItemListContainer';

import { createContext, useContext } from 'react';

const productos = [
  { id: 0, categoria: 1, nombre: 'Producto 1', precio: 1000, descripcion: 'Descripción del Producto 1', cantidad: 0 },
  { id: 1, categoria: 1, nombre: 'Producto 2', precio: 2000, descripcion: 'Descripción del Producto 2', cantidad: 0 },
  { id: 2, categoria: 2, nombre: 'Producto 3', precio: 2000, descripcion: 'Descripción del Producto 3', cantidad: 0 },
  { id: 3, categoria: 2, nombre: 'Producto 4', precio: 2000, descripcion: 'Descripción del Producto 4', cantidad: 0 },
  // Agrega más productos con detalles según sea necesario
];


export const ContextoProductos = createContext(null);
export const ContextoCarrito = createContext(null);

export function actualizarCarrito(id, cantidad) {

  productos[id].cantidad = cantidad
  console.log('kk')
  // SetCarrito(productos)
}

function App() {

  const [Carrito, SetCarrito] = useState(productos);

  return (
    <Router>
      <div className="App">

        <ContextoProductos.Provider value={productos}>
          <ContextoCarrito.Provider value={Carrito}>

            <NavBar />

            <Routes>
              {/* Ruta para la página de inicio */}
              <Route path="/" element={<ItemListContainer />} />

              {/* Ruta para la página de categoría */}
              <Route path="/category/:id" element={<ItemListContainer />} />

              {/* Ruta para la página de detalle de producto */}
              <Route path="/producto/:id" element={<ItemDetailContainer />} />


              {/* Carrito */}
              <Route path="/carrito" element={<CarritoCompra/>} />
            </Routes>


          </ContextoCarrito.Provider>
        </ContextoProductos.Provider>

      </div>
    </Router>
  );
}

export default App