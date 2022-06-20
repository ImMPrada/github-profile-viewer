import React from 'react';
import { 
  MainContainer, 
  Header, 
  SearchBox, 
  ProfileCard,
  ErrorMessage,
} from './components'
import { GlobalProvider } from './contexts/GlobalContext';

const App = () => {
  return (
    <div className="App">
      <GlobalProvider>
        <MainContainer>
          <Header />
          <SearchBox />
          <ErrorMessage />
          <ProfileCard />
        </MainContainer>
      </GlobalProvider>
    </div>
  );
}

export default App;
