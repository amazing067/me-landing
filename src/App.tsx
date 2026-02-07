import { useEffect, useRef } from 'react'
import { Hero } from './sections/Hero'
import { Expertise } from './sections/Expertise'
import { Portfolio } from './sections/Portfolio'
import { Contact } from './sections/Contact'

function App() {
  const sectionRefs = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
    )
    sectionRefs.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen circuit-bg">
      <Hero />
      <section ref={(el) => { sectionRefs.current[0] = el }} className="section-enter">
        <div className="section-divider" aria-hidden />
        <Expertise />
      </section>
      <section ref={(el) => { sectionRefs.current[1] = el }} className="section-enter">
        <div className="section-divider" aria-hidden />
        <Portfolio />
      </section>
      <section ref={(el) => { sectionRefs.current[2] = el }} className="section-enter">
        <div className="section-divider" aria-hidden />
        <Contact />
      </section>
    </div>
  )
}

export default App
