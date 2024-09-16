import '../../App.css';
import Cart from '../sub-components/Cart';
import React, { useState, useEffect } from 'react';
import SingleProduct from '../sub-components/SingleProduct';

export const Pizza = () => {
  const [producto, setProduct] = useState(null); // Initialize as null since it will be an object
  const [carro, setCart] = useState([]);

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/pizzas/p00');
        const data = await response.json();
        setProduct(data); // Assuming 'data' is the pizza object
      } catch (error) {
        console.error('Error fetching pizza:', error);
      }
    };

    fetchPizza();
  }, []);

  const handleAddToCart = (product) => {
    if (carro.some((productCart) => productCart.id === product.id)) {
      const updatedCart = carro.map((productCart) =>
        productCart.id === product.id
          ? { ...productCart, cantidad: productCart.cantidad + 1 }
          : productCart
      );
      setCart(updatedCart);
    } else {
      setCart([...carro, { ...product, cantidad: 1 }]);
    }
  };

  const handleRemoveToCart = (product) => {
    if (carro.some((productCart) => productCart.id === product.id)) {
      const updatedCart = carro.map((productCart) => {
        if (productCart.cantidad > 0) {
          return productCart.id === product.id
            ? { ...productCart, cantidad: productCart.cantidad - 1 }
            : productCart;
        }
        return productCart;
      });

      const filteredCart = updatedCart.filter(
        (productCart) => productCart.cantidad > 0
      );

      setCart(filteredCart);
    }
  };

  return (
    <>
      {/* <Cart
        addToCart={handleAddToCart}
        removeToCart={handleRemoveToCart}
        cart={carro}
      /> */}
      {producto && (
        <SingleProduct
          producto={producto} // Pass the fetched pizza object
          add2Cart={handleAddToCart}
          remove2Cart={handleRemoveToCart}
          carro={carro}
        />
      )}
    </>
  );
};


