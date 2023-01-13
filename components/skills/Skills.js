import React from 'react'
import SkillIcon from './SkillIcon'

export default function Skills() {
  return (
    <>
      <h1>Skills</h1>
      <ul className='grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4'>
        <SkillIcon name={'HTML5'} color={''} />
        <SkillIcon name={'CSS'} color={''} />
        <SkillIcon name={'SASS'} color={''} />
        <SkillIcon name={'Javascript'} color={''} />
        <SkillIcon name={'JQuery'} color={''} />
        <SkillIcon name={'Bootstrap'} color={''} />
        <SkillIcon name={'MySQL'} color={''} />
        <SkillIcon name={'Crystal Reports'} color={''} />
        <SkillIcon name={'Java'} color={''} />
        <SkillIcon name={'Android'} color={''} />
        <SkillIcon name={'Python'} color={''} />
        <SkillIcon name={'Photoshop'} color={''} />
        <SkillIcon name={'Git'} color={''} />
        <SkillIcon name={'ReactJS'} color={''} />
      </ul>
    </>
  )
}
