import React from "react"

const Home = () => {
  return( 
    <div>
        <div>This is a button</div>
        <button onClick={() =>  console.log("button clicked")}>Press me</button>
    </div>
    )
}

export default Home