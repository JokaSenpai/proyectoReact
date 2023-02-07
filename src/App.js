import './App.css';
import Barra from './components/Navbar';
import ItemListContainer from './components/ItemListContainer/itemListContainer';

function App() {
  return (
    <div className='contentxd'>

      <header className='headerContent'>
        <Barra/>
      </header>
      <ItemListContainer><h1> Bienvenido a ToriShop, la mejor tienda para comprar figuras nuevas/usadas!</h1> </ItemListContainer>
    </div>
  );
}

export default App;
