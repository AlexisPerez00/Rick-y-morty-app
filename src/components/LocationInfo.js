  const LocationInfo = (prop) => {
      const locationFounded = prop.Location
      const residents = locationFounded.residents


      return (
        <div className="locationContainer">

              <h3>{locationFounded.name}</h3>
              <h3> {locationFounded.type}</h3>
              <h3>{locationFounded.dimension}</h3>
                {residents ? <h3>{residents.length} residents</h3> 
                : ""}
              

        </div>
    )
}

export default LocationInfo