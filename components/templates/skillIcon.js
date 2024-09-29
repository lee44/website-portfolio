import React from 'react'
import { FaAndroid, FaBootstrap, FaCss3, FaGithub, FaHtml5, FaJava, FaPython, FaReact, FaSass } from 'react-icons/fa'
import { DiPhotoshop } from 'react-icons/di'
import { SiJquery, SiMysql, SiJavascript } from 'react-icons/si'

export default function SkillIcon({ name, color }) {
  const size = 42
  const icons = {
    HTML5: <FaHtml5 size={size} color={color} />,
    CSS: <FaCss3 size={size} color={color} />,
    SASS: <FaSass size={size} color={color} />,
    Javascript: <SiJavascript size={size} color={color} />,
    JQuery: <SiJquery size={size} color={color} />,
    Bootstrap: <FaBootstrap size={size} color={color} />,
    MySQL: <SiMysql size={size} color={color} />,
    'Crystal Reports': <FaHtml5 size={size} color={color} />,
    Java: <FaJava size={size} color={color} />,
    Android: <FaAndroid size={size} color={color} />,
    Python: <FaPython size={size} color={color} />,
    Photoshop: <DiPhotoshop size={size} color={color} />,
    Git: <FaGithub size={size} color={color} />,
    ReactJS: <FaReact size={size} color={color} />,
  }

  return (
    <>
      <li className='flex flex-col items-center justify-center'>
        {icons[name]}
        <p className='m-2'>{name}</p>
      </li>
    </>
  )
}
