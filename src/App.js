import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";


// IMPORTAR PAGES
import Home from "./Pages/Home/Home";
import Contacto from "./Pages/Contacto/Contacto"
import FigurasAnime from "./Pages/FigurasAnime/FigurasAnime";
import FigurasComic from "./Pages/FigurasComic/FigurasComic";
import FormularioCompra from "./Pages/FormularioCompra/FormularioCompra";

// IMPORTAR COMPONENTES
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import CardDetails from "./Pages/CardDetails/CardDetails";
import CartProvider from "./components/Context/CartContext";



const App = () => {
const [cartItems, setCartItems] = useState([]);
const addToCart = (product) =>{
  setCartItems([...cartItems, product]);
}

  return (
    <BrowserRouter>
    <CartProvider value={{cartItems,addToCart}}>
      <div className="contentxd">
        <header className="headerContent">
          <Navbar />
        </header>
        <ItemListContainer>
          <h1>
            Bienvenido a ToriShop, la mejor tienda para comprar figuras
            nuevas/usadas!
          </h1>
        </ItemListContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="/Categorias/FigurasAnime/" element={<FigurasAnime />} />
          <Route path="/Categorias/FigurasComic/" element={<FigurasComic />} />
          <Route path="/detail/:id" element={<CardDetails />} />
          <Route path="/FinalizarCompra/" element={<FormularioCompra/>}/>
        </Routes>
      
      </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
