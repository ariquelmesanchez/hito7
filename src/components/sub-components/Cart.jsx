import React from 'react';
import PropTypes from 'prop-types';
import CardProduct from '../sub-components/CardProduct'
import '../css/CardPizza.css';
import CartIcon from '../sub-components/CartIcon';



export const Cart = ({ addToCart, cart, removeToCart }) => {
  const handleCount = (items) => {
    const counter = items.reduce((accumulator, product) => {
      return (accumulator += product.cantidad);
    }, 0);

    return counter;
  };

  const handleTotalPrice = (items) => {
    return items.reduce((accumulator, product) => {
      // Check if price is undefined or null
      if (product.price === undefined || product.price === null) {
        console.warn(`Warning: price is missing for product ${product.name}`);
      }
  
      const price = Number(product.price) || 0;
      const cantidad = Number(product.cantidad) || 0;
      
      // console.log(`Product: ${product.name}, price (Raw): ${product.price}, price (Number): ${price}, Cantidad: ${cantidad}`);
      
      return accumulator + (price * cantidad);
    }, 0);
  };

  return (
    <div className="cart-container">
      <h2>
        {/* <img src="../images/cart.svg" alt="Your Cart" /> */}
        <CartIcon />
      </h2>
      <div className="grid-products">
        {cart?.length ? (
          cart.map((product, key) => (
            <CardProduct
              key={key}
              {...product}
              addToCart={addToCart}
              removeToCart={removeToCart}
            />
          ))
        ) : (
          <h6 className="text-black">
            <strong>No hay Productos en el Carrito</strong></h6>
        )}
      </div>
      <div className="cart-summary">
        <p>Total Items: {handleCount(cart)}</p>
        <p>Total Price: ${handleTotalPrice(cart)}</p>
      </div>
    </div>
  );
};

Cart.propTypes = {
  addToCart: PropTypes.func.isRequired,
  removeToCart: PropTypes.func.isRequired,
  cart: PropTypes.array.isRequired,
};

export default Cart;

