import Head from 'next/head'
import React, { useEffect, useRef, useState } from 'react'
import SocialBar from '../components/social/socialBar'
import Skills from '../components/skills/skills'
import Nav from '../components/nav/navigation'
import Portfolio from '../components/portfolio/portfolio'
import Title from '../components/title/title'
import Contact from '../components/contact/contact'
import AboutMe from '../components/aboutme/aboutme'
import MenuItem from '../components/nav/menuItem'
import MobileMenu from '../components/nav/mobileMenu'
import { useSpring } from 'framer-motion'

const Home = () => {
  const [menu, setMenu] = useState(false)
  const spring = useSpring(0, { duration: 0.5 })

  const homeRef = useRef(null)
  const aboutRef = useRef(null)
  const skillsRef = useRef(null)
  const portfolioRef = useRef(null)
  const contactRef = useRef(null)

  function moveTo(ref) {
    spring.set(ref.current?.offsetTop)
  }

  const scrollToHome = () => moveTo(homeRef)
  const scrollToAbout = () => moveTo(aboutRef)
  const scrollToSkills = () => moveTo(skillsRef)
  const scrollToPortfolio = () => moveTo(portfolioRef)
  const scrollToContact = () => moveTo(contactRef)

  const toggleMenu = () => {
    setMenu(!menu)
  }

  // Composition to prevent prop drilling
  const menuItems = {
    Home: <MenuItem title={'Home'} scrollTo={scrollToHome} />,
    AboutMe: <MenuItem title={'About Me'} scrollTo={scrollToAbout} />,
    Skills: <MenuItem title={'Skills'} scrollTo={scrollToSkills} />,
    Portfolio: <MenuItem title={'Portfolio'} scrollTo={scrollToPortfolio} />,
    Contact: <MenuItem title={'Contact'} scrollTo={scrollToContact} />,
    Resume: (
      <MenuItem
        title={'Resume'}
        scrollTo={() => {
          window.open('/resume.pdf', '_blank')
        }}
      />
    ),
  }

  // Composition to prevent prop drilling
  const mobileMenuComponent = (
    <MobileMenu
      menu={menu}
      toggleMenu={toggleMenu}
      scrollToHome={scrollToHome}
      scrollToAbout={scrollToAbout}
      scrollToSkills={scrollToSkills}
      scrollToPortfolio={scrollToPortfolio}
      scrollToContact={scrollToContact}
    />
  )

  useEffect(() => {
    // Subscribe to any changes reported by motion value
    const unsubscribeScroll = spring.on('change', (latest) => {
      window.scrollTo({ left: 0, top: latest - 56, behavior: 'smooth' })
    })
    return () => {
      unsubscribeScroll()
    }
  }, [spring])

  return (
    <>
      <Head>
        <title>Joshua Lee</title>
        <meta name='description' content='Website Portfolio' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>

      <header className='fixed w-full top-0 z-[99] bg-primary-bg'>
        <Nav mobileMenu={mobileMenuComponent} menuItems={menuItems} toggleMenu={toggleMenu} scrollToHome={scrollToHome} />
      </header>
      <main className='md:container px-8'>
        <section className='flex flex-col justify-center' ref={homeRef}>
          <Title />
          <hr className='h-4 my-8 bg-gradient-to-r from-violet-500 to-fuchsia-500 border-0'></hr>
          <SocialBar direction={'horizontal'} showLinks={false} />
        </section>
        <section className='' ref={aboutRef}>
          <AboutMe />
        </section>
        <section className='' ref={skillsRef}>
          <Skills />
        </section>
        <section className='' ref={portfolioRef}>
          <Portfolio />
        </section>
      </main>
      <footer>
        <section className='' ref={contactRef}>
          <Contact />
        </section>
      </footer>
    </>
  )
}

export default Home
