import React from 'react'
import Card from '../card/card'
import SubTitle from '../title/subTitle'
import SkillIcon from './skillIcon'

export default function Skills() {
  return (
    <>
      <SubTitle subtitle={'Skills'} />
      <Card classes={''}>
        <ul className='grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4'>
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
      </Card>
    </>
  )
}
