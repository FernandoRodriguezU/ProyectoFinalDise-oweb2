import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';
import fsa from '../assets/fsa.jpg'; 
import sa1 from '../assets/sa1.jpg';
import sa2 from '../assets/sa2.jpg';
import sa3 from '../assets/sa3.jpg'; // Asegúrate de tener la ruta correcta de tu imagen
import sa4 from '../assets/sa4.jpg';
import sa5 from '../assets/sa5.jpg';
import sa6 from '../assets/sa6.jpg';
import sa7  from '../assets/sa7.jpg';


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
  background-image: url(${fsa}); /* Aquí se agrega la imagen de fondo */
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
      title: "salsa de soya ",
      description: "Una salsa fermentada hecha de soya y trigo. Es salada y se usa comúnmente para mojar nigiris y rollos de sushi.",
      price: "8 Bs",
      image: sa1,
    },
    {
      id: 2,
      title: "Wasabii",
      description: "Una pasta verde y picante hecha de rábano japonés. Se usa en pequeñas cantidades para añadir un toque picante al sush",
      price: "6 Bs",
      image: sa2,
    },
    {
      id: 3,
      title: "Salsa Ponzu",
      description: "Una salsa cítrica hecha de soya, limón o yuzu, vinagre y mirin. Es ligera y refrescante, ideal para sashimi.",
      price: "5 Bs",
      image: sa3,
    },
    {
      id: 4,
      title: "Mayonesa Picante",
      description: "Una mezcla de mayonesa y sriracha o otra salsa picante. Se usa para dar un toque cremoso y picante a ciertos rollos.",
      price: "8 Bs",
      image: sa4,
    },
    {
      id: 5,
      title: "Salsa Teriyaki",
      description: "Una salsa dulce y salada hecha de soya, azúcar, sake y mirin. Puede usarse para marinar y aderezar ciertos tipos de sushi.",
      price: "10 Bs",
      image: sa5,
    },
    {
      id: 6,
      title: "Salsa Goma",
      description: "Una salsa cremosa hecha de semillas de sésamo, soya, azúcar y vinagre. Tiene un sabor a nuez y se usa a veces para ensaladas de sushi.",
      price: " 5 Bs",
      image: sa6,
    },
    {
      id: 7,
      title: "Aceite de Chile:",
      description: "Un aceite infusionado con chiles picantes. Se usa para agregar un toque picante y aromático.",
      price: " 5 Bs",
      image: sa7,
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
        <PromoTitle>Salsas Extras</PromoTitle>
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
