import React from "react"
import DivTwo from "./DivTwo.js"

const DivOne = (props) => {
const {name, change} = props
        return (
        <div>
        <DivTwo name={name} change={change}/>
        
        </div>
            
            )
        
}

export default DivOne