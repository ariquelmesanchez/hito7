import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../css/Navigation.css';
import { CartContext } from '../context/CartContext';
import { UserContext } from '../context/UserProvider';

export const Navbar = () => {
  const { token, logout } = useContext(UserContext);
  const { totalPrice } = useContext(CartContext);

  return (
    <nav className="navbar navbar-expand-sm navbar-light">
      <div className="container-fluid">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link active" to="/">Home</Link>
          </li>
          <li className='nav.item'>
          <Link className='nav-link' to="/cart" style={{ fontWeight: 'bold', fontStyle: 'italic' }}>🛒 Carrito</Link>
          </li>
          {token ? (
            <>
              <li className="nav-item">
                <Link to="/profile" className="nav-link">🔓 Profile</Link>
              </li>
              <li className="nav-item">
                <button onClick={logout} className="nav-link btn btn-link">🔒 Logout</button>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <Link to="/login" className="nav-link">🔐 Login</Link>
              </li>
              <li className="nav-item">
                <Link to="/register" className="nav-link">🔐 Register</Link>
              </li>
            </>
          )}
          <li className="nav-item-total">
            <Link className="nav-link" to="/cart">
              🛒 Total: {totalPrice.toFixed(2)}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;



       
     

  


 
