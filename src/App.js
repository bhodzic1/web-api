import React from 'react';
import GifList from './components/gifList/GifList';
import SearchBar from './components/searchBar/SearchBar';
import { GifProvider } from './context/GifContext';


const App = () => {
  return (
    <GifProvider>
      <div>
        <SearchBar />
        <GifList />
      </div>
    </GifProvider>
    
  )
}

export default App;
