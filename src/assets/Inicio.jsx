// HomePage.jsx
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import fondo1 from '../assets/fondo1.jpg';
import fondo2 from '../assets/fondo2.jpg'; 
import Nigiri from '../assets/Nigiri.jpg';
import Rollos from '../assets/Rollos.jpg';
import Salsas from '../assets/Salsas.jpg';
import Bebidas from '../assets/Bebidas.jpg';
import RollosTradicional from '../assets/RollosTradicional.jpg';
import RollosNuevo from '../assets/RollosNuevo.jpg';
import Nigiris from '../assets/Nigiris.jpg';
import logo from '../assets/logo.jpg';
import fondomenu from '../assets/fondomenu.jpg';

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

const HeroSection = styled.div`
  min-height: 100vh;
  background-image: url(${fondo1});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 20px;
  margin-top: 80px;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: -1;
  }
`;

const MainTitle = styled.h1`
  font-size: 48px;
  margin-bottom: 20px;
  font-family: 'Playfair Display', serif;
  color: white;
`;

const Description = styled.p`
  font-size: 18px;
  max-width: 800px;
  margin-bottom: 30px;
  color: white;
`;
const OrderButton = styled(Link)`
  background-color: #ff6347; /* Nuevo color de fondo (rojo anaranjado) */
  color: white;
  padding: 15px 40px;
  border-radius: 30px;
  text-decoration: none;
  font-weight: bold;
  transition: all 0.3s ease;
  display: inline-block;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  
  /* Efecto hover */
  &:hover {
    background-color: #e5533f; /* Nuevo color para hover (más oscuro) */
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(155, 139, 76, 0.3);
  }
  
  &:active {
    transform: translateY(1px);
    box-shadow: 0 2px 6px rgba(155, 139, 76, 0.2);
  }
  
  /* Efecto focus para accesibilidad */
  &:focus {
    outline: 2px solid #ff6347; /* Color para el enfoque */
    outline-offset: 2px;
  }
`;

const AboutSection = styled.section`
  padding: 80px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
`;

const TextBox = styled.div`
  background: rgba(155, 139, 76, 0.1);
  padding: 30px;
  border-radius: 15px;
  border: 1px solid #9b8b4c;
  max-width: 500px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }

  h2 {
    color: #9b8b4c;
    margin-bottom: 20px;
  }

  p {
    line-height: 1.6;
  }
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  max-width: 600px;

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 10px;
  }
`;

const QualitySection = styled.section`
  padding: 80px 20px;
  text-align: center;
  background-image: url(${fondomenu}); /* Agrega aquí tu imagen de fondo */
  background-size: cover;
  background-position: center;
  position: relative;
  color: white; /* El texto será blanco para asegurar que sea legible sobre el fondo */
  border-radius: 20px;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); /* Fondo oscuro con opacidad para mejorar la legibilidad del texto */
    z-index: 0;
  }

  h2, h3, p {
    position: relative;
    z-index: 1; /* Asegura que el texto esté encima del fondo oscuro */
  }
`;



const MenuSection = styled.section`
  padding: 80px 20px;
  max-width: 1200px;
  margin: 0 auto;
  background-image: url(${fondo2});
  background-size: cover;
  background-position: center;
  position: relative;
  border-radius: 20px;
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    z-index: 0;
  }

  h2, p {
    position: relative;
    z-index: 1;
    text-align: center;
  }
`;

const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 40px;
  position: relative;
  z-index: 1;
`;

const CategoryCard = styled(Link)`
  position: relative;
  height: 250px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0,0,0,0.3);
  transition: transform 0.3s ease;
  text-decoration: none;
  display: block;

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  h3 {
    position: absolute;
    bottom: 20px;
    left: 20px;
    color: white;
    margin: 0;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
  }
`;


const Footer = styled.footer`
  background-color: #111;
  padding: 40px 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;

  a {
    color: white;
    font-size: 24px;
    transition: color 0.3s;
    
    &:hover {
      color: #9b8b4c;
    }
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;

const HomePage = () => {
  return (
    <Container>
      <Nav>
        <Logo src={logo} alt="Original Sushi" />
        <MenuList>
          <Link to="/">INICIO</Link>
          <Link to="/pedir aqui">Pedir Aqui</Link>
          <Link to="/promociones">Promociones</Link>
          <Link to="/contactenos">Contactenos</Link>
          <Link to="/menu">Menu</Link>
        </MenuList>
        <CartSection>
         
          <Link to="/login">Iniciar sesión / Registrarse</Link>
        </CartSection>
      </Nav>

      <HeroSection>
        <MainTitle>Original Sushi</MainTitle>
        <Description>
          El mimo de la artesanía se aprecia en cada pieza de sushi, maki, nigiri, gunkans,
          temakis... destacan por su colorido y su combinación perfecta de ingredientes.
        </Description>
        <OrderButton to="/promociones">Promociones</OrderButton>
      </HeroSection>

      <AboutSection>
        <ImageGrid>
          <img src={Nigiri} alt="Nigiri" />
          <img src={Rollos} alt="Rollos Tradicionales" />
          <img src={Salsas} alt="Salsas Extras" />
          <img src={Bebidas} alt="Bebidas" />
        </ImageGrid>
        <TextBox>
          <h2>Sobre nosotros</h2>
          <p>
            Comprometidos con nuestros restaurantes y con nuestros clientes.
            Nos preocupamos por ofrecer hasta el más mínimo detalle en cada plato.
            El que queda impreso en la memoria...
          </p>
        </TextBox>
      </AboutSection>

      <QualitySection>
        <h2>MEJOR CALIDAD</h2>
        <h3>Fusión de comida japonesa</h3>
        <p>
          El mimo de la artesanía se aprecia en cada pieza de sushi, maki, nigiri, gunkans,
          temakis... destacan por su colorido y su combinación perfecta de ingredientes...
        </p>
        <OrderButton to="/menu">NUESTRO MENÚ</OrderButton>

      </QualitySection>

      <MenuSection>
        <h2>Nuestras categorías</h2>
        <p>
          Disfruta de la mejor cocina internacional japonesa, y de una forma original y
          diferente de pedir tus platos.
        </p>
        <CategoryGrid>
  <CategoryCard to="/rollos-especiales">
    <img src={RollosTradicional} alt="Rollos Nuevos" />
    <h3>Rollos Nuevos</h3>
  </CategoryCard>
  <CategoryCard to="/rollos-tradicionales">
    <img src={Nigiris} alt="Rollos Tradicionales" />
    <h3>Rollos Tradicionales</h3>
  </CategoryCard>
  <CategoryCard to="/nigiri">
    <img src={RollosNuevo} alt="Nigiris" />
    <h3>Nigiris</h3>
  </CategoryCard>
</CategoryGrid>
      </MenuSection>

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
          <ContactInfo>
            <div><FaMapMarkerAlt /> Calle Ficticia 123, Ciudad</div>
            <div><FaClock /> Lunes a Viernes, 12:00 PM - 10:00 PM</div>
          </ContactInfo>
          <SocialIcons>
            <a href="https://facebook.com"><FaFacebook /></a>
            <a href="https://instagram.com"><FaInstagram /></a>
            <a href="https://twitter.com"><FaTwitter /></a>
          </SocialIcons>
        </div>
      </Footer>
    </Container>
  );
};

export default HomePage;
