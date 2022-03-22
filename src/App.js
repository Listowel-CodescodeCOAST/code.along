import './App.css';

import writers from './writers';
import { ProfileCard } from './ProfileCard';

function App() {
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
