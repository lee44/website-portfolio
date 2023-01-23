import Head from 'next/head'
import React, { useRef, useState } from 'react'
import SocialBar from '../components/social/socialBar'
import Skills from '../components/skills/skills'
import Nav from '../components/nav/navigation'
import Portfolio from '../components/portfolio/portfolio'
import Title from '../components/title/title'
import Contact from '../components/contact/contact'
import AboutMe from '../components/aboutme/aboutme'
import MenuItem from '../components/nav/menuItem'
import Menu from '../components/nav/menu'

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

  const menuItems = {
    Home: <MenuItem title={'Home'} scrollTo={scrollToHome} />,
    AboutMe: <MenuItem title={'About Me'} scrollTo={scrollToAbout} />,
    Skills: <MenuItem title={'Skills'} scrollTo={scrollToSkills} />,
    Portfolio: <MenuItem title={'Portfolio'} scrollTo={scrollToPortfolio} />,
    Contact: <MenuItem title={'Contact'} scrollTo={scrollToContact} />,
  }

  const menuComponent = (
    <Menu
      menu={menu}
      toggleMenu={toggleMenu}
      scrollToHome={scrollToHome}
      scrollToAbout={scrollToAbout}
      scrollToSkills={scrollToSkills}
      scrollToPortfolio={scrollToPortfolio}
      scrollToContact={scrollToContact}
    />
  )

  return (
    <>
      <Head>
        <title>Joshua Lee</title>
        <meta name='description' content='Website Portfolio' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>

      <header className='fixed w-full top-0 z-[99] bg-primary-bg'>
        <Nav Menu={menuComponent} menuItems={menuItems} toggleMenu={toggleMenu} scrollToHome={scrollToHome} />
      </header>
      <main className='md:container px-8'>
        <section className='scroll-mt-20 flex flex-col justify-center' ref={homeRef}>
          <Title />
          <hr className='h-4 my-8 bg-gradient-to-r from-violet-500 to-fuchsia-500 border-0'></hr>
          <SocialBar direction={'horizontal'} showLinks={false} />
        </section>
        <section className='scroll-mt-20' ref={aboutRef}>
          <AboutMe />
        </section>
        <section className='scroll-mt-20' ref={skillsRef}>
          <Skills />
        </section>
        <section className='scroll-mt-20' ref={portfolioRef}>
          <Portfolio />
        </section>
      </main>
      <footer>
        <section className='scroll-mt-20' ref={contactRef}>
          <Contact />
        </section>
      </footer>
    </>
  )
}
