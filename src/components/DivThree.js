import React from "react"

const DivThree = (props) => {
const {name, change} = props


        return (
        <div>
        <h3 onClick={()=> change(name)}>{name}</h3>
        </div>
            
            )
        
}

export default DivThree