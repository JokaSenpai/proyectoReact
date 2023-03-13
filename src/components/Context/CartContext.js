import React, { createContext, useContext, useState } from "react";
import Swal from "sweetalert2";

export const CartContext = createContext();

export const useCart = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const index = cartItems.findIndex((i) => i.id === item.id);
    if (index === -1) {
      // El producto no existe en el carrito, lo agregamos
      setCartItems((prevCartItems) => [...prevCartItems, {...item, quantity: 1}]);
      Swal.fire({
        icon: "success",
        title: `Agregaste ${item.Nombre} a tu carro!`,
        showConfirmButton: false,
        timer: 2000,
      });
    } else {
      // El producto ya existe en el carrito, actualizamos su cantidad
      const updatedCartItems = [...cartItems];
      updatedCartItems[index].quantity += 1;
      setCartItems(updatedCartItems);
      Swal.fire({
        icon: "success",
        title: `Agregaste otra ${item.Nombre} a tu carro!`,
        showConfirmButton: false,
        timer: 2000,
      });
    }
  };

  const updateCart = (id, quantity) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === id) {
        item.quantity = quantity;
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  const removeFromCart = (item) => {
    const updatedCartItems = cartItems.filter((i) => i.id !== item.id);
    setCartItems(updatedCartItems);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const cartTotalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, updateCart, removeFromCart, clearCart, cartTotalQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;





// import React, { createContext, useContext, useState } from "react";
// import Swal from "sweetalert2";

// export const CartContext = createContext({
//   cart: [],
//   addItem: () => {},
//   removeItem: () => {},
//   clearCart: () => {},
//   increaseQty: () => {},
//   decreaseQty: () => {},
// });

// export const useCart = () => useContext(CartContext);

// const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);

//   const addToCart = (item) => {
//     const index = cartItems.findIndex((i) => i.id === item.id);
//     if (index === -1) {
//       // El producto no existe en el carrito, lo agregamos
//       setCartItems((prevCartItems) => [...prevCartItems, item]);
//       Swal.fire({
//         icon: "success",
//         title: `Agregaste ${item.Nombre} a tu carro!`,
//         showConfirmButton: false,
//         timer: 2000,
//       });
//     } else {
//       // El producto ya existe en el carrito, actualizamos su cantidad
//       const updatedCartItems = [...cartItems];
//       updatedCartItems[index].quantity = item.quantity;
//       setCartItems(updatedCartItems);
//       Swal.fire({
//         icon: "success",
//         title: `Agregaste otra ${item.Nombre} a tu carro!`,
//         showConfirmButton: false,
//         timer: 2000,
//       });
//     }
//   };

//   const updateCart = (id, quantity) => {
//     const updatedCartItems = cartItems.map((item) => {
//       if (item.id === id) {
//         item.quantity = quantity;
//       }
//       return item;
//     });
//     setCartItems(updatedCartItems);
//   };

//   const removeFromCart = (item) => {
//     const updatedCartItems = cartItems.filter((i) => i.id !== item.id);
//     setCartItems(updatedCartItems);
//   };

//   const clearCart = () => {
//     setCartItems([]);
//   };

//   return (
//     <CartContext.Provider value={{ cartItems, addToCart, updateCart, removeFromCart, clearCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export default CartProvider;


