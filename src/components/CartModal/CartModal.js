import React, { useContext } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CartItemList from "../CardItemList/CardItemList";

import { CartContext } from "../Context/CartContext";

const CartModal = ({ isOpen, onClose }) => {
  const { cartItems, clearCart, removeFromCart } = useContext(CartContext);

  const total = cartItems.reduce((acc, item) => acc + item.Precio * item.quantity, 0);

  return (
    <Modal
      open={Boolean(isOpen)}
      onClose={onClose}
      aria-labelledby="modal-cart"
      aria-describedby="modal-cart"
    >
      <Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "400px", bgcolor: "background.paper", boxShadow: 24, p: 4 }}>
        <Typography variant="h5" component="h2" align="center" gutterBottom>
          Carrito de compras
        </Typography>
        {cartItems.length > 0 ? (
          <CartItemList cartItems={cartItems} removeFromCart={removeFromCart} />
        ) : (
          <Typography variant="body1" align="center" gutterBottom>
            No hay productos en el carrito.
          </Typography>
        )}
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
        <Button variant="outlined" onClick={onClose} sx={{ position: "absolute", top: "12px", right: "12px" }}>
          X
        </Button>
      </Box>
    </Modal>
  );
};


export default CartModal;




// import React, { useState, useEffect, useContext } from "react";
// import Modal from "@mui/material/Modal";
// import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import CartItemList from "../CardItemList/CardItemList";

// import { CartContext } from "../Context/CartContext";

// const CartModal = ({ onClose }) => {
//   const { cartItems, clearCart, removeFromCart } = useContext(CartContext);
//   const [isOpen, setIsOpen] = useState(false);

//   useEffect(() => {
//     setIsOpen(true);
//     return () => setIsOpen(false);
//   }, []);

//   const total = cartItems.reduce((acc, item) => acc + item.Precio * item.quantity, 0);

//   return (
//     <>
//       {isOpen && (
//         <Modal
//           open={isOpen}
//           onClose={onClose}
//           aria-labelledby="modal-cart"
//           aria-describedby="modal-cart"
//         >
//           <Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "400px", bgcolor: "background.paper", boxShadow: 24, p: 4 }}>
//             <Typography variant="h5" component="h2" align="center" gutterBottom>
//               Carrito de compras
//             </Typography>
//             {cartItems.length > 0 ? (
//               <CartItemList cartItems={cartItems} removeFromCart={removeFromCart} />
//             ) : (
//               <Typography variant="body1" align="center" gutterBottom>
//                 No hay productos en el carrito.
//               </Typography>
//             )}
//             <Typography variant="h6" align="right" gutterBottom>
//               Total: ${total}
//             </Typography>
//             <div style={{ display: "flex", justifyContent: "space-between" }}>
//               <Button variant="outlined" onClick={clearCart}>
//                 Vaciar carrito
//               </Button>
//               <Button variant="contained" onClick={onClose}>
//                 Continuar comprando
//               </Button>
//             </div>
//           </Box>
//         </Modal>
//       )}
//     </>
//   );
// };

// export default CartModal;










// import React, { useContext } from "react";
// import Modal from "@mui/material/Modal";
// import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import CartItemList from "../CardItemList/CardItemList";

// import { CartContext } from "../Context/CartContext";

// const CartModal = ({ isOpen, onClose }) => {
//   const { items, total, clearCart, removeFromCart } = useContext(CartContext);

//   return (
//     <Modal
//       open={isOpen}
//       onClose={onClose}
//       aria-labelledby="modal-cart"
//       aria-describedby="modal-cart"
//     >
//       <Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "400px", bgcolor: "background.paper", boxShadow: 24, p: 4 }}>
//         <Typography variant="h5" component="h2" align="center" gutterBottom>
//           Carrito de compras
//         </Typography>
//         {items.length > 0 ? (
//           <CartItemList cartItems={items} removeFromCart={removeFromCart} />
//         ) : (
//           <Typography variant="body1" align="center" gutterBottom>
//             No hay productos en el carrito.
//           </Typography>
//         )}
//         <Typography variant="h6" align="right" gutterBottom>
//           Total: ${total}
//         </Typography>
//         <div style={{ display: "flex", justifyContent: "space-between" }}>
//           <Button variant="outlined" onClick={clearCart}>
//             Vaciar carrito
//           </Button>
//           <Button variant="contained" onClick={onClose}>
//             Continuar comprando
//           </Button>
//         </div>
//       </Box>
//     </Modal>
//   );
// };

// export default CartModal;












// import React, { useContext } from "react";
// import Modal from "@mui/material/Modal";
// import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
// import IconButton from "@mui/material/IconButton";
// import CloseIcon from "@mui/icons-material/Close";
// import CartItemList from "./CartItemList";
// import { CartContext } from "../Context/CartContext";

// const CardModal = ({ showModal, closeModal, selectedItem }) => {
//   const { items, removeFromCart } = useContext(CartContext);

//   const handleAddToCart = () => {
//     addToCart(selectedItem);
//     closeModal();
//   };

//   return (
//     <Modal open={showModal} onClose={closeModal}>
//       <Box sx={{ width: "80vw", maxWidth: 800, mx: "auto", my: 4, p: 2 }}>
//         <IconButton
//           aria-label="close"
//           onClick={closeModal}
//           sx={{ position: "absolute", top: 0, right: 0 }}
//         >
//           <CloseIcon />
//         </IconButton>

//         <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}>
//           <Box
//             sx={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               flex: 1,
//             }}
//           >
//             <img
//               src={selectedItem.img}
//               alt={selectedItem.Nombre}
//               style={{ maxWidth: "100%" }}
//             />
//           </Box>

//           <Box sx={{ flex: 1, p: { xs: 2, md:
















// import React, { useContext } from "react";
// import Modal from "@mui/material/Modal";
// import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
// import IconButton from "@mui/material/IconButton";
// import CloseIcon from "@mui/icons-material/Close";
// import { CartContext } from "../Context/CartContext";

// const CardModal = ({ showModal, closeModal, selectedItem, onClose }) => {
//   const { addToCart } = useContext(CartContext);

//   const handleAddToCart = () => {
//     addToCart(selectedItem);
//     closeModal();
//   };
  

//   return (
//     <Modal open={showModal} onClose={onClose}>
//       <Box sx={{ width: "80vw", maxWidth: 800, mx: "auto", my: 4, p: 2 }}>
//         <IconButton
//           aria-label="close"
//           onClick={closeModal}
//           sx={{ position: "absolute", top: 0, right: 0 }}
//         >
//           <CloseIcon />
//         </IconButton>

//         <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}>
//           <Box
//             sx={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               flex: 1,
//             }}
//           >
//             <img
//               src={selectedItem.img}
//               alt={selectedItem.Nombre}
//               style={{ maxWidth: "100%" }}
//             />
//           </Box>

//           <Box sx={{ flex: 1, p: { xs: 2, md: 4 } }}>
//             <Typography variant="h4" component="h1" gutterBottom>
//               {selectedItem.Nombre}
//             </Typography>

//             <Typography variant="body1" component="p" gutterBottom>
//               Descripción: {selectedItem.Descripcion}
//             </Typography>

//             <Typography variant="body1" component="p" gutterBottom>
//               Categoría: {selectedItem.Categoria}
//             </Typography>

//             <Typography variant="body1" component="p" gutterBottom>
//               Personaje: {selectedItem.Personaje}
//             </Typography>

//             <Typography variant="body1" component="p" gutterBottom>
//               Tamaño (cm2): {selectedItem.Tamaño}
//             </Typography>

//             <Typography variant="h6" component="h2">
//               Precio: ${selectedItem.Precio}
//             </Typography>

//             <button onClick={handleAddToCart}>Agregar al carrito</button>
//           </Box>
//         </Box>
//       </Box>
//     </Modal>
//   );
// };

// export default CardModal;







