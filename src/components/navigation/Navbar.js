import { useState } from "react"

const Navbar = ({onSearch}) => {
    const [value, setValue] = useState('')
  
  return (
  <div className="finder">
      <input value={value} placeholder="Write a location" onChange={e => {
        setValue(e.target.value)
      }}>
      </input>
  
    { <button type="submit" onClick={() => {
      onSearch(value)
    }}>Search</button> }
  </div>
  )
  }
  
  export default Navbar
  