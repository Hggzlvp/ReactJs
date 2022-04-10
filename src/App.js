import './App.css';
import NavBar from './Componentes/NavBar';
import Footer from './Componentes/Footer';
import ItemsListContainer from './Componentes/Items/ItemsListContainer';
import ItemDetailContainer from './Componentes/Items/ItemDetailContainer';



function App() {

  return (
    <div className="App">
     
         <NavBar/>
         <ItemDetailContainer/>
         <ItemsListContainer/>
         <Footer/>
       
    </div>
  );
}

export default App;
