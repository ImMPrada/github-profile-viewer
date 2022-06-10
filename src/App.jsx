import React from 'react';
import { MainContainer, Header, SearchBox, CardWithLegend, GitCardFooter } from './components'
import { GlobalProvider } from './contexts/GlobalContext';

const App = () => {
  return (
    <div className="App">
      <GlobalProvider>
        <MainContainer>
          <Header />
          <SearchBox />
          <CardWithLegend />
          <GitCardFooter />
        </MainContainer>
      </GlobalProvider>
    </div>
  );
}

export default App;
