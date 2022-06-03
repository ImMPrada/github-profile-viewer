import React from 'react';
import { GlobalProvider } from './contexts/GlobalContext';

function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <h1>HOLI</h1>
      </GlobalProvider>
    </div>
  );
}

export default App;
