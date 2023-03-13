// import React, { useState, useEffect } from "react";
// import IconButton from "@mui/material/IconButton";
// import DeleteIcon from "@mui/icons-material/Delete";
// import AddIcon from "@mui/icons-material/Add";
// import RemoveIcon from "@mui/icons-material/Remove";
// import { useCart } from "../Context/CartContext";

// const CartItemList = ({ cartItems }) => {
//   const { removeFromCart, updateCart } = useCart();
//   const [quantities, setQuantities] = useState(
//     cartItems.reduce((acc, item) => ({ ...acc, [item.id]: item.quantity }), {})
//   );

//   useEffect(() => {
//     setQuantities(
//       cartItems.reduce((acc, item) => ({ ...acc, [item.id]: item.quantity }), {})
//     );
//   }, [cartItems]);

//   const handleAddItem = (item) => {
//     if (quantities[item.id] < 5) {
//       const updatedQuantity = quantities[item.id] + 1;
//       setQuantities((prevQuantities) => ({
//         ...prevQuantities,
//         [item.id]: updatedQuantity,
//       }));
//       updateCart(item.id, updatedQuantity); // cambio aquí
//     } else {
//       alert("No puede ingresar mas de 5 figuras de este modelo");
//     }
//   };
  
//   const handleRemoveItem = (item) => {
//     if (quantities[item.id] > 1) {
//       const updatedQuantity = quantities[item.id] - 1;
//       setQuantities((prevQuantities) => ({
//         ...prevQuantities,
//         [item.id]: updatedQuantity,
//       }));
//       updateCart(item.id, updatedQuantity); // cambio aquí
//     } else {
//       removeFromCart(item);
//     }
//   };

//   return (
//     <ul className="cartItemList">
//       {cartItems.map((item) => (
//         <li key={item.id} className="cartItem">
//           <div>
//             <img
//               src={item.img}
//               alt={item.Nombre}
//               style={{ maxWidth: "100%" }}
//             />
//           </div>
//           <div className="cartItemDetails">
//             <div>{item.Nombre}</div>
//             <div className="cartItemQuantity">
//               <IconButton
//                 aria-label="Quitar"
//                 onClick={() => handleRemoveItem(item)}
//               >
//                 <RemoveIcon />
//               </IconButton>
//               Cantidad: {quantities[item.id]}
//               <IconButton
//                 aria-label="Agregar"
//                 onClick={() => handleAddItem(item)}
//               >
//                 <AddIcon />
//               </IconButton>
//               <IconButton
//                 aria-label="Eliminar"
//                 onClick={() => removeFromCart(item)}
//               >
//                 <DeleteIcon />
//               </IconButton>
//             </div>
//           </div>
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default CartItemList;


import React, { useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useCart } from "../Context/CartContext";

const CartItemList = ({ cartItems }) => {
  const { removeFromCart, updateCart } = useCart();
  const [quantities, setQuantities] = useState(
    cartItems.reduce((acc, item) => ({ ...acc, [item.id]: item.quantity }), {})
  );

  useEffect(() => {
    setQuantities(
      cartItems.reduce((acc, item) => ({ ...acc, [item.id]: item.quantity }), {})
    );
  }, [cartItems]);

  const handleAddItem = (item) => {
    if (quantities[item.id] < 5) {
      const updatedQuantity = quantities[item.id] + 1;
      console.log(quantities[item.id]);
      setQuantities((prevQuantities) => ({
        ...prevQuantities,
        [item.id]: updatedQuantity,
      }));
      updateCart(item.id, updatedQuantity);
    } else {
      alert("No puede ingresar mas de 5 figuras de este modelo",);
    }
  };
  
  const handleRemoveItem = (item) => {
    if (quantities[item.id] > 1) {
      const updatedQuantity = quantities[item.id] - 1;
      setQuantities((prevQuantities) => ({
        ...prevQuantities,
        [item.id]: updatedQuantity,
      }));
      updateCart(item.id, updatedQuantity);
    } else {
      removeFromCart(item);
    }
  };

  return (
    <table className="cartItemList">
      <thead>
        <tr>
          <th>Imagen</th>
          <th>Nombre</th>
          <th>Precio</th>
          <th style={{padding:"10px"}}>Cantidad</th>
          <th>Eliminar</th>
        </tr>
      </thead>
      <tbody>
        {cartItems.map((item) => (
          <tr key={item.id} className="cartItem">
            <td>
              <img
                src={item.img}
                alt={item.Nombre}
                style={{ maxWidth: "100%", height: "100px" }}
              />
            </td>
            <td>{item.Nombre}</td>
            <td style={{padding:"10px"}}>${item.Precio}</td>
            <td style={{ display: "flex", alignItems: "center", justifyContent: "center", paddingTop:"30px" }}>
              <IconButton
                aria-label="Quitar"
                onClick={() => handleRemoveItem(item)}
              >
                <RemoveIcon />
              </IconButton>
              {quantities[item.id]}
              <IconButton
                aria-label="Agregar"
                onClick={() => handleAddItem(item)}
              >
                <AddIcon />
              </IconButton>
            </td>
            <td>
              <IconButton
                aria-label="Eliminar"
                onClick={() => removeFromCart(item)}
              >
                <DeleteIcon />
              </IconButton>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CartItemList;




