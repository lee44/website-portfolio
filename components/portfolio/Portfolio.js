import React from 'react'
import Project from './Project'
import { projects } from './data'

const Portfolio = () => {
  return (
    <ul className='grid xl:grid-cols-3 md:grid-cols-2 gap-10'>
      {projects.map((project, index, array) => {
        return (
          <Project
            img={''}
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
  )
}

export default Portfolio
