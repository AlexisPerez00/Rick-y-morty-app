import { useEffect, useState } from "react"
import ResidentInfo from "../components/ResidentInfo"

const ResidentContainer = (prop) => {
    const residents = prop.locationData.residents
    const [residentsData, setResidentsData] = useState([])
    const [randomResidents, setRandomResidents] = useState([])


    useEffect(() => {        
        const info = []

        const getData = () => {
            
            residents.forEach(async(url) => {
            const res = await fetch(url).then(res => res.json())
                info.push(res)

            })
        }
       if(residents) {
           getData()
           setResidentsData(info)
        }

    },[residents])

    console.log(residentsData)
    const residentsList = residentsData.map((item) => 
        <ResidentInfo
            key= {item.id}
            name= {item.name}
            image= {item.image}
            status= {item.status} 
            origin= {item.origin.name} 
            cameos= {item.episode.length}
        />
    )
    

    
    useEffect(() => {
        const getRandomData = async() => {
            let randomNum = Math.floor((Math.random()*10)+1)
            const res = await fetch(`https://rickandmortyapi.com/api/character?page=${randomNum}`).then(res => res.json())
            const result = res.results
            const randomResidents = []
            for (let i = 0; i <= 10; i++) {
                randomResidents.push(result[i])
            }
            setRandomResidents(randomResidents)
        }
            getRandomData()
    
    },[])

    const randomResidentsList = randomResidents.map((item) =>
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
            {residentsData.length > 1 ? residentsList
            : randomResidentsList}
   
        </div> 
     )
}


export default ResidentContainer