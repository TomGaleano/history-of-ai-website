import React, { useState, useEffect } from 'react';
import { getDecades } from './services/api';
import DecadeView from './components/DecadeView';
import NavBar from './components/NavBar';

function App() {
  const [decades, setDecades] = useState({});
  const [selectedDecade, setSelectedDecade] = useState('1950s');

  useEffect(() => {
    getDecades().then((response) => {
      setDecades(response.data);
    });
  }, []);

  const decadeIds = Object.keys(decades);

  return (
    <div>
      <h1>History of Vibe Coding</h1>
      <DecadeView decade={decades[selectedDecade]} />
      <NavBar
        decades={decadeIds}
        onSelectDecade={setSelectedDecade}
        selectedDecade={selectedDecade}
      />
    </div>
  );
}

export default App;