import React from 'react'
import Card from '../../templates/card'
import SubTitle from '../../templates/subTitle'
import SkillIcon from '../../templates/skillIcon'

export default function Skills() {
  return (
    <>
      <SubTitle subtitle={'Skills'} />
      <Card classes={''} animation={'fade-up'}>
        <ul className='grid grid-cols-2 gap-4 xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3'>
          <SkillIcon name={'HTML5'} color={''} />
          <SkillIcon name={'CSS'} color={''} />
          <SkillIcon name={'SASS'} color={''} />
          <SkillIcon name={'TailwindCSS'} color={''} />
          <SkillIcon name={'Javascript'} color={''} />
          <SkillIcon name={'JQuery'} color={''} />
          <SkillIcon name={'MySQL'} color={''} />
          <SkillIcon name={'Crystal Reports'} color={''} />
          <SkillIcon name={'Python'} color={''} />
          <SkillIcon name={'Photoshop'} color={''} />
          <SkillIcon name={'Git'} color={''} />
          <SkillIcon name={'ReactJS'} color={''} />
        </ul>
      </Card>
    </>
  )
}
