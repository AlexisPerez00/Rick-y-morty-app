import { useEffect, useState } from "react"
import ResidentInfo from "../components/ResidentInfo"

const ResidentContainer = ({residents}) => {
    const [residentsData, setResidentsData] = useState([])


    useEffect(() => {
        const getRandomData = async() => {
            let randomNum = Math.floor((Math.random()*10)+1)
            const res = await fetch(`https://rickandmortyapi.com/api/character?page=${randomNum}`).then(res => res.json())
            const result = res.results
            const randomResidents = []
            for (let i = 0; i <= 10; i++) {
                randomResidents.push(result[i])
            }
            setResidentsData(randomResidents)
        }
        if(!residents.length) getRandomData()
        
        const getData = async() => {
            const info = []
            for(let i = 0; i <= 18; i++) {
                const res = await fetch(residents[i]).then(res => res.json())
                info.push(res)
            }
            setResidentsData(info)
        }
        if(residents.length) {
           getData()
        }
    },[residents])


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
    

    return (
        <div className="residentContainer">
            { residentsList }
   
        </div> 
     )
}


export default ResidentContainer