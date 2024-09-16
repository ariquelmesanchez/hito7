import React from 'react';
import PropTypes from 'prop-types';
import '../css/SingleProduct.css';
import ButtonsVite from './ButtonsVite'; // Import the ButtonsVite component

const SingleProduct = ({ producto, add2Cart, remove2Cart }) => {
  if (!producto) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-container">
      <img 
        src={producto.img} 
        alt={producto.name} 
      />
      <h2>{producto.name}</h2>
      <p>{producto.desc}</p>
      <h4>Precio: ${producto.price}</h4>
      <div className="product-buttons">
        <ButtonsVite 
          addToCart={add2Cart} 
          removeFromCart={remove2Cart} 
          producto={producto} 
        />
      </div>
    </div>
  );
};

SingleProduct.propTypes = {
  producto: PropTypes.object.isRequired,
  add2Cart: PropTypes.func.isRequired,
  remove2Cart: PropTypes.func.isRequired,
};

export default SingleProduct;







