import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';
import fb from '../assets/fb.jpg';
import re1 from '../assets/re1.jpg'; 
import c1 from '../assets/c1.jpg';
import c11 from '../assets/c11.jpg';
import c2 from '../assets/c2.jpg'; // Asegúrate de tener la ruta correcta de tu imagen
import f1 from '../assets/f1.jpg';
import f2 from '../assets/f2.jpg';
import a1 from '../assets/a1.jpg';
import sp1  from '../assets/sp1.jpg';
import sp2  from '../assets/sp2.jpg';


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

const PromoSection = styled.section`
  padding: 120px 20px 60px;
  max-width: 1200px;
  margin: 0 auto;
  background-image: url(${fb}); /* Aquí se agrega la imagen de fondo */
  background-size: cover;
  background-position: center;
  position: relative;
  text-align: center;
  color: white; /* Asegura que el texto sea blanco sobre el fondo */
  border-radius: 20px; /* Redondea los bordes de la sección */
`;

const PromoTitle = styled.h1`
  text-align: center;
  font-size: 36px;
  color: #4CAF50;
  margin-bottom: 40px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1); /* Aumenta el tamaño del texto */
  }
`;



const PromoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-bottom: 60px;
`;

const PromoCard = styled.div`
  background: rgba(155, 139, 76, 0.1);
  border: 1px solid #9b8b4c;
  border-radius: 15px;
  padding: 20px;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
`;

const PromoImage = styled.div`
  height: 200px;
  background-color: #2a2a2a;
  border-radius: 10px;
  margin-bottom: 15px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const PromoPrice = styled.div`
  font-size: 24px;
  color: #9b8b4c;
  margin: 10px 0;
`;

const PromoDescription = styled.p`
  margin-bottom: 20px;
`;

const OrderButton = styled(Link)`
  background-color: #ff6347;
  color: white;
  padding: 12px 25px;
  border-radius: 25px;
  text-decoration: none;
  font-weight: bold;
  display: inline-block;
  transition: all 0.3s ease;

  &:hover {
    background-color: #e5533f;
    transform: translateY(-2px);
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

const RollosTradicional = () => {
  const promos = [
    {
      id: 1,
      title: "Coca-Cola ",
      description: "1 ltrs",
      price: "8 Bs",
      image: c1,
    },
    {
      id: 2,
      title: "Coca-cola",
      description: "1,5 ltrs",
      price: "10Bs",
      image: c11,
    },
    {
      id: 3,
      title: "Coca-Cola",
      description: "2 ltrs",
      price: "15 Bs",
      image: c2,
    },
    {
      id: 4,
      title: "Fanta",
      description: "1 ltrs",
      price: "8 Bs",
      image: f1,
    },
    {
      id: 5,
      title: "Fanta",
      description: "2 ltrs",
      price: "10 Bs",
      image: f2,
    },
    {
      id: 6,
      title: "Sprite",
      description: "1 ltrs",
      price: " 8 Bs",
      image: sp1,
    },
    {
      id: 7,
      title: "Refresco de pelon",
      description: "1 ltrs",
      price: " 10 Bs",
      image: re1,
    },
    {
      id: 8,
      title: "agua",
      description: "500 ml",
      price: " 6 Bs",
      image: a1,
    },
    {
      id: 9,
      title: "Sprite",
      description: "2 ltrs",
      price: " 12 Bs",
      image: sp2,
    }
  ];

  return (
    <Container>
      <Nav>
        <Logo src={logo} alt="Original Sushi" />
        <MenuList>
          <Link to="/">INICIO</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/bebidas">  Bebidas</Link>
          <Link to="/rollos-tradicionales">Rollos Tradicionales</Link>
          <Link to="/rollos-especiales">Rollos nuevos</Link>
          <Link to="/salsas-extras">Salsas</Link>
          <Link to="/promociones">Promociones</Link>
        </MenuList>
        <CartSection>
        
          <Link to="/login">Iniciar sesión / Registrarse</Link>
        </CartSection>
      </Nav>

      <PromoSection>
        <PromoTitle>Bebidas</PromoTitle>
        <PromoGrid>
          {promos.map(promo => (
            <PromoCard key={promo.id}>
              <PromoImage>
                <img src={promo.image} alt={promo.title} />
              </PromoImage>
              <h3>{promo.title}</h3>
              <PromoDescription>{promo.description}</PromoDescription>
              <PromoPrice>{promo.price}</PromoPrice>
              <OrderButton to="/order">Ordenar Ahora</OrderButton>
            </PromoCard>
          ))}
        </PromoGrid>
      </PromoSection>

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

export default RollosTradicional;
