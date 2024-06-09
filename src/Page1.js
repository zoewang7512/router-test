import React from 'react'
import { Link } from "react-router-dom";

const Page1 = () => {
  return (
    <div>Page1
      path="/" element=Home 
      path="/#1" element=Page1 
       <button> <Link to='/'>home</Link></button>
    </div>
  )
}

export default Page1;