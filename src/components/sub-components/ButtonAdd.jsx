import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

export const ButtonAdd = ({ id, name, price, addToCart }) => {
  return (
    <div className="buttons-container">
      <button 
        className="button button-primary" 
        onClick={() => 
          addToCart({
            id,
            name,
            price,
          })
        }
      > 
        <svg data-name="Layer 1" id="Layer_1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <title>Add to Cart Icon</title>
          <path d="M12.2,9h1.6V6.8H16V5.2H13.8V3H12.2V5.2H10V6.8h2.2ZM20,5v5.5L7.45,12.72,5,3H1.25a1,1,0,0,0,0,2H3.47L6.7,18H20V16H8.26l-.33-1.33L22,12.18V5ZM7,19a1.5,1.5,0,1,0,1.5,1.5A1.5,1.5,0,0,0,7,19Zm12,0a1.5,1.5,0,1,0,1.5,1.5A1.5,1.5,0,0,0,19,19Z"/>
        </svg>
      </button>
    </div>
  );
};

ButtonAdd.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  addToCart: PropTypes.func.isRequired,
};

