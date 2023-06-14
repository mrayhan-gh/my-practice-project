import { Tooltip } from 'react-bootstrap';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Pricing from './Components/Pricing/Pricing';
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts';

function App() {
 const data = [
        {name: 'Physcis', uv: 400, pv: 2400, amt: 2400},
        {name: 'Chemistry', uv: 450, pv: 2500, amt: 2500 },
        {name: 'English', uv: 600, pv: 2600, amt: 2600},
        {name: 'Bangla', uv: 700, pv: 2700, amt: 2700 },
        {name: 'Math', uv: 800, pv: 2900, amt: 2900 },
        {name: 'ICT', uv: 900, pv: 3000, amt: 3000 },
        {name: 'Biology', uv: 1000, pv: 3100, amt: 3100}
]

  return (
    <div className="App">
      <NavBar></NavBar>
      <h1 className='text-center fs-1 bg-warning p-1'>Best deal of the town!</h1>
      <Pricing></Pricing>
      <LineChart width={1000} height={500} data={data}>

        <Line dataKey='uv' type='monotone' stroke='#8884d8'></Line>
        <CartesianGrid stroke='#ccc'></CartesianGrid>
        <XAxis dataKey='name'></XAxis>
        <YAxis ></YAxis>
        <Tooltip></Tooltip>

      </LineChart>

  </div>
  );
}

export default App;
