import '../../App.css';
import Products from '../sub-components/Products';
import React, { useEffect } from 'react';
import { useCart } from '../context/CartContext'; // Import useCart to access CartContext

export const Home = () => {
  const { addToCart, removeFromCart, cart, totalPrice } = useCart(); // Use CartContext
  const [products, setProducts] = React.useState([]);

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/pizzas');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching pizzas:', error);
      }
    };

    fetchPizzas();
  }, []);

  return (
    <>
      <Products
        products={products}
        addToCart={addToCart}
        removeToCart={removeFromCart}
        cart={cart}
      />

      {/* Display the total price dynamically */}
      <div className="cart-summary">
        <h2>Cart Total: ${totalPrice.toFixed(2)}</h2> {/* Dynamic cart total with two decimal places */}
      </div>
    </>
  );
};


