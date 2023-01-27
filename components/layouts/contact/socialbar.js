import React from 'react'
import { socialLinks } from '../../../constants/social_links'

const SocialBar = ({ direction, showLinks }) => {
  return (
    <ol className={`flex ${direction == 'vertical' ? 'flex-col flex-1 justify-between' : 'justify-center space-x-4'} `}>
      {Object.entries(socialLinks).map(([key, value], index) => (
        <li key={index} className=' pb-2 '>
          <a href={value.url} className='flex gap-x-3'>
            {showLinks ? (
              <>
                {value.icon}
                <div className='flex-1 min-w-0 break-words hover:text-primary-hover'>{value.url}</div>
              </>
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
