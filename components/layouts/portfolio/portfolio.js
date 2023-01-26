import React from 'react'
import Project from './project'
import { projects } from '../../../constants/projects'
import SubTitle from '../../templates/subTitle'

const Portfolio = () => {
  return (
    <>
      <SubTitle subtitle={'Portfolio'} />
      <ul className='grid xl:grid-cols-3 md:grid-cols-2 md:auto-rows-fr lg:gap-10 md:gap-5 gap-7 justify-center'>
        {projects.map((project, index, array) => {
          return (
            <Project
              key={index}
              img={project.img}
              title={project.title}
              description={project.description}
              languages={project.language}
              github_url={project.github_url}
              production_url={project.production_url}
              animation={index % 3 === 0 ? 'fade-left' : index % 2 === 0 ? 'fade-right' : 'fade-up'}
            />
          )
        })}
      </ul>
    </>
  )
}

export default Portfolio
