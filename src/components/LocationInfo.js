  const LocationInfo = (prop) => {
    const data = prop.location
    const residents = data.residents


      return (
        <div className="locationContainer">

              <h3> <p>Name:</p>{data.name}</h3>
              <h3> <p>Type:</p> {data.type}</h3>
              <h3> <p>Dimension:</p>{data.dimension}</h3>
                {residents ? <h3>{residents.length} Residents</h3> 
                : "Unknown residents"}
              

        </div>
    )
}

export default LocationInfo