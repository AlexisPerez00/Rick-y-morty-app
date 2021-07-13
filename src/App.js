import SearchBox from './components/SearchBox';
import  LocationContainer  from './components/LocationContainer';
import './App.css';
import { useState} from 'react';

function App() {

  const [query, setQuery] = useState('')

  const handleSearch = (query) => {

    setQuery(query)
  }

  return (
    <div className="App">
      <header> Rick and Morty - Location Finder</header>
      <SearchBox onSearch={handleSearch} />
      <LocationContainer fetchLocation={query}/>
      
    </div>
  );
}

export default App;
