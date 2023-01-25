import React from 'react'
import { motion } from 'framer-motion'

const SubTitle = ({ subtitle }) => {
  return (
    <motion.div
      className='flex flex-col items-center my-8'
      initial={{ y: -50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ ease: 'easeInOut', duration: 1 }}
    >
      <h1 className='mb-0'>{subtitle}</h1>
      <hr className='w-16 h-2 bg-gradient-to-r from-violet-500 to-fuchsia-500 border-0'></hr>
    </motion.div>
  )
}

export default SubTitle
