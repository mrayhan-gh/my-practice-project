import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Pricing from './Components/Pricing/Pricing';

function App() {
  const name = "Rayhan"
  return (
    <div className="App">
      <NavBar name={name}></NavBar>
      <Pricing></Pricing>
    </div>
  );
}

export default App;
