import React from 'react'
import Card from '../../templates/card'
import SubTitle from '../../templates/subTitle'
import Timeline from './timeline'

const AboutMe = () => {
  return (
    <>
      <SubTitle subtitle={'About Me/Goals'} />
      <Card classes={'mb-20'} animation={'fade-up'}>
        I graduated from UC Santa Cruz with a B.S in Computer Science. Currently I work at a fashion company, CLO Virtual Fashion Inc, as a web developer for over two years. Unfortunately I do not see long term growth within the company so I am searching for a company that can offer growth and further move me along my career.
      </Card>
      <Timeline />
    </>
  )
}

export default AboutMe
