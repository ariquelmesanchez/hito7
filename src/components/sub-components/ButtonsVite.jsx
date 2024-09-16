import React from 'react';
import '../css/ButtonsVite.css'; // Import CSS file for styling

const ButtonsVite = ({ addToCart, removeFromCart, pizza }) => {
  const handleButtonClick = (buttonType) => {
    console.log(`${buttonType} button clicked`);
    if (buttonType === 'Primary' && addToCart) {
      addToCart(pizza);
    } else if (buttonType === 'Secondary' && removeFromCart) {
      removeFromCart(pizza);
    }
  };

  return (
    <div className="buttons-container">
      <button 
        className="button button-primary" 
        onClick={() => handleButtonClick('Primary')}
      > 
        <svg data-name="Layer 1" id="Layer_1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <title>Add to Cart Icon</title>
          <path d="M12.2,9h1.6V6.8H16V5.2H13.8V3H12.2V5.2H10V6.8h2.2ZM20,5v5.5L7.45,12.72,5,3H1.25a1,1,0,0,0,0,2H3.47L6.7,18H20V16H8.26l-.33-1.33L22,12.18V5ZM7,19a1.5,1.5,0,1,0,1.5,1.5A1.5,1.5,0,0,0,7,19Zm12,0a1.5,1.5,0,1,0,1.5,1.5A1.5,1.5,0,0,0,19,19Z"/>
        </svg>
      </button>
      <button 
        className="button button-secondary" 
        onClick={() => handleButtonClick('Secondary')}
      > 
        <svg data-name="Layer 1" id="Layer_1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <title>Remove from Cart Icon</title>
          <path d="M16,5.2H10V6.8h6ZM20,5v5.5L7.45,12.72,5,3H1.25a1,1,0,0,0,0,2H3.47L6.7,18H20V16H8.26l-.33-1.33L22,12.18V5ZM7,19a1.5,1.5,0,1,0,1.5,1.5A1.5,1.5,0,0,0,7,19Zm12,0a1.5,1.5,0,1,0,1.5,1.5A1.5,1.5,0,0,0,19,19Z"/>
        </svg>
      </button>
    </div>
  );
};

export default ButtonsVite;



