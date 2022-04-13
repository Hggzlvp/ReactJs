import './App.css';

import NavBar from './Componentes/NavBar';
import Footer from './Componentes/Footer';
import ItemsListContainer from './Componentes/Items/ItemsListContainer';
import ItemDetailContainer from './Componentes/Items/ItemDetailContainer';

import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {

  return (
    <>
      <BrowserRouter>

        <NavBar/>

          <Routes>    

            <Route exact path="/" element={<ItemsListContainer />} />
            <Route exact path="/:category" element={<ItemsListContainer />} />
            <Route exact path="/detalles/:id" element={<ItemDetailContainer />} />
            
          </Routes>

        <Footer/>

      </BrowserRouter>
    </>
    
  );
}

export default App;
