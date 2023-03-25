import React, {  useState } from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from "@mui/material/Badge";
import CartModal from "../CartModal/CartModal";

const CartWidget = () => {


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

