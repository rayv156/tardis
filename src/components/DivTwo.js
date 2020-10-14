import React from "react"
import DivThree from "./DivThree.js"

const DivTwo = (props) => {
const {name, change} = props

const [state, setState] = React.useState({
    tardis:{  
       name: "Time and Relative Dimension in Space",
       caps: false
  } })

  const changeIt = (text) => {
    if (state.tardis.caps) {
      setState({
        tardis: {
          name: text.toLowerCase(),
          caps: false
        }
      })
    } else {
      setState({
        tardis: {
          name: text.toUpperCase(),
          caps: true
        }
      })
    }
  }
        return (
        <div>
            <DivThree name={name} change={change}/>
            <DivThree name={state.tardis.name} change={changeIt}/>
            
        
        </div>
            
            )
        
}

export default DivTwo