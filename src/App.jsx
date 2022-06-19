import React from 'react';
import { 
  MainContainer, 
  Header, 
  SearchBox, 
  ProfileCard,
} from './components'
import { GlobalProvider } from './contexts/GlobalContext';

const App = () => {
  return (
    <div className="App">
      <GlobalProvider>
        <MainContainer>
          <Header />
          <SearchBox />
          <ProfileCard />
        </MainContainer>
      </GlobalProvider>
    </div>
  );
}

export default App;
