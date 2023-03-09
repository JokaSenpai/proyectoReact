import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";


// IMPORTAR PAGES
import Home from "./Pages/Home/Home";
import Contacto from "./Pages/Contacto/Contacto";
import FigurasAnime from "./Pages/FigurasAnime/FigurasAnime";
import FigurasComic from "./Pages/FigurasComic/FigurasComic";

// IMPORTAR COMPONENTES
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import CardDetails from "./Pages/CardDetails/CardDetails";


const App = () => {
  return (
    <BrowserRouter>
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
          <Route path="/FigurasAnime" element={<FigurasAnime />} />
          <Route path="/FigurasComic" element={<FigurasComic />} />
          <Route path="/detail/:id" element={<CardDetails />} />
        </Routes>
      
      </div>
    </BrowserRouter>
  );
}

export default App;
