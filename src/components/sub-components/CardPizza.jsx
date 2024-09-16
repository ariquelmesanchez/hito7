import React, { useContext } from "react";
import { Card, CardBody, CardText, CardTitle } from "react-bootstrap";
import { StoreContext } from "../context/StoreProvider";
import '../css/Card.css';
import ButtonsVite from "./ButtonsVite";
import { CartContext } from "../context/CartContext";
import { Link } from 'react-router-dom'; // Import Link

const CardPizza = () => {
  const { pizzas } = useContext(StoreContext);
  const { addToCart, removeFromCart } = useContext(CartContext);

  return (
    <div className="cart-container">
      {pizzas.map((pizza) => (
        <Link 
          key={pizza.id} 
          to={`/pizza/${pizza.id}`} // Navigate to pizza details route
          style={{ textDecoration: 'none' }} // Optional: Remove underline from links
        >
          <Card className="cartita">
            <Card.Img variant="top" src={pizza.img} />
            <CardBody>
              <CardTitle>{pizza.name}</CardTitle>
              <CardText>{pizza.ingredients.join(", ")}</CardText>
              <CardText>Pizza ID: {pizza.id}</CardText>
              <CardText>Price: ${pizza.price}</CardText>
              <div className="product-buttons">
                <ButtonsVite 
                  addToCart={() => addToCart(pizza)} 
                  removeFromCart={() => removeFromCart(pizza.id)}
                  pizza={pizza} 
                />
              </div>
            </CardBody>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default CardPizza;


