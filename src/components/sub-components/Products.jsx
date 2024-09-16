import React from 'react';
import PropTypes from 'prop-types';
import CardProduct from '../sub-components/CardProduct';
import '../css/CardPizza.css';

const Products = ({ products, addToCart, removeToCart }) => {
  return (
    <div className="container">
      <div className="card-grid">
        {products.length > 0 ? (
          products.map((product) => (
            <CardProduct
              key={product.id} // Use product.id as the key
              {...product}
              addToCart={addToCart}
              removeToCart={removeToCart}
            />
          ))
        ) : (
          <p>No products available.</p> // Display a message if no products are available
        )}
      </div>
    </div>
  );
};

Products.propTypes = {
  products: PropTypes.array.isRequired,
  addToCart: PropTypes.func.isRequired,
  removeToCart: PropTypes.func.isRequired,
};

export default Products;
