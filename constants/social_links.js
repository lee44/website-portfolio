import React from 'react'
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin, FaGithubSquare } from 'react-icons/fa'

const iconSize = 42
const iconClasses = 'fill-primary hover:fill-primary-hover'

export const socialLinks = {
  github: {
    url: 'https://github.com/lee44',
    icon: <FaGithubSquare size={iconSize} className={iconClasses} />,
  },
  linkedin: {
    url: 'https://www.linkedin.com/in/josh-lee-406658100/',
    icon: <FaLinkedin size={iconSize} className={iconClasses} />,
  },
}
