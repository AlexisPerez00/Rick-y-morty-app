import { useEffect, useState } from "react"
import ResidentInfo from "./ResidentInfo"

const ResidentContainer = (prop) => {
    const residents = prop.Location.residents
    const [resident, setResident] = useState([])


    useEffect(() => {        
        const getData = () => {
            let info = []
            residents.forEach(async(link) => {
                const res = await fetch(link).then(res => res.json())
                info.push(res)
                // console.log(res)
            })
            if(info) {
                // const randomIndex = Math.floor(info.length * Math.random())
                setResident(info)

                console.log(info)
            }

        }
       if(residents) {
           getData()
           
        }

    },[residents])
//     if(resident) {
//         if(resident > 10) {
//          residentLimited.push(resident.slice(0, 10))
//     }
//     else {
//         residentLimited.push(resident)
//     }
// }
// const residentsList = residentLimited.map((item) => {
//     key: {item.id}
//     name: {item.name}
//     image: {item.image}
//     status: item.status ,
//     origin: item.origin.name ,
//     cameos: item.episode.length
// })
if(resident) {
    console.log(resident)
}

return (
<div className="residentContainer">
<ResidentInfo list={resident}/>
</div>)
}

export default ResidentContainer