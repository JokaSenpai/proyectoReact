import React, { useContext } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CartItemList from "../CardItemList/CardItemList";
import { CartContext } from "../Context/CartContext";

const CartModal = ({ isOpen, onClose }) => {
  const { cartItems, clearCart, removeFromCart, increaseQty, decreaseQty } = useContext(CartContext);

  const total = cartItems.reduce((acc, item) => acc + item.Precio * item.quantity, 0);

  const handleIncreaseQty = (itemId) => {
    const cartItem = cartItems.find((item) => item.id === itemId);
    if (cartItem.quantity < 5) {
      increaseQty(itemId);
    } else {
      alert("No se puede ingresar más de 5 figuras del mismo modelo");
    }
  };

  const handleDecreaseQty = (itemId) => {
    const cartItem = cartItems.find((item) => item.id === itemId);
    if (cartItem.quantity > 1) {
      decreaseQty(itemId);
    } else {
      removeFromCart(itemId);
    }
  };

  return (
    <Modal
      open={Boolean(isOpen)}
      onClose={onClose}
      aria-labelledby="modal-cart"
      aria-describedby="modal-cart"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "400px",
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography variant="h5" component="h2" align="center" gutterBottom>
          Carrito de compras
        </Typography>
        {cartItems.length > 0 ? (
          <>
            <CartItemList
              cartItems={cartItems}
              removeFromCart={removeFromCart}
              handleIncreaseQty={handleIncreaseQty}
              handleDecreaseQty={handleDecreaseQty}
            />
            <Typography variant="h6" align="right" gutterBottom>
              Total: ${total}
            </Typography>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "16px" }}>
              <Button variant="outlined" onClick={clearCart}>
                Vaciar carrito
              </Button>
              <Button variant="contained" onClick={onClose}>
                Continuar comprando
              </Button>
            </div>
          </>
        ) : (
          <Typography variant="body1" align="center" gutterBottom>
            No hay productos en el carrito.
          </Typography>
        )}
        <Button
          variant="outlined"
          onClick={onClose}
          sx={{ position: "absolute", top: "12px", right: "12px" }}
        >
          X
        </Button>
      </Box>
    </Modal>
  );
};

export default CartModal;








// import React, { useContext } from "react";
// import Modal from "@mui/material/Modal";
// import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import CartItemList from "../CardItemList/CardItemList";

// import { CartContext } from "../Context/CartContext";

// const CartModal = ({ isOpen, onClose }) => {
//   const { cartItems, clearCart, removeFromCart, increaseQty, decreaseQty } = useContext(CartContext);

//   const total = cartItems.reduce((acc, item) => acc + item.Precio * item.quantity, 0);
//   const handleIncreaseQty = (itemId) => {
//     const cartItem = cartItems.find((item) => item.id === itemId);
//     if (cartItem.quantity < 5) {
//       increaseQty(itemId);
//     } else {
//       alert("No se puede ingresar más de 5 figuras del mismo modelo");
//     }
//   };

//   const handleDecreaseQty = (itemId) => {
//     const cartItem = cartItems.find((item) => item.id === itemId);
//     if (cartItem.quantity > 1) {
//       decreaseQty(itemId);
//     } else {
//       removeFromCart(itemId);
//     }
//   };

//   return (
//     <Modal
//       open={Boolean(isOpen)}
//       onClose={onClose}
//       aria-labelledby="modal-cart"
//       aria-describedby="modal-cart"
//     >
//       <Box
//         sx={{
//           position: "absolute",
//           top: "50%",
//           left: "50%",
//           transform: "translate(-50%, -50%)",
//           width: "400px",
//           bgcolor: "background.paper",
//           boxShadow: 24,
//           p: 4,
//         }}
//       >
//         <Typography variant="h5" component="h2" align="center" gutterBottom>
//           Carrito de compras
//         </Typography>
//         {cartItems.length > 0 ? (
//           <CartItemList
//             cartItems={cartItems}
//             removeFromCart={removeFromCart}
//             handleIncreaseQty={handleIncreaseQty}
//             handleDecreaseQty={handleDecreaseQty}
//           />
//         ) : (
//           <Typography variant="body1" align="center" gutterBottom>
//             No hay productos en el carrito.
//           </Typography>
//         )}
//         <Typography variant="h6" align="right" gutterBottom>
//           Total: ${total}
//         </Typography>
//         <div style={{ display: "flex", justifyContent: "space-between", marginTop: "16px" }}>
//           <Button variant="outlined" onClick={clearCart}>
//             Vaciar carrito
//           </Button>
//           <Button variant="contained" onClick={onClose}>
//             Continuar comprando
//           </Button>
//         </div>
//         <Button
//           variant="outlined"
//           onClick={onClose}
//           sx={{ position: "absolute", top: "12px", right: "12px" }}
//         >
//           X
//         </Button>
//       </Box>
//     </Modal>
//   );
// };

// export default CartModal;









