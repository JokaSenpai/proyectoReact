import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// IMPORTAR PAGES
import Home from "./Pages/Home/Home";
import Contacto from "./Pages/Contacto/Contacto";
import FigurasAnime from "./Pages/FigurasAnime/FigurasAnime";
import FigurasComic from "./Pages/FigurasComic/FigurasComic";
import Otros from "./Pages/Otros/Otros";

// IMPORTAR COMPONENTES
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import CardListComponent from "./components/CardListComponent/CardListComponent";



function App() {
  return (
    <BrowserRouter>
      <div className="contentxd">
        <header className="headerContent">
          <Navbar />
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="/FigurasAnime" element={<FigurasAnime />} />
          <Route path="/FigurasComic" element={<FigurasComic />} />
          <Route path="/Otros" element={<Otros />} />
        </Routes>
        <ItemListContainer>
          <h1>
            Bienvenido a ToriShop, la mejor tienda para comprar figuras
            nuevas/usadas!
          </h1>
          <CardListComponent/>
        </ItemListContainer>
      </div>
    </BrowserRouter>
  );
}

export default App;
