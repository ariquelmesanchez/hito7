import React from 'react';
import { Container, Button } from 'react-bootstrap';
import '../css/NotFound.css';
import { Link } from 'react-router-dom';  

export const NotFound = () => {
  return (
    <Container className="text-center">
      <h1>404 Error Page not Found</h1>
      <section className="error-container">
        <span className="four"><span className="screen-reader-text">4</span></span>
        <span className="zero"><span className="screen-reader-text">0</span></span>
        <span className="four"><span className="screen-reader-text">4</span></span>
      </section>
      <div className="link-container">
        <Link to="/">
          <Button variant="primary">Back to Home</Button>
        </Link>
       
      </div>
      <br/>
    </Container>
    
  );
};
