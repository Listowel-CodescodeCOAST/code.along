import { useEffect, useState } from 'react';
import ProfileForm from './component/ProfileForm';
// import writers from './writers';
import ProfileCard from './ProfileCard';

function App() {
  const [allProfile, setAllprofile] = useState([
    {
      firstName: "Listowel",
      lastName: "ADU",
      email: "listowe.adu.com",
      phone: "+200 000 123 012",
    },
  ]);
  const submit = (profile) => {
    const arr = allProfile;
    arr.push(profile);
    setAllprofile(arr);
  }

  return (
    <div>
      <h1>Writer Profiles</h1>
      <div className="contaner">
        <ProfileForm submit={submit}/>
        {allProfile.map((writer) => (
          <ProfileCard key={writer.id} writer={writer} />
        ))}
      </div>
    </div>
  );
}

export default App;
