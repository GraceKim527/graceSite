'use client'

import AboutScene from './components/about/AboutScene'
import CodeScrambleBackground from './components/about/CodeScrambleBackground'

export function AboutSection() {
  return (
    <section className="relative bg-gray-950">
      <div className="absolute inset-0 z-0">
        <CodeScrambleBackground />
      </div>

      <div className="relative z-10 flex justify-center">
        <AboutScene />
      </div>
    </section>
  )
}
