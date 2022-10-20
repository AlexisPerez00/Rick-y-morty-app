  const LocationInfo = (prop) => {
    const data = prop.location
    const residents = data.residents


      return (
        <div className="locationContainer">

              <h3>{data.name}</h3>
              <h3> {data.type}</h3>
              <h3>{data.dimension}</h3>
                {residents ? <h3>{residents.length} residents</h3> 
                : "Unknown"}
              

        </div>
    )
}

export default LocationInfo