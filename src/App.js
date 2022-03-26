import logo from './logo.svg';
import './App.css';
import NavBar from './Componentes/NavBar';
import ItemsListContainer from './Componentes/ItemsListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         <NavBar/>
         <ItemsListContainer/>
        </p>
      </header>
    </div>
  );
}

export default App;
