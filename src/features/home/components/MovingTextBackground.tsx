'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function MovingTextBackground() {
  const lineRef1 = useRef<HTMLDivElement>(null)
  const lineRef2 = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const animateLine = (el: HTMLDivElement | null) => {
      if (!el) return
      // Use xPercent for seamless infinite loop
      gsap.set(el, { xPercent: 0 })
      gsap.to(el, {
        xPercent: -50,
        duration: 400,
        repeat: -1,
        ease: 'none',
      })
    }

    animateLine(lineRef1.current)
    animateLine(lineRef2.current)
  }, [])

  const lineContent1 = (
    <>
      <div className="mr-100 scale-y-70 transform leading-tight tracking-tight text-gray-300">
        CRAFTING UI
      </div>
      <div className="mr-100 scale-y-70 transform leading-tight tracking-tight text-gray-500">
        GRACE KIM
      </div>
      <div className="mr-100 scale-y-70 transform leading-tight tracking-tight text-gray-300">
        UX EXPLORER
      </div>
      <div className="mr-100 scale-y-70 transform leading-tight tracking-tight text-gray-500">
        GRACE KIM
      </div>
      <div className="mr-100 scale-y-70 transform leading-tight tracking-tight text-gray-300">
        WEB CREATOR
      </div>
      <div className="mr-100 scale-y-70 transform leading-tight tracking-tight text-gray-500">
        GRACE KIM
      </div>
      <div className="mr-100 scale-y-70 transform leading-tight tracking-tight text-gray-300">
        THE BADDEST DO
      </div>
      <div className="mr-100 scale-y-70 transform leading-tight tracking-tight text-gray-500">
        GRACE KIM
      </div>
    </>
  )

  const lineContent2 = (
    <>
      <div className="mr-100 scale-y-70 transform leading-tight tracking-tight text-gray-300">
        FRONTEND DEV
      </div>
      <div className="mr-100 scale-y-70 transform leading-tight tracking-tight text-gray-500">
        GRACE KIM
      </div>
      <div className="mr-100 scale-y-70 transform leading-tight tracking-tight text-gray-300">
        DETAIL-DRIVEN
      </div>
      <div className="mr-100 scale-y-70 transform leading-tight tracking-tight text-gray-500">
        GRACE KIM
      </div>
      <div className="mr-100 scale-y-70 transform leading-tight tracking-tight text-gray-300">
        CODE & DESIGN
      </div>
      <div className="mr-100 scale-y-70 transform leading-tight tracking-tight text-gray-500">
        GRACE KIM
      </div>
      <div className="mr-100 scale-y-70 transform leading-tight tracking-tight text-gray-300">
        CREATIVE TECH
      </div>
    </>
  )

  return (
    <div className="flex h-full flex-col justify-between gap-6 overflow-hidden py-10 text-[40px] font-bold text-white">
      <div ref={lineRef1} className="flex w-max whitespace-nowrap">
        {lineContent1}
        {lineContent1}
      </div>
      <div ref={lineRef2} className="flex w-max whitespace-nowrap">
        {lineContent2}
        {lineContent2}
      </div>
    </div>
  )
}
