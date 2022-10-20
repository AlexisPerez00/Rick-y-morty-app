import Navbar from './components/navigation/Navbar';
import  LocationContainer  from './components/LocationContainer';
import ResidentContainer from './components/ResidentContainer';
import './App.css';
import { useState, useEffect} from 'react';

function App() {

  const [query, setQuery] = useState('')
  // const [location,setLocation] = useState([])

  const [data, setData] = useState('');


  const handleSearch = (query) => {
    setQuery(query)
  }

  useEffect(() => {
      const getData = async() => {
          const link = `https://rickandmortyapi.com/api/location?name=${query}`
          const res = await fetch(link).then(res => res.json())
          setData(res.results[0])
      }
      if(query) {
          getData()
      }
      
  },[query])


  return (
    <div className="App">
      <header> Rick and Morty - Location Finder</header>
      <Navbar onSearch={handleSearch} />
      <LocationContainer locationData={data}/>
      <ResidentContainer locationData={data}/>

    </div>
  );
}

export default App;
