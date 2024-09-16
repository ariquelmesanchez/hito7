import React from 'react';
import PropTypes from 'prop-types';


export const ButtonRemove = ({ id, name, price, removeToCart }) => {
    return (
        <div className="buttons-container">
          <button 
            className="button button-secondary" 
            onClick={() =>
              removeToCart({
                id,
                name,
                price,
              })
            }
          > 
            <svg data-name="Layer 1" id="Layer_1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <title>Remove from Cart Icon</title>
              <path d="M16,5.2H10V6.8h6ZM20,5v5.5L7.45,12.72,5,3H1.25a1,1,0,0,0,0,2H3.47L6.7,18H20V16H8.26l-.33-1.33L22,12.18V5ZM7,19a1.5,1.5,0,1,0,1.5,1.5A1.5,1.5,0,0,0,7,19Zm12,0a1.5,1.5,0,1,0,1.5,1.5A1.5,1.5,0,0,0,19,19Z"/>
            </svg>
          </button>
        </div>
      );
    };

ButtonRemove.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  removeToCart: PropTypes.func.isRequired,
};


