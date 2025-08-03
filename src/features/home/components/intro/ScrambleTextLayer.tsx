'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin'

gsap.registerPlugin(ScrambleTextPlugin)

export default function ScrambleTextLayer() {
  const titleRef = useRef<HTMLDivElement>(null)
  const line1Ref = useRef<HTMLDivElement>(null)
  const line2Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      {
        y: 500,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: 'power4.out',
      },
    )
    gsap.to(line1Ref.current, {
      scrambleText: {
        text: 'React · Next.js · TypeScript · Tailwind CSS · React-Query',
        chars: 'upperCase',
        speed: 0.5,
      },
      duration: 4,
      ease: 'power1.inOut',
    })

    gsap.to(line2Ref.current, {
      scrambleText: {
        text: 'Zustand · Vercel · GSAP · GitHub · Framer',
        chars: 'upperCase',
        speed: 0.5,
      },
      duration: 4,
      ease: 'power1.inOut',
      delay: 0.1,
    })
  }, [])

  return (
    <div className="absolute top-1/3 right-10 -translate-y-1/2 text-right text-lg font-semibold tracking-wide text-gray-700 opacity-80">
      <div ref={titleRef} className="mb-2 text-xs tracking-widest text-gray-500">
        FRONTEND · DEV · LEADER · UX
      </div>
      <div className="whitespace-nowrap" ref={line1Ref} />
      <div className="whitespace-nowrap" ref={line2Ref} />
    </div>
  )
}
