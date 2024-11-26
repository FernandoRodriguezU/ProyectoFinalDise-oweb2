import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Container = styled.div`
  padding: 20px;
  background-color: #f8d7da; /* Rojo muy clarito */
  min-height: 100vh; /* Asegura que el fondo cubra toda la altura de la ventana */
`;

const Menu = styled.nav`
  margin-bottom: 20px;
`;

const Button = styled(NavLink)`
  margin-right: 10px;
  background-color: #c0392b;
  color: white;
  padding: 10px 15px;
  text-decoration: none;
  border-radius: 5px;

  &:hover {
    background-color: red;
  }
`;

const Section = styled.section`
  margin-bottom: 40px;
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const ItemCard = styled.div`
  cursor: pointer;
  margin: 10px;
  border: 1px solid #c0392b;
  border-radius: 5px;
  transition: transform 0.3s;
  overflow: hidden; /* Para manejar el desbordamiento de la imagen */

  &:hover {
    transform: scale(1.05);
  }
`;

const ItemImage = styled.img`
  width: 100%; /* Ajusta el tamaño según tus necesidades */
  height: auto;
`;

const items = {
  rollosTradicionales: [
    { id: 1, name: 'Rollo Tradicional 1', img: 'ruta/a/imagen1.jpg' },
    { id: 2, name: 'Rollo Tradicional 2', img: 'ruta/a/imagen2.jpg' },
    { id: 3, name: 'Rollo Tradicional 3', img: 'ruta/a/imagen3.jpg' },
    { id: 4, name: 'Rollo Tradicional 4', img: 'ruta/a/imagen4.jpg' },
    { id: 5, name: 'Rollo Tradicional 5', img: 'ruta/a/imagen5.jpg' },
  ],
  rollosNuevos: [
    { id: 1, name: 'Rollo Nuevo 1', img: 'ruta/a/imagen6.jpg' },
    { id: 2, name: 'Rollo Nuevo 2', img: 'ruta/a/imagen7.jpg' },
    { id: 3, name: 'Rollo Nuevo 3', img: 'ruta/a/imagen8.jpg' },
    { id: 4, name: 'Rollo Nuevo 4', img: 'ruta/a/imagen9.jpg' },
    { id: 5, name: 'Rollo Nuevo 5', img: 'ruta/a/imagen10.jpg' },
  ],
  nigiris: [
    { id: 1, name: 'Nigiri 1', img: 'ruta/a/imagen11.jpg' },
    { id: 2, name: 'Nigiri 2', img: 'ruta/a/imagen12.jpg' },
    { id: 3, name: 'Nigiri 3', img: 'ruta/a/imagen13.jpg' },
  ],
  salsasExtra: [
    { id: 1, name: 'Salsa Extra 1', img: 'ruta/a/imagen14.jpg' },
    { id: 2, name: 'Salsa Extra 2', img: 'ruta/a/imagen15.jpg' },
    { id: 3, name: 'Salsa Extra 3', img: 'ruta/a/imagen16.jpg' },
  ],
  bebidas: [
    { id: 1, name: 'Bebida 1', img: 'ruta/a/imagen17.jpg' },
    { id: 2, name: 'Bebida 2', img: 'ruta/a/imagen18.jpg' },
    { id: 3, name: 'Bebida 3', img: 'ruta/a/imagen19.jpg' },
    { id: 4, name: 'Bebida 4', img: 'ruta/a/imagen20.jpg' },
    { id: 5, name: 'Bebida 5', img: 'ruta/a/imagen21.jpg' },
    { id: 6, name: 'Bebida 6', img: 'ruta/a/imagen22.jpg' },
    { id: 7, name: 'Bebida 7', img: 'ruta/a/imagen23.jpg' },
    { id: 8, name: 'Bebida 8', img: 'ruta/a/imagen24.jpg' },
    { id: 9, name: 'Bebida 9', img: 'ruta/a/imagen25.jpg' },
    { id: 10, name: 'Bebida 10', img: 'ruta/a/imagen26.jpg' },
    { id: 11, name: 'Bebida 11', img: 'ruta/a/imagen27.jpg' },
  ],
};

const Body = () => {
  return (
    <Container>
      <Menu>
        <Button to="/">Home</Button>
        {/* Puedes añadir más botones de navegación si es necesario */}
      </Menu>

      {Object.entries(items).map(([sectionKey, sectionItems]) => (
        <Section key={sectionKey}>
          <SectionTitle>{sectionKey.charAt(0).toUpperCase() + sectionKey.slice(1).replace(/([A-Z])/g, ' $1')}</SectionTitle>
          <div className="row justify-content-center">
            {sectionItems.map(item => (
              <div className="col-md-3 col-sm-6" key={item.id}>
                <ItemCard onClick={() => alert(`Redirigir a ${item.name}`)}>
                  <ItemImage src={item.img} alt={item.name} />
                  <p className="text-center">{item.name}</p>
                </ItemCard>
              </div>
            ))}
          </div>
        </Section>
      ))}
    </Container>
  );
};

export default Body;