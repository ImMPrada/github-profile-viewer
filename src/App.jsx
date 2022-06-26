import React from 'react';
import { 
  MainContainer, 
  Header,
  SearchBox,
  DataToShow,
} from './components'
import { GlobalProvider } from './contexts/GlobalContext';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const App = () => {
  return (
    <div className="App">
      <GlobalProvider>
        <MainContainer>
          <Header />
          <SearchBox />
          <DataToShow />
        </MainContainer>
      </GlobalProvider>
    </div>
  );
}

export default App;
