import Head from 'next/head'
import React, { useRef, useState } from 'react'
import SocialBar from '../components/social/socialBar'
import Skills from '../components/skills/skills'
import Nav from '../components/nav/navigation'
import Portfolio from '../components/portfolio/portfolio'
import Title from '../components/title/title'
import Contact from '../components/contact/contact'
import Timeline from '../components/timeline/timeline'

export default function Home() {
  const [menu, setMenu] = useState(false)

  const homeRef = useRef(null)
  const aboutRef = useRef(null)
  const skillsRef = useRef(null)
  const portfolioRef = useRef(null)
  const contactRef = useRef(null)

  const scrollToHome = () => homeRef.current.scrollIntoView()
  const scrollToAbout = () => aboutRef.current.scrollIntoView()
  const scrollToSkills = () => skillsRef.current.scrollIntoView()
  const scrollToPortfolio = () => portfolioRef.current.scrollIntoView()
  const scrollToContact = () => contactRef.current.scrollIntoView()

  const toggleMenu = () => {
    setMenu(!menu)
  }

  return (
    <>
      <Head>
        <title>Joshua Lee</title>
        <meta name='description' content='Website Portfolio' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>

      <header className='fixed w-full top-0 z-[99] bg-primary-bg'>
        <Nav
          menu={menu}
          toggleMenu={toggleMenu}
          scrollToHome={scrollToHome}
          scrollToAbout={scrollToAbout}
          scrollToSkills={scrollToSkills}
          scrollToPortfolio={scrollToPortfolio}
          scrollToContact={scrollToContact}
        />
      </header>
      <main className='md:container px-8'>
        <section className='' ref={homeRef}>
          <Title />
          <hr className='h-4 my-8 bg-gradient-to-r from-violet-500 to-fuchsia-500 border-0'></hr>
          <SocialBar direction={'horizontal'} showLinks={false} />
        </section>
        <section className='' ref={aboutRef}>
          <Timeline />
        </section>
        <section className='' ref={skillsRef}>
          <Skills />
        </section>
        <section className='' ref={portfolioRef}>
          <Portfolio />
        </section>
        <section className='' ref={contactRef}>
          <Contact />
        </section>
      </main>
      <footer></footer>
    </>
  )
}
