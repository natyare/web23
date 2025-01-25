import React from "react";
import './App.css'
import Logo from './Img/Logos/cibertech.jpg'
import { Routes, Route } from 'react-router-dom';
import Carrusel from "./Componentes/Carrusel";
import Menu from "./Pestañas/Menu";
import Inicio from "./Pages/Inicio";
import Mainboard from "./Pestañas/Mainboard";
import Procesadores from "./Pestañas/Procesadores";
import MemoriasRam from "./Pestañas/MemoriasRam";
import Almacenamiento from "./Pestañas/Almacenamiento"
import Tarjetasgraficas from "./Pestañas/Tarjetasgraficas";
import FuentesPoder from "./Pestañas/FuentesPoder";
import Cases from "./Pestañas/Cases";
import Cooler from "./Pestañas/Cooler"
import Refrigeracion from "./Pestañas/Refrigeracion";
import Consolas from "./Pestañas/Consolas";
import Pie from "./Componentes/Pie";

function App() {

  return (

    <div className="App">

      <div className="titulo-contenedor">
        <img src={Logo} />
      </div>
      <div>
      <Carrusel/>

      <Routes>

        <Route className='navBar' path="/" element={<Inicio />}>

          <Route path="/" element={<Menu />} />

          <Route path="mainboard" element={<Mainboard />} />

          <Route path="procesadores" element={<Procesadores/>} />

          <Route path="memoriasram" element={<MemoriasRam />} />

          <Route path="almacenamiento" element={<Almacenamiento />} />

          <Route path="tarjetasgraficas" element={<Tarjetasgraficas />} />

          <Route path="fuentespoder" element={<FuentesPoder />} />
          
          <Route path="cases" element={<Cases />} />

          <Route path="cooler" element={<Cooler />} />

          <Route path="refrigeracion" element={<Refrigeracion />} />

          <Route path="consolas" element={<Consolas />} />


        </Route>

      </Routes>
      </div>

      <Pie/>

    </div>
  );
}

export default App;
