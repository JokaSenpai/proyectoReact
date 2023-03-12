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
    console.log("ahi va la cosa", totalItems);
    setIsModalOpen(true);
  };

  return (
    <>
      <div onClick={handleCartClick}>
        <Badge badgeContent={totalItems} color="secondary">
          <ShoppingCartIcon />
        </Badge>
      </div>
      <CartModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default CartWidget;






//Anda pal orto

// import React, { useContext } from "react";
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import Badge from "@mui/material/Badge";
// import { CartContext } from "../Context/CartContext";

// const CartWidget = () => {
//   const { cart } = useContext(CartContext);

//   const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

//   return (
//     <div>
//       <Badge badgeContent={totalItems} color="secondary">
//         <ShoppingCartIcon />
//       </Badge>
//     </div>
//   );
// };

// export default CartWidget;





// import React, {useContext, useState} from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
// import "./CartWidget.css"
// import { CartContext } from "../Context/CartContext";

// const CartWidget = () => {
//     const { cartItems } = useContext(CartContext);
//     const [isModalVisible, setIsModalVisible] = useState(false);
  
//     const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  
//     const handleCartClick = () => {
//         console.log(cartItems);
//       setIsModalVisible(true);
//     };
  
//     const handleModalClose = () => {
//       setIsModalVisible(false);
//     };
  
//     return (
//       <>
//         <button className="buttonCart" onClick={handleCartClick}>
//           <FontAwesomeIcon icon={faCartShopping} className="cartIcon" />
//           {cartItemCount !== 0 && <span>{cartItemCount}</span>}
//         </button>
//         {isModalVisible && (
//           <div className="cartModal">
//             <div className="cartModalContent">
//               <span className="close" onClick={handleModalClose}>
//                 &times;
//               </span>
//               <h3>Carrito de compras</h3>
//               {cartItems.length > 0 ? (
//                 <ul className="cartItemList">
//                   {cartItems.map((item) => (
//                     <li key={item.id}>
//                       <div className="cartItem">
//                         <span>{item.name}</span>
//                         <div className="cartItemQuantity">
//                           <button>-</button>
//                           <span>{item.quantity}</span>
//                           <button>+</button>
//                         </div>
//                         <span>${item.price * item.quantity}</span>
//                       </div>
//                     </li>
//                   ))}
//                 </ul>
//               ) : (
//                 <p>No hay productos en el carrito.</p>
//               )}
//             </div>
//           </div>
//         )}
        
//       </>
      
//     );
    
//   };
  
//   export default CartWidget;

// const CartWidget = () => {
//     const { cartItems } = useContext(CartContext);
//     const [isModalVisible, setIsModalVisible] = useState(false);
  
//     const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  
//     const handleCartClick = () => {
//       setIsModalVisible(true);
//     };
  
//     const handleModalClose = () => {
//       setIsModalVisible(false);
//     };
  
//     return (
//       <>
//         <button className="buttonCart" onClick={handleCartClick}>
//           <FontAwesomeIcon icon={faCartShopping} className="cartIcon" />
//           {cartItemCount ? cartItemCount : ""}
//         </button>
//         {isModalVisible && (
//           <div className="cartModal">
//             <div className="cartModalContent">
//               <span className="close" onClick={handleModalClose}>
//                 &times;
//               </span>
//               <h3>Carrito de compras</h3>
//               {cartItems.length > 0 ? (
//                 <ul className="cartItemList">
//                   {cartItems.map((item) => (
//                     <li key={item.id}>
//                       <div className="cartItem">
//                         <span>{item.name}</span>
//                         <div className="cartItemQuantity">
//                           <button onClick={() => item.quantity > 1 && item.quantity--}>-</button>
//                           <span>{item.quantity}</span>
//                           <button onClick={() => item.quantity++}>+</button>
//                         </div>
//                         <span>${item.price * item.quantity}</span>
//                       </div>
//                     </li>
//                   ))}
//                 </ul>
//               ) : (
//                 <p>No hay productos en el carrito.</p>
//               )}
//             </div>
//           </div>
//         )}
//       </>
//     );
//   };
  
//   export default CartWidget;








//   FUNCA BIEN PERO FALTAN COSAS




// const CartWidget = () => {

//    const { cartItems } = useContext(CartContext);
//   const [showModal, setShowModal] = useState(false);

//   const handleClick = () => {
//     setShowModal(true);
//   };

//   const handleClose = () => {
//     setShowModal(false);
//   };

//   return (
//     <div>
//       <button onClick={handleClick} className="buttonCart">
//         <FontAwesomeIcon icon={faCartShopping}  className="cartIcon" />
//         {cartItems.length}
//       </button>
//       </div>
//   )
//   }


// export default CartWidget;