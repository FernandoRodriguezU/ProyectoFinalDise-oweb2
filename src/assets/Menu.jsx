import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';
import fm from '../assets/fm.jpg';
import R1 from '../assets/R1.jpg';
import R2 from '../assets/R2.jpg';
import rn1 from '../assets/rn1.jpg';
import rn2 from '../assets/rn2.jpg';
import b1 from '../assets/b1.jpg';
import b2 from '../assets/b2.jpg';
import n1 from '../assets/n1.jpg';
import n2 from '../assets/n2.jpg';
import s1 from '../assets/s1.jpg';
import s2 from '../assets/s2.jpg';



 // Asegúrate de tener la ruta correcta de tu imagen
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
  background-image: url(${fm}); 
  background-size: cover;
  background-position: center;
  position: relative;
  text-align: center;
  color: white;
  border-radius: 20px; 
`;

const PromoTitle = styled.h1`
  text-align: center;
  font-size: 36px;
  color: #4CAF50;
  margin-bottom: 40px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
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

const PromoCardWithImage = ({ image1, image2, altText, link }) => {
  const [currentImage, setCurrentImage] = useState(image1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prevImage => (prevImage === image1 ? image2 : image1));
    }, 3000); // Cambiar imagen cada 3 segundos

    return () => clearInterval(interval); // Limpiar el intervalo al desmontar el componente
  }, [image1, image2]);

  return (
    <PromoCard>
      <PromoImage>
        <img src={currentImage} alt={altText} />
      </PromoImage>
      <h3>{altText}</h3>
      <PromoDescription>Descubre el arte del sushi en cada bocado</PromoDescription>
      <OrderButton to={link}>Ver Producto</OrderButton>
    </PromoCard>
  );
};

const Menu = () => {
  return (
    <Container>
      <Nav>
        <Logo src={logo} alt="Original Sushi" />
        <MenuList>
          <Link to="/">INICIO</Link>
          <Link to="/pedir-aqui">Pedir Aqui</Link>
          <Link to="/promociones">Promociones</Link>
          <Link to="/contactenos">Contactenos</Link>
        </MenuList>
        <CartSection>
          <span>Total: 0.00€</span>
          <Link to="/login">Iniciar sesión / Registrarse</Link>
        </CartSection>
      </Nav>

      <PromoSection>
        <PromoTitle>Menu Completo</PromoTitle>
        <PromoGrid>
          <PromoCardWithImage
            image1={R1}
            image2={R2}
            altText="Rollos Tradicionales"
            link="/rollos-tradicionales"
          />
          <PromoCardWithImage
            image1={rn1}
            image2={rn2}
            altText="Rollos Nuevos"
            link="/rollos-especiales"
          />
          <PromoCardWithImage
            image1={b1}
            image2={b2}
            altText="Bebidas"
            link="/bebidas"
          />
           <PromoCardWithImage
            image1={s1}
            image2={s2}
            altText="Salsas Extras "
            link="/Salsas-Extras"
          />
          <PromoCardWithImage
            image1={n1}
            image2={n2}
            altText="Nigiri"
            link="/nigiri"
          />
        </PromoGrid>
      </PromoSection>

      <Footer>
        <div>
          <img src={logo} alt="Original Sushi" style={{ height: '100px' }} />
          <p>Sushi Original se preocupa por ofrecer hasta el más mínimo detalle en cada plato...</p>
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

export default Menu;
