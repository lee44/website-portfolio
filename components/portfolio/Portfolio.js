import React from 'react'
import Project from './Project'
import { projects } from './data'
import SubTitle from '../title/SubTitle'

const Portfolio = () => {
  return (
    <>
      <SubTitle subtitle={'Portfolio'} />
      <ul className='grid xl:grid-cols-3 md:grid-cols-2 md:auto-rows-fr lg:gap-10 gap-5 justify-center'>
        {projects.map((project, index, array) => {
          return (
            <Project
              img={project.img}
              title={project.title}
              description={project.description}
              languages={project.language}
              github_url={project.github_url}
              production_url={project.production_url}
              key={index}
            />
          )
        })}
      </ul>
    </>
  )
}

export default Portfolio
