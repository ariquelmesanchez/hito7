// src/utils/cartUtils.js
export const handleTotalPrice = (items) => {
    return items.reduce((accumulator, product) => {
      if (product.price === undefined || product.price === null) {
        console.warn(`Warning: price is missing for product ${product.name}`);
      }
  
      const price = Number(product.price) || 0;
      const cantidad = Number(product.cantidad) || 0;
  
      return accumulator + price * cantidad;
    }, 0);
  };
  