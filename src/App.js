import './App.css';

import NavBar from './Componentes/NavBar';
import Footer from './Componentes/Footer';
import ItemsListContainer from './Componentes/Items/ItemsListContainer';
import ItemDetailContainer from './Componentes/Items/ItemDetailContainer';
import CartContextProvider from "../src/Context/CartContext";


import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from './Componentes/Cart';



function App() {

  return (
    
    <CartContextProvider>

      <BrowserRouter>

        <NavBar/>

          <Routes>    

            <Route exact path="/" element={<ItemsListContainer />} />
            <Route exact path="/:category" element={<ItemsListContainer />} />
            <Route exact path="/detalles/:id" element={<ItemDetailContainer />} />
            <Route exact path="/Cart" element={<Cart/>} />

            
          </Routes>

        <Footer/>

      </BrowserRouter>

    </CartContextProvider>
    
  );
}

export default App;
