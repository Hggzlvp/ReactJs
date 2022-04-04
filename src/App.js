import './App.css';
import NavBar from './Componentes/NavBar';
import Footer from './Componentes/Footer';
import ItemsListContainer from './Componentes/Items/ItemsListContainer';



function App() {

  return (
    <div className="App">
     
         <NavBar/>
         <ItemsListContainer/>
         <Footer/>
       
    </div>
  );
}

export default App;
