import React from 'react'
import "./Home.css"

import Widget from '../../components/Widget';
import LeftBar from '../../components/LeftBar';

function Home() {

  return ( <div className='MainFeed'> 
  <LeftBar/>
      
    
    <div className='MainScroll'>Home</div>
   <Widget/>
    </div>
      )
}

export default Home