import Card from "./Card"

function RobotsList({ robots }){
    const renderRobot = robots.map((robot) => {
        // En key necesita el id del robot, en name necesitas el name del robot, en email necesital el email del robot
        return <Card  key={robots.id} name={robots.name} email={robots.email} />
    })

    return(
        <div className="container ">
            <div className="columns is-multiline">
                {renderRobot} 
            </div>
        </div>
    )
}

export default RobotsList