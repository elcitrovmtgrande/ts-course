import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [loading, setLoading] = useState<boolean>(false);
  
  return (
    <div className="App">
      "T'appuies sur poêt." - Parole de développeur
      (Bon courage)
    </div>
  );
}

export default App;
