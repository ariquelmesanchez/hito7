import React, { createContext, useState } from 'react';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [email, setEmail] = useState(null);

  const login = async (email, password) => {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();
      setToken(data.token);
      setEmail(data.email);
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  const register = async (email, password) => {
    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Registration failed');
      }

      const data = await response.json();
      setToken(data.token);
      setEmail(data.email);
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  const logout = () => {
    // Eliminar token y email del estado
    setToken(null);
    setEmail(null);
  };

  return (
    <UserContext.Provider value={{
      token,
      email,
      login,
      register,
      logout,
    }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;


