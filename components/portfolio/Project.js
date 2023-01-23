import React from 'react'
import Image from 'next/image'
import { FaGithubSquare, FaBroadcastTower } from 'react-icons/fa'
import Card from '../ui/card'

const Project = ({ img, title, description, languages, github_url, production_url }) => {
  return (
    <li className='max-w-lg'>
      <Card classes={'flex flex-col h-full'}>
        <div className='relative w-full h-56'>
          <Image className='rounded-md' src={img} alt={description} fill />
        </div>
        <h3>{title}</h3>
        <p className='xl:min-h-fit md:min-h-[72px] my-0'>{description}</p>
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
            <div className='flex justify-center items-center'>
              <FaGithubSquare size={28} className='mr-2' />
              <span>Github</span>
            </div>
          </a>
          <a href={production_url} className='py-3 w-32 rounded-md text-center flex-auto bg-button hover:bg-button-hover'>
            <div className='flex justify-center items-center'>
              <FaBroadcastTower size={26} className='mr-2' />
              <span>Live</span>
            </div>
          </a>
        </div>
      </Card>
    </li>
  )
}

export default Project
