// import './App.css';
import { useEffect, useState } from 'react';
// import writers from './writers';
import { ProfileCard } from './ProfileCard';

function App() {
  const [writers, setWriter] = useState([]);

  useEffect(() => {
    const getWriters =async () => {
      const response = await fetch("/writers.json");
      const data = await response.json();
      setWriter(data);
    };
    getWriters();
  }, []);
  return (
    <div>
      <h1>Writer Profiles</h1>
      <div className="contaner">
        {writers.map((writer) => (
          <ProfileCard writer={writer}/>
        ))}
      </div>
    </div>
  );
}

export default App;
