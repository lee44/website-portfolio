import { motion } from 'framer-motion'
import React from 'react'
import { animations } from '../../constants/animations'

const Card = ({ children, classes, animation }) => {
  return (
    <motion.div className={`${classes} bg-primary-bg rounded-md md:p-5 sm:p-4 border-[1px] border-primary`} {...animations[animation]}>
      {children}
    </motion.div>
  )
}

export default Card
