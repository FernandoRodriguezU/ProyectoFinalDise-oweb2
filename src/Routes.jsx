import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Inicio from './assets/Inicio';
import Menu from './assets/Menu';
import RollosEspeciales from './assets/RollosEspeciales';
import RollosTradicionales from './assets/RollosTradicionales';
import Bebidas from './assets/Bebidas';
import SalsasExtras from './assets/SalsasExtras';
import Nigiri from './assets/Nigiri';
import Promociones from './assets/Promociones';
import Contactanos from './assets/Contactanos';
import PedirAqui from './assets/OrderPague';  // Importa el componente PedirAquí

const RoutesComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/rollos-especiales" element={<RollosEspeciales />} />
        <Route path="/rollos-tradicionales" element={<RollosTradicionales />} />
        <Route path="/bebidas" element={<Bebidas />} />
        <Route path="/salsas-extras" element={<SalsasExtras />} />
        <Route path="/nigiri" element={<Nigiri />} />
        <Route path="/promociones" element={<Promociones />} />
        <Route path="/contactenos" element={<Contactanos />} />
        <Route path="/pedir-aqui" element={<PedirAqui />} />  {/* Añadir la ruta para Pedir Aquí */}
      </Routes>
    </Router>
  );
};

export default RoutesComponent;
