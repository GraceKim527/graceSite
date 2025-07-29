// src/components/IntroScene.tsx
'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import './style.css'

export default function IntroScene() {
  const frontendRef = useRef<HTMLDivElement>(null)
  const devRef = useRef<HTMLDivElement>(null)
  const graceRef = useRef<HTMLDivElement>(null)
  const kimRef = useRef<HTMLDivElement>(null)
  const portfolioRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const tl = gsap.timeline().add('startSameTime')
    tl.fromTo(
      frontendRef.current,
      { y: 500, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power4.out' },
      'startSameTime',
    )

    tl.fromTo(
      portfolioRef.current,
      { y: 500, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power4.out' },
      'startSameTime',
    )

      .fromTo(
        devRef.current,
        { x: 20, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.3, ease: 'power4.out' },
        '+=0.1',
      )

      .fromTo(
        graceRef.current,
        { x: 500, scaleX: 2, opacity: 0 },
        {
          x: 0,
          scaleX: 1,
          opacity: 1,
          duration: 0.3,
          ease: 'power4.out',
          onStart: () => {
            graceRef.current?.classList.add('grace-border')
          },
          onComplete: () => {
            graceRef.current?.classList.remove('grace-border')
            graceRef.current?.classList.add('text-white')
          },
        },
        '+=0.1',
      )

      .to(
        [frontendRef.current, devRef.current],
        {
          fontSize: '120px',
          opacity: 1,
          duration: 0.3,
          ease: 'power4.out',
        },
        '+=0.1',
      )
      .fromTo(
        kimRef.current,
        { x: 500, scaleX: 2, opacity: 0 },
        {
          x: 0,
          scaleX: 1,
          opacity: 1,
          duration: 0.3,
          ease: 'power4.out',
          onStart: () => kimRef.current?.classList.add('kim-border'),
          onComplete: () => {
            kimRef.current?.classList.remove('kim-border')
            kimRef.current?.classList.add('text-white')
          },
        },
        '+=0.1',
      )
  }, [])

  return (
    <section className="m-auto flex min-h-screen w-[80%] flex-col justify-center gap-4 text-5xl font-bold text-white">
      <div className="flex items-center gap-10">
        <div
          ref={frontendRef}
          className="pointer-events-none text-[160px] font-black tracking-tight"
        >
          FRONTEND
        </div>
        <div ref={devRef} className="pointer-events-none text-[160px] font-black tracking-tight">
          DEV
        </div>
      </div>
      <div className="flex justify-start gap-10">
        <div
          ref={graceRef}
          className="grace-border pointer-events-none text-[120px] font-black tracking-tight text-transparent transition-all"
        >
          GRACE
        </div>
        <div
          ref={kimRef}
          className="kim-border pointer-events-none text-[120px] font-black tracking-tight text-transparent transition-all"
        >
          KIM
        </div>
      </div>
      <div
        ref={portfolioRef}
        className="portfolio-border pointer-events-none mx-auto translate-y-5 rotate-180 pl-10 text-[100px] font-black text-transparent"
      >
        PORTFOLIO
      </div>
    </section>
  )
}
