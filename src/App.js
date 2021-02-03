import './App.css';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const App = () => {


  const data = [
    { name: 'Page A', uv: 400, },
    { name: 'Page A', uv: 100, },
    { name: 'Page A', uv: 250, },
    { name: 'Page A', uv: 500, },
    { name: 'Page A', uv: 50, },
    { name: 'Page A', uv: 300, },
  ];


  return (
    <div className="App">
      <header className="App-header">
        <h2>Comming chart.....</h2><br /><br />
        <LineChart width={800} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </header>
    </div>
  );
}

export default App;
