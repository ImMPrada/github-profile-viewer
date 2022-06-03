import React from 'react';
import { Header } from './components'
import { GlobalProvider } from './contexts/GlobalContext';

function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <Header />
      </GlobalProvider>
    </div>
  );
}

export default App;
