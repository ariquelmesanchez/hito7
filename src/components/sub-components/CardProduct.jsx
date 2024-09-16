import React from 'react';
import PropTypes from 'prop-types';
import '../css/SingleProduct.css';
import Card from 'react-bootstrap/Card';
import { ButtonAdd } from './ButtonAdd';
import { ButtonRemove } from './ButtonRemove';

const CardProduct = ({
  id,
  name,
  price,
  img,
  addToCart,
  removeToCart,
}) => {
  return (
    <Card className='product-container'>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>${price.toFixed(2)}</Card.Text> {/* Format price with 2 decimal places */}
        <hr />
        <div className='button-container'>
          <ButtonAdd
            id={id}
            addToCart={addToCart}
          />
          <hr />
          <ButtonRemove
            id={id}
            removeToCart={removeToCart}
          />
        </div>
      </Card.Body>
    </Card>
  );
};

CardProduct.propTypes = {
  id: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  addToCart: PropTypes.func.isRequired,
  removeToCart: PropTypes.func.isRequired,
};

export default CardProduct;

