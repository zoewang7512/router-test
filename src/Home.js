import React from 'react'
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div> 
     path="/" element=Home 
      path="/page1" element=Page1 
  
      <button> <Link to='/page1'>page1</Link></button>
    </div>
    
  )
}

export default Home;