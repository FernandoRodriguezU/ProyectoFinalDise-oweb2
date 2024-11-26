import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';
import fondotra from '../assets/fondotra.jpg'; 
import unagi from'../assets/unagi.jpg'
import ura  from '../assets/ura.jpg';
import kep from '../assets/kep.jpg';
import ebi from '../assets/ebi.jpg'; // Asegúrate de tener la ruta correcta de tu imagen
import fut from '../assets/fut.jpg';
import neg from '../assets/neg.jpg';
import una from '../assets/una.jpg';
import hos from '../assets/una.jpg';


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
  background-image: url(${fondotra}); /* Aquí se agrega la imagen de fondo */
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
      title: "Unagi Roll",
      description: "Rollo con anguila a la parrilla.",
      price: "30 Bs",
      image: unagi,
    },
    {
      id: 2,
      title: "Uramaki",
      description: "Rollo invertido con arroz en el exterior",
      price: "25 Bs",
      image: ura,
    },
    {
      id: 3,
      title: "Hosomaki",
      description: "Rollo fino con un solo ingrediente.",
      price: "35 Bs",
      image: hos,
    },
    {
      id: 4,
      title: "Kappa Maki",
      description: "Rollo de pepino fresco.",
      price: "20 Bs",
      image: kep,
    },
    {
      id: 5,
      title: "Ebi Tempura Roll",
      description: "Rollo con tempura de camarón.",
      price: "30 Bs",
      image: ebi,
    },
    {
      id: 6,
      title: "Futomaki",
      description: "Rollo grande con múltiples ingredientes.",
      price: "25Bs",
      image: fut,
    },
    {
      id: 7,
      title: "Negitoro Maki",
      description: "Atún picado con cebollino.",
      price: "20 Bs",
      image: neg,
    },
    {
      id: 8,
      title: "Unagi Roll",
      description: "Rollo de anguila a la parrilla.",
      price: "29 Bs",
      image: una,
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
        <PromoTitle>Rollos Tradicionales</PromoTitle>
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
