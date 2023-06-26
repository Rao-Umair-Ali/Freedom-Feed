import React from 'react'
import "./Message.css"
import LeftBar from '../../components/LeftBar'
import Widget from '../../components/Widget'


function Message() {
  return (<div className='Messagemain'>
    <div><LeftBar/>
    </div>
<div className='Message'>Message</div>
    <div>
    <Widget/>
    </div>  
    </div>)
}

export default Message