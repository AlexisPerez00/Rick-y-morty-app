import { useEffect, useState } from "react"
import ResidentInfo from "./ResidentInfo"

const ResidentContainer = (prop) => {
    const [resident, setResident] = useState([])


    useEffect(() => {        
    const residents = prop.Location["residents"]
        const getData = () => {
            const info = []
            residents.forEach(async(link) => {
                const res = await fetch(link).then(res => res.json())
                info.push(res)
            })
            if(info.length === residents.length) {
                setResident(info)

            }
        }
       if(residents) {
           getData()
        }

    },[prop.Location])


    const residentsList = resident.map((item) => 
    <ResidentInfo
        key= {item.id}
        name= {item.name}
        image= {item.image}
        status= {item.status} 
        origin= {item.origin.name} 
        cameos= {item.episode.length}
    />)

    return (
    <div className="residentContainer">
    {residentsList}
    </div>
     )
}


export default ResidentContainer