import React from "react"
import {Helmet} from "react-helmet"

const Home = () => {

  const head = () => {
    return(
      <Helmet>
      <title>Demo</title>
       <meta property="og:title" content="Content App"/>
      </Helmet>
    )
  }

  return( 
    <div>
      {head()}
        <div>This is a button</div>
        <button onClick={() =>  console.log("button clicked")}>Press me</button>
    </div>
    )
}


export default Home