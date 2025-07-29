'use client'

import ScrambleTextLayer from './components/ScrambleTextLayer'
import IntroScene from './components/IntroScene'
import MovingTextBackground from './components/MovingTextBackground'

export function IntroSection() {
  return (
    <section className="relative min-h-screen bg-gray-950">
      <div className="absolute inset-0 z-0">
        <MovingTextBackground />
      </div>

      <div className="absolute inset-0 z-5">
        <ScrambleTextLayer />
      </div>

      <div className="relative z-10 flex justify-center">
        <IntroScene />
      </div>
    </section>
  )
}
