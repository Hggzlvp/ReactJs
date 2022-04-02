import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Componentes/NavBar';
import Footer from './Componentes/Footer';
import ItemsListContainer from "Items/ItemsListContainer";


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
