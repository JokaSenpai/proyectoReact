import React, { useContext, useState } from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from "@mui/material/Badge";
import { CartContext } from "../Context/CartContext";
import CartModal from "../CartModal/CartModal";

const CartWidget = () => {
  const { cart } = useContext(CartContext);
  const totalItems = cart ? cart.reduce((acc, item) => acc + item.quantity, 0) : 0;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCartClick = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <div onClick={handleCartClick}>
        <Badge badgeContent={"Carrito"} color="secondary">
          <ShoppingCartIcon style={{color:"white", height:"50px"}} />
        </Badge>
      </div>
      <CartModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default CartWidget;

