import logo from './logo.svg';
import './App.css';

import writers from './writers';

function App() {
  return (
    <div>
      <h1>Writer Profiles</h1>
      <div className="contaner">
        {writers.map(writer => (
        <div className="card">
          <img
           src={`/images/${writer.avatar}.png`}
          width="300px"
          height="300px" 
          alt=""
          />
          <div className="textGroup">
            <h3>{writer.name}</h3>
            <p>{writer.email}</p>
            <p>{writer.phone}</p>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
}

export default App;
