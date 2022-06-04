import React from 'react';
import { MainContainer, Header } from './components'
import { GlobalProvider } from './contexts/GlobalContext';

const App = () => {
  return (
    <div className="App">
      <GlobalProvider>
        <MainContainer>
          <Header />
        </MainContainer>
      </GlobalProvider>
    </div>
  );
}

export default App;
