import  LocationInfo  from "./LocationInfo";

const LocationContainer =  (prop) => {
    const location = prop.locationData
    
    return (
        <div className="bodyInfo">
            {!location.name ? <div className="locationContainer">
                <h1>Here are some characters while you do a search</h1>
            </div>
            : <LocationInfo location={location}/>}
            
        </div>
    )

}

export default LocationContainer