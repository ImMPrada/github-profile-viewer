import React from 'react';
import { MainContainer, Header, CardWithLegend } from './components'
import { GlobalProvider } from './contexts/GlobalContext';

const App = () => {
  return (
    <div className="App">
      <GlobalProvider>
        <MainContainer>
          <Header />
          <CardWithLegend />
        </MainContainer>
      </GlobalProvider>
    </div>
  );
}

export default App;
