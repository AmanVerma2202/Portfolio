import React from 'react'
import {profile} from "@/data"

const About = () => {
  return (
    <div id='about' className="mt-40  mb-20 px-4 sm:px-20 w-full flex  flex-col lg:flex-row items-center lg:justify-center">
      <div className="mb-6 lg:mb-0 ">
        <img 
          className="rounded-3xl w-full max-w-xs sm:max-w-sm lg:max-w-md h-auto" 
          src={profile.image} 
          alt="Profile" 
        />
      </div>
    <div className="lg:basis-1/2 lg:ml-10">
      <h1 className="text-xl sm:text-2xl text-center lg:text-left flex items-center mb-2 ">
        My
        <span className="text-purple"> &nbsp;Story</span>
      </h1>
      <p className="text-sm sm:text-base text-center lg:text-left ">
        Born and raised in Barabanki, Uttar Pradesh, I am pursuing my Engineering Degree in Computer Science and Engineering from Vellore Institute of Technology, Bhopal. Started my career as a Full Stack Developer finally working on DevOps.
      </p>
    </div>
  </div>

  )
}

export default About