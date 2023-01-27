import React from 'react'
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin, FaGithubSquare } from 'react-icons/fa'

const iconSize = 42
const iconClasses = 'fill-primary hover:fill-primary-hover'

export const socialLinks = {
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
