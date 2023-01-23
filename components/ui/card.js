import React from 'react'

const Card = ({ children, classes }) => {
  return <div className={`${classes} bg-primary-bg rounded-md p-5 border-[1px] border-primary`}>{children}</div>
}

export default Card
