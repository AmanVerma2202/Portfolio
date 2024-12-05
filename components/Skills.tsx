"use client"
import { companies } from '@/data'
import React from 'react'

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <h1 className="heading">
      My Skills
        <span className="text-purple"> Set</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-3 md:gap-12 max-lg:mt-10 lg:mt-10">
          {companies.map((company) => (
            <React.Fragment key={company.id}>
              <div className="flex items-center justify-center md:max-w-60 max-w-32 gap-2">
                <img
                  src={company.img}
                  alt={company.name}
                  className="md:w-10 w-5"
                />
                <div
                  className="md:w-24 w-20"
                >{company.nameImg}</div>
              </div>
            </React.Fragment>
          ))}
        </div>
    </section>
    
  )
}

export default Skills