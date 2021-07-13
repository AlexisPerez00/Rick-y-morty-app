
const ResidentInfo = ({image, name, status, origin, cameos}) => {


    return (

                <div className="residentInfo">

                    <div>
                        <img src={image} alt="character"></img>
                    </div>

                    <p className="name">{name}</p>

                    {status === 'Alive' ? <p className="alive">Status: {status}</p>
                    : <p className="dead">Status: {status}</p>}

                    <p>Origin place: {origin}</p>
                        
                    <p>Appereances in the show: {cameos}</p>


                </div>

    )
}

export default ResidentInfo