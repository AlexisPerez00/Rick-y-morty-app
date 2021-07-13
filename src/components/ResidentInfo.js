import { useState } from "react"

const ResidentInfo = ({props}) => {
    const [residents, setResidents] = useState(props)
    // const residents = []
    if(props) {
        setResidents(props.list.slice(0, 10))
    }
    // let residentLimited = residents.slice(0, 10)
    // const residentLimited = props.list
    return (
        <>
       <div>
        {residents ?  
        residents.map((item) => {
            return (
                <div className="residentInfo">

                    <div>
                        <img src={item.image} alt="character"></img>
                    </div>

                    <p className="name">{item.name}</p>

                    {item.status === 'Alive' ? <p className="alive">Status: {item.status}</p>
                    : <p className="dead">Status: {item.status}</p>}

                    <p>Origin place: {item.origin.name}</p>
                        
                    <p>Appereances in the show: {item.episodes.length}</p>


                </div>
            )
        
            })
    : ""}
    </div>
    </>
    )
}

export default ResidentInfo