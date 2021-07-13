import SearchBox from './components/SearchBox';
import  LocationContainer  from './components/LocationContainer';
import './App.css';
import { useState} from 'react';

function App() {
  
  const [query, setQuery] = useState('')
  // const [data, setData] = useState([])

  const handleSearch = (query) => {

    setQuery(query)
    console.log(query)
  }

  // useEffect(() => {
  //   if(location) {
  //     GetData(location)
  //    const func = async() => {
  //    const res = await;
  //    console.log(res)
  //    setData(res.results)
  //    }
  //    func()
  //   }
  //   },[location])

    // const locationList = data.map((item) => (
      
    //   <option key={item.id}>{item.name}</option>
    // ))
  return (
    <div className="App">
      <header> Rick and Morty - Location Finder</header>
      <SearchBox onSearch={handleSearch} />
      <LocationContainer fetchLocation={query}/>
      
    </div>
  );
}

export default App;
