import React from 'react'
import loader from "../components/images/loader.svg";

const Loader = () => {
  return (
    <div className="p-[4rem]">
      <img  className="w-[120px]"src={loader} alt = "loader"/>
    </div>
  )
}

export default Loader
