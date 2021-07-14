import SearchBox from './components/SearchBox';
import  LocationContainer  from './components/LocationContainer';
import ResidentContainer from './components/ResidentContainer';
import './App.css';
import { useState} from 'react';

function App() {

  const [query, setQuery] = useState('')
  const [location,setLocation] = useState([])

  const handleSearch = (query) => {
    setQuery(query)
  }

  const handleLocation = (item) => {
    setLocation(item)
  }

  return (
    <div className="App">
      <header> Rick and Morty - Location Finder</header>
      <SearchBox onSearch={handleSearch} />
      <LocationContainer fetchLocation={query} searchLocation={handleLocation}/>
      <ResidentContainer Location={location}/>

    </div>
  );
}

export default App;
