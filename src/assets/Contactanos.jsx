import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';
import fondocon from '../assets/fondocon.jpg'; // Asegúrate de tener la ruta correcta de tu imagen
import { FaFacebook, FaInstagram, FaTwitter, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Container = styled.div`
  background-color: #000;
  color: white;
  font-family: 'Arial', sans-serif;
`;

const Nav = styled.nav`
  background-color: #000;
  padding: 15px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
`;

const Logo = styled.img`
  height: 50px;
`;

const MenuList = styled.div`
  display: flex;
  gap: 20px;

  a {
    color: white;
    text-decoration: none;
    font-size: 14px;
    &:hover {
      color: #9b8b4c;
    }
  }
`;

const CartSection = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  
  span {
    color: #9b8b4c;
  }
`;



const ContactSection = styled.section`
  padding: 120px 20px 120px; /* Ajusté el padding superior e inferior para centrar más el contenido */
  max-width: 1200px;
  margin: 0 auto;
  background-image: url(${fondocon}); /* Fondo de la imagen */
  background-size: cover;
  background-position: center;
  position: relative;
  text-align: center;
  color: white;
  border-radius: 20px; /* Bordes redondeados */
  
  /* Centrar todo el contenido dentro de la sección */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Asegura que la sección ocupe toda la altura visible de la ventana */
`;

const ContactTitle = styled.h1`
  text-align: center;
  font-size: 36px;
  color: #4CAF50;
  margin-bottom: 40px;
  transition: transform 0.3s ease;

  /* Efecto hover */
  &:hover {
    transform: scale(1.1); /* Aumenta el tamaño del texto */
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  margin-bottom: 30px; /* Espacio entre la información de contacto y los íconos */
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;

  a {
    color: white;
    font-size: 24px;
    transition: color 0.3s ease, transform 0.3s ease;

    /* Efecto hover */
    &:hover {
      color: #9b8b4c;
      transform: scale(1.2); /* Agranda los íconos */
    }
  }
`;


const Footer = styled.footer`
  background-color: #111;
  padding: 5px 5px; /* Reducimos el padding superior e inferior para hacerlo más delgado */
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const Contactanos = () => {
  return (
    <Container>
      <Nav>
      <img src={logo} alt="Original Sushi" style={{ height: '100px' }} />
        <MenuList>
          <Link to="/">INICIO</Link>
          <Link to="/pedir-aqui">Pedir Aqui</Link>
          <Link to="/promociones">Promociones</Link>
          <Link to="/contactenos">Contactanos</Link>
        </MenuList>
        <CartSection>
          <span>Total: 0.00€</span>
          <Link to="/login">Iniciar sesión / Registrarse</Link>
        </CartSection>
      </Nav>

      {/* Sección Contactanos */}
      <ContactSection>
        <ContactTitle>Contáctanos</ContactTitle>
        <ContactInfo>
          <div><FaMapMarkerAlt /> Calle Ficticia 123, Ciudad</div>
          <div><FaClock /> Lunes a Viernes, 12:00 PM - 10:00 PM</div>
        </ContactInfo>
        <SocialIcons>
          <a href="https://facebook.com"><FaFacebook /></a>
          <a href="https://instagram.com"><FaInstagram /></a>
          <a href="https://twitter.com"><FaTwitter /></a>
        </SocialIcons>
      </ContactSection>

      <Footer>
        <div>
          <img src={logo} alt="Original Sushi" style={{ height: '100px' }} />
          <p>
            Sushi Original Preocupa por ofrecer hasta el más mínimo detalle en cada plato...
          </p>
        </div>
        <div>
          <h6>CATEGORÍAS DE MENÚ</h6>
        </div>
        <div>
          <h6>LINKS RÁPIDOS</h6>
        </div>
        <div>
          <h6>CONTACTANOS</h6>
        </div>
      </Footer>
    </Container>
  );
};

export default Contactanos;
