import { useEffect, useState } from "react"
import  LocationInfo  from "./LocationInfo";
import ResidentContainer from "./ResidentContainer";

     const LocationContainer =  (props) => {
        const [search, setSearch] = useState('');
        const [location, setLocation] = useState([])



        useEffect(() => {
            const getData = async() => {
                const link = `https://rickandmortyapi.com/api/location`
                const res = await fetch(link).then(res => res.json())
                setSearch(res.results)
}
            getData()
        })

        useEffect(() => {
            if(search) {
                search.forEach((item) => {
                    if(item.name === props.fetchLocation) {
                        setLocation(item)
                    }
                     
                })
            }
        },[props, search])



        return (
            <div className="bodyInfo">
                <LocationInfo Location={location}/>
                <ResidentContainer Location={location}/>
            </div>
        )

}

export default LocationContainer