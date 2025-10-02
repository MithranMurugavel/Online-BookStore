import React from 'react'
import bannerimg from "../../assets/banner.png"
const Banner = () => {
  return (
    
    <div className=" px- 5 flex flex-col md:flex-row-reverse py-10 justify-between items-center gap-12">
        <div className="md:w-1/2 w-80 h-80 flex item-center md:justify-end">
            <img src={bannerimg}/>
        </div>
        <div className="mb-18 w-1/2">
            <h1 className="md:text-4xl text-2xl font-medium mb-7 ">
                🚩 Now Release This Week 🎉</h1>
            <p>
                Got it! You want a search input in a React (JSX) app that remembers past searches and shows them when the user focuses or types in the box. Here’s a simple approach using local storage to persist past searches and display them as suggestions:
            </p>
            <button className="btn-primary !bg-red-500 hover:!bg-yellow-500 text-white hover:!text-black mt-3">Subscribe</button>
        </div>
    </div>
  )
}

export default Banner