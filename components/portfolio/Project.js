import React from 'react'

const Project = ({ img, title, description, languages, github_url, production_url }) => {
  return (
    <li>
      <div className='flex flex-col h-full rounded-md p-7 bg-primary-bg'>
        <img src='' alt='project_image'></img>
        <h3>{title}</h3>
        <p className='xl:min-h-fit md:min-h-[72px]'>{description}</p>
        <hr></hr>
        <div className='flex flex-wrap gap-1 md:my-auto'>
          {languages.map((language, index) => {
            return (
              <span key={index} className='p-2 rounded-md bg-primary'>
                {language}
              </span>
            )
          })}
        </div>
        <hr></hr>
        <div className='flex justify-between w-full gap-3'>
          <a href={github_url} className='py-3 w-32 rounded-md text-center flex-auto bg-button hover:bg-button-hover'>
            Github
          </a>
          <a
            href={production_url}
            className='py-3 w-32 rounded-md text-center flex-auto bg-button hover:bg-button-hover'
          >
            Live
          </a>
        </div>
      </div>
    </li>
  )
}

export default Project
