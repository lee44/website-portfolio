import Head from 'next/head'
import React from 'react'
import SocialBar from '../components/social/socialBar'
import Skills from '../components/skills/skills'
import Nav from '../components/nav/navigation'
import Portfolio from '../components/portfolio/portfolio'
import Title from '../components/title/title'
import Contact from '../components/contact/contact'
import Timeline from '../components/timeline/timeline'

export default function Home() {
  return (
    <>
      <Head>
        <title>Joshua Lee</title>
        <meta name='description' content='Website Portfolio' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>

      <header className='bg-primary-bg'>
        <Nav />
      </header>
      <main className='md:container px-8'>
        <section className=''>
          <Title />
          <hr className='h-4 my-8 bg-gradient-to-r from-violet-500 to-fuchsia-500 border-0'></hr>
          <SocialBar direction={'horizontal'} showLinks={false} />
        </section>
        <section className=''>
          <Timeline />
        </section>
        <section className=''>
          <Skills />
        </section>
        <section className=''>
          <Portfolio />
        </section>
        <section className=''>
          <Contact />
        </section>
      </main>
      <footer></footer>
    </>
  )
}
