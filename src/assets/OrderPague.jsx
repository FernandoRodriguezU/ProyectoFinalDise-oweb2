// OrderPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const OrderPage = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState(null);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    setTotal(total + product.price);
  };

  const handleRemoveFromCart = (product) => {
    const newCart = cart.filter(item => item.id !== product.id);
    setCart(newCart);
    setTotal(total - product.price);
  };

  const handlePayment = (method) => {
    setPaymentMethod(method);
  };

  return (
    <div>
      <h1>Carrito de Compras</h1>
      {cart.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.price} Bs</p>
          <button onClick={() => handleRemoveFromCart(item)}>Eliminar</button>
        </div>
      ))}
      <h2>Total: {total} Bs</h2>
      {!paymentMethod ? (
        <div>
          <button onClick={() => handlePayment('Efectivo')}>Efectivo</button>
          <button onClick={() => handlePayment('Tarjeta')}>Tarjeta</button>
        </div>
      ) : (
        <div>
          <h3>Método de Pago: {paymentMethod}</h3>
          {paymentMethod === 'Efectivo' ? (
            <div>
              <p>Gracias por tu compra. Comprobante generado.</p>
            </div>
          ) : (
            <Link to="/login">
              <button>Iniciar sesión para pagar con tarjeta</button>
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default OrderPage;
