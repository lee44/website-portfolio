import { motion } from 'framer-motion'
import React from 'react'
import { animations } from '../animation/animations'

const Card = ({ children, classes }) => {
  const keys = Object.keys(animations)
  const randomAnimation = animations[keys[Math.floor(Math.random() * 4)]]
  return (
    <motion.div className={`${classes} bg-primary-bg rounded-md p-5 border-[1px] border-primary`} {...randomAnimation}>
      {children}
    </motion.div>
  )
}

export default Card
