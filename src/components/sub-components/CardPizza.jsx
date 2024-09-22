import React, { useContext } from "react";
import { Card, CardBody, CardText, CardTitle, Button } from "react-bootstrap"; // Import Button
import { StoreContext } from "../context/StoreProvider";
import '../css/Card.css';
import ButtonsVite from "./ButtonsVite";
import { CartContext } from "../context/CartContext";
import { Link } from 'react-router-dom';

const CardPizza = () => {
  const { pizzas } = useContext(StoreContext);
  const { addToCart, removeFromCart } = useContext(CartContext);

  return (
    <div className="cart-container">
      {pizzas.map((pizza) => (
        <Card key={pizza.id} className="cartita">
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
              <Link to={`/pizza/${pizza.id}`}>
                <Button variant="primary">View Details</Button>
              </Link>
            </div>
          </CardBody>
        </Card>
      ))}
    </div>
  );
};

export default CardPizza;



