import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useCart } from "../Context/CartContext";

const CartItemList = ({ cartItems}) => {
  const { removeFromCart, updateCart } = useCart();
  const [quantities, setQuantities] = useState(
    cartItems.reduce((acc, item) => ({ ...acc, [item.id]: item.quantity }), {})
  );

  const handleAddItem = (item) => {
    if (quantities[item.id] < 5) {
      setQuantities((prevQuantities) => ({
        ...prevQuantities,
        [item.id]: prevQuantities[item.id] + 1,
      }));
      updateCart(item, quantities[item.id] + 1);
    } else {
      alert("No puede ingresar mas de 5 figuras de este modelo");
    }
  };

  const handleRemoveItem = (item) => {
    if (quantities[item.id] > 1) {
      setQuantities((prevQuantities) => ({
        ...prevQuantities,
        [item.id]: prevQuantities[item.id] - 1,
      }));
      updateCart(item, quantities[item.id] - 1);
    } else {
      removeFromCart(item);
    }
  };

  return (
    <ul className="cartItemList">
      {cartItems.map((item) => (
        <li key={item.id} className="cartItem">
          <div>
            <img
              src={item.img}
              alt={item.Nombre}
              style={{ maxWidth: "100%" }}
            />
          </div>
          <div className="cartItemDetails">
            <div>{item.Nombre}</div>
            <div className="cartItemQuantity">
              <IconButton
                aria-label="Quitar"
                onClick={() => handleRemoveItem(item)}
              >
                <RemoveIcon />
              </IconButton>
              Cantidad: {quantities[item.id]}
              <IconButton
                aria-label="Agregar"
                onClick={() => handleAddItem(item)}
              >
                <AddIcon />
              </IconButton>
              <IconButton
                aria-label="Eliminar"
                onClick={() => removeFromCart(item)}
              >
                <DeleteIcon />
              </IconButton>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CartItemList;


