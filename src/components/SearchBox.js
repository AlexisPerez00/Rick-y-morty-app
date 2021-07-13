import { useState } from "react"

const SearchBox = ({onSearch}) => {
    const [value, setValue] = useState('')
  
  return (
  <div className="finder">
      <input value={value} placeholder="Select a location" onChange={e => {
        setValue(e.target.value)
      }}>
      </input>
  
    { <button onClick={() => {
      onSearch(value)
    }}>Search</button> }
  </div>
  )
  }
  
  export default SearchBox
  