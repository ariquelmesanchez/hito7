import React, { useContext, useEffect } from 'react';
import { StoreContext } from '../context/StoreProvider';
import { useParams } from 'react-router-dom';
import '../css/PizzaDetail.css';
import { CartContext } from '../context/CartContext';

const PizzaDetail = () => {
  const { id } = useParams();
  const { handleFetchPizzaById, pizzaDetail } = useContext(StoreContext);
  const { addToCart, removeFromCart, isInCart } = useContext(CartContext);

  useEffect(() => {
    handleFetchPizzaById(id);
  }, [id, handleFetchPizzaById]);

  // Default value for ingredients to avoid errors
  const ingredients = pizzaDetail.ingredients || [];

  const handleAddToCart = () => {
    addToCart(pizzaDetail);
  };

  const handleRemoveFromCart = () => {
    removeFromCart(pizzaDetail.id);
  };

  return (
    <div className="pizza-detail-container">
      {pizzaDetail && pizzaDetail.name ? (
        <div>
          <h1>{pizzaDetail.name}</h1>
          <img src={pizzaDetail.img} alt={pizzaDetail.name} />
          <p>{pizzaDetail.desc}</p>
          <p className="price">Price: ${pizzaDetail.price.toFixed(2)}</p>
          <p className="ingredients">Ingredients: {ingredients.length > 0 ? ingredients.join(", ") : "No ingredients available"}</p>
          <div className="button-container">
            {isInCart(pizzaDetail.id) ? (
              <button onClick={handleRemoveFromCart}>Remove from Cart</button>
            ) : (
              <button onClick={handleAddToCart}>Add to Cart</button>
            )}
          </div>
        </div>
      ) : (
        <p>No pizza details available.</p>
      )}
    </div>
  );
};

export default PizzaDetail;


