import React from 'react'
import "./Explore.css"
import LeftBar from '../../components/LeftBar'
import Widget from '../../components/Widget'


function Explore() {
  return (<div className='Exploremain'>
    <div><LeftBar/>
    </div>
<div className='Explore'>Explore</div>
    <div>
    <Widget/>
    </div>  
    </div>)
}

export default Explore