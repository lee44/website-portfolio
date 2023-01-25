import React from 'react'
import { motion } from 'framer-motion'
import { animations } from '../animation/animations'

const SubTitle = ({ subtitle }) => {
  return (
    <motion.div className='flex flex-col items-center my-8' {...animations['fade-down']}>
      <h1 className='mb-0'>{subtitle}</h1>
      <hr className='w-16 h-2 bg-gradient-to-r from-violet-500 to-fuchsia-500 border-0'></hr>
    </motion.div>
  )
}

export default SubTitle
