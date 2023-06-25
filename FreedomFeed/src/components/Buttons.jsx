import React from 'react'
import "./Buttons.css"
function Buttons(props){
    return(
       <div className='ButtonsComp'>
            <button className='Buttons'>{props.name}
            </button></div>
    )
}
export default Buttons