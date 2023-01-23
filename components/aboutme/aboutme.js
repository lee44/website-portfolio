import React from 'react'
import Card from '../ui/card'
import SubTitle from '../title/subTitle'
import Timeline from './timeline'

const AboutMe = () => {
  return (
    <>
      <SubTitle subtitle={'About Me/Goals'} />
      <Card classes={'mb-20'}>
        I graduated from UC Santa Cruz with a B.S in Computer Science. Currently I work at a motorcycle company, Eaglerider, as a Jr. Project Manager
        for over four years. However I want to pursue a career as a software or web developer. I need a company that can help hone my development
        skills and put me on the right path of my career. My ultimate goal is to become a full stack developer. During my free time, I continue to
        sharpen my web development skills by building beautiful, responsive websites using frameworks like NextJS and TailwindCSS.
      </Card>
      <Timeline />
    </>
  )
}

export default AboutMe
