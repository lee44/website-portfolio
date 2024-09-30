import React from 'react'
import Card from '../../templates/card'
import SocialBar from './socialbar'

const Social = () => {
  return (
    <>
      <Card classes={'flex flex-col max-w-lg min-w-0'} animation={'fade-right'}>
        <h3 className='text-primary my-0'>Say Hello Here</h3>
        <hr />
        <SocialBar direction={'vertical'} showLinks={true} />
      </Card>
    </>
  )
}

export default Social
