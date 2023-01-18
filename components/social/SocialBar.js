import React from 'react'
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin, FaGithubSquare } from 'react-icons/fa'

const SocialBar = ({ direction, showLinks }) => {
  const iconSize = 42
  const iconClasses = 'fill-primary hover:fill-primary-hover'

  const socialLinks = {
    facebook: {
      url: 'https://www.facebook.com/jlee7772',
      icon: <FaFacebookSquare size={iconSize} className={iconClasses} />,
    },
    twitter: {
      url: 'https://twitter.com/jlee7772',
      icon: <FaTwitterSquare size={iconSize} className={iconClasses} />,
    },
    linkedin: {
      url: 'https://www.linkedin.com/in/josh-lee-406658100/',
      icon: <FaLinkedin size={iconSize} className={iconClasses} />,
    },
    github: {
      url: 'https://github.com/jlee7772',
      icon: <FaGithubSquare size={iconSize} className={iconClasses} />,
    },
  }

  return (
    <ol className={`flex ${direction == 'vertical' ? 'flex-col' : 'justify-center space-x-4'} `}>
      {Object.entries(socialLinks).map(([key, value], index) => (
        <li key={index} className='pb-2'>
          <a href={value.url}>
            {showLinks ? (
              <div className='flex gap-x-3'>
                {value.icon}
                <span className='flex items-center hover:text-primary-hover'>{value.url}</span>
              </div>
            ) : (
              <>{value.icon}</>
            )}
          </a>
        </li>
      ))}
    </ol>
  )
}

export default SocialBar
