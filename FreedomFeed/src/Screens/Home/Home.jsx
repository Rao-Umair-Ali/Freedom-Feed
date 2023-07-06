import React from 'react'
import "./Home.css"
import FeedHome from "./FeedHome"

import Widget from '../../components/Widget';
import LeftBar from '../../components/LeftBar';

function Home() {

  return ( <div className='MainFeed'> 
  <LeftBar/>
    <div className='MainScroll'><FeedHome/></div>
   <Widget/>
    </div>
      )
}

export default Home