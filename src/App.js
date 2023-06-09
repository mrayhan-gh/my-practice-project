import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Pricing from './Components/Pricing/Pricing';

function App() {
  const name = "Rayhan"
  return (
    <div className="App">
      <NavBar name={name}></NavBar>
      <h1 className='text-center fs-1 bg-warning p-1'>Best deal of the town!</h1>
      <Pricing></Pricing>
        <div className='container'>
          <div className='row row-cols-3 row-cols-sm-1'>
              <div className='col'>
                      <h3>Col</h3>
              </div>
              <div className='col'>
                      <h3>Col</h3>
              </div>
              <div className='col'>
                      <h3>Col</h3>
              </div>
              <div className='col'>
                      <h3>Col</h3>
              </div>
              <div className='col'>
                      <h3>Col</h3>
              </div>
              <div className='col'>
                      <h3>Col</h3>
              </div>
              <div className='col'>
                      <h3>Col</h3>
              </div>
              <div className='col'>
                      <h3>Col</h3>
              </div>

          </div>
        </div>
  </div>
  );
}

export default App;
