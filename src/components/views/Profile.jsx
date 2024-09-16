import React from 'react';
import { Button } from 'react-bootstrap';

export const Profile = ({ email, onLogout }) => {
  return (
    <div style={{ textAlign: 'center', padding: '20px', border: '1px solid #ccc', borderRadius: '8px', maxWidth: '300px', margin: '0 auto' }}>
      <h2>Diddy Profile</h2>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6nofeFZqVKlUr6DiQ7mu4v7X3WdprTUPe1Q&s" alt="" />
      <p>Email: kong@donkey.com {email}</p>
      <Button variant="danger" onClick={onLogout}>
        Cerrar Sesión
      </Button>
    </div>
  );
};

