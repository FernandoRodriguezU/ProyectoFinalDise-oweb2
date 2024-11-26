// src/assets/Footer.jsx

import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

// Estilos para el Footer
const FooterContainer = styled.footer`
  background-color: #c0392b; /* Color de fondo rojo */
  color: white; /* Color del texto */
  display: flex;
  justify-content: space-between; /* Espacio entre los elementos */
  padding: 20px; /* Espaciado interno */
  position: relative; /* Para el posicionamiento de los logos */
  bottom: 0; /* Fija el footer en la parte inferior */
  width: 100%; /* Asegura que ocupe todo el ancho */
  flex-wrap: wrap; /* Permite que los elementos se ajusten en varias líneas si es necesario */
`;

// Contenedor para las secciones del footer
const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Alinea los elementos al inicio */
  margin: 0 20px; /* Espaciado entre secciones */
`;

// Estilo para los logos principales
const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 40px; /* Aumenta el espacio superior para bajar los logos */
`;

const Logo = styled.img`
  width: 30px; /* Ajusta el tamaño del logo */
  height: auto;
  margin-right: 10px; /* Espacio entre los logos */
`;

const Title = styled.h4`
  margin-bottom: 10px; /* Espacio entre el título y los párrafos */
`;

const Paragraph = styled.p`
  margin: 5px 0; /* Espaciado entre los párrafos */
`;

// Estilos para los enlaces
const Button = styled(NavLink)`
  color: white;
  text-decoration: none;
  margin-right: 10px; /* Espacio entre botones */
  transition: color 0.3s;

  &:hover {
    color: #f0f0f0; /* Color al pasar el cursor */
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Section>
        <Title>Enlaces Rápidos</Title>
        <Button to="/">Inicio</Button>
        <Button to="/pedir-aqui">Pedir Aquí</Button>
        <Button to="/menu">Menú</Button>
      </Section>
      <Section>
        <Title>Horario de Atención</Title>
        <Paragraph>Atención de Lunes: 18:00pm - 23:00pm</Paragraph>
        <Paragraph>Miercoles - Domingo: 18:00pm - 23:00pm</Paragraph>
      </Section>
      <Section>
        <Title>Contáctanos</Title>
        <Paragraph>
          <Logo src="path/to/location-icon.png" alt="Ubicación" /> Calle Bolívar y O’Conor
        </Paragraph>
        <Paragraph>
          <Logo src="path/to/phone-icon.png" alt="Teléfono" /> 62392444
        </Paragraph>
        <Paragraph>
          <Logo src="path/to/email-icon.png" alt="Email" /> leonardo.inti.arenas@gmail.com
        </Paragraph>
      </Section>
      <LogoContainer>
        <Logo src="path/to/logo1.png" alt="Logo 1" />
        <Logo src="path/to/logo2.png" alt="Logo 2" />

      </LogoContainer>
    </FooterContainer>
  );
};

export default Footer;