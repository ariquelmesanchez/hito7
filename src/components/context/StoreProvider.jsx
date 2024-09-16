import { createContext, useEffect, useState } from "react";

export const StoreContext = createContext();

const StoreProvider = ({ children }) => {
  const API_URL = "http://localhost:5000/api/pizzas";
  const [pizzas, setPizzas] = useState([]);
  const [pizzaDetail, setPizzaDetail] = useState({});
  const [pizzaCart, setPizzaCart] = useState([]);

  const handleAddToCart = (pizza) => {
    pizza['cantidad'] = 1;
    setPizzaCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === pizza.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === pizza.id
            ? { ...item, cantidad: (item.cantidad || 1) + 1 }
            : item
        );
      } else {
        return [...prevCart, pizza];
      }
    });
  };

  const handleRemoveFromCart = (pizzaId) => {
    setPizzaCart(prevCart => {
      const updatedCart = prevCart.reduce((acc, item) => {
        if (item.id === pizzaId) {
          if (item.cantidad > 1) {
            return [...acc, { ...item, cantidad: item.cantidad - 1 }];
          }
          return acc;
        }
        return [...acc, item];
      }, []);
      return updatedCart;
    });
  };

  const FetchAPI = async (url) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const dataJson = await response.json();

      setPizzas(
        dataJson.map((item) => ({
          name: item.name,
          img: item.img,
          id: item.id,
          ingredients: item.ingredients,
          price: item.price,
        }))
      );
    } catch (error) {
      console.error("Failed to fetch pizzas:", error);
    }
  };

  useEffect(() => {
    FetchAPI(API_URL);
  }, []);

  const FetchAPIById = async (pizza_id) => {
    const url = `${API_URL}/${pizza_id}`; // Construct the URL with the base API_URL and pizza_id
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const pizza = await response.json();
      const { desc, id, img, ingredients, name, price } = pizza;

      setPizzaDetail({
        desc,
        id,
        img,
        ingredients,
        name,
        price,
      });

      return pizza; // Return the pizza data fetched by ID
    } catch (error) {
      console.error("Failed to fetch pizza by ID:", error);
    }
  };

  const handleFetchPizzaById = async (pizza_id) => {
    const pizza = await FetchAPIById(pizza_id);
    if (pizza) {
      console.log("Pizza fetched by ID:", pizza);
    }
  };

  return (
    <StoreContext.Provider
      value={{
        pizzas,
        setPizzas,
        pizzaDetail,
        setPizzaDetail,
        handleAddToCart,
        handleFetchPizzaById,
        handleRemoveFromCart,
        pizzaCart
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
