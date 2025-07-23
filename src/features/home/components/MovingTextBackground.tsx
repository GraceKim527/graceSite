'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function MovingTextBackground() {
  const lineRef1 = useRef<HTMLDivElement>(null)
  const lineRef2 = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const animateLine = (el: HTMLDivElement | null) => {
      if (!el) return
      gsap.to(el, {
        xPercent: -100,
        repeat: -1,
        ease: 'none',
        duration: 500,
      })
    }

    animateLine(lineRef1.current)
    animateLine(lineRef2.current)
  }, [])

  return (
    <div className="flex h-full flex-col justify-between gap-6 overflow-hidden py-10 text-[40px] font-bold text-white">
      <div ref={lineRef1} className="flex w-[200vw] justify-between">
        <div className="scale-y-70 transform leading-tight tracking-tight text-gray-300">
          CRAFTING UI
        </div>
        <div className="scale-y-70 transform leading-tight tracking-tight text-gray-500">
          GRACE KIM
        </div>
        <div className="scale-y-70 transform leading-tight tracking-tight text-gray-300">
          UX EXPLORER
        </div>
        <div className="scale-y-70 transform leading-tight tracking-tight text-gray-500">
          GRACE KIM
        </div>
        <div className="scale-y-70 transform leading-tight tracking-tight text-gray-300">
          WEB CREATOR
        </div>
        <div className="scale-y-70 transform leading-tight tracking-tight text-gray-500">
          GRACE KIM
        </div>
        <div className="scale-y-70 transform leading-tight tracking-tight text-gray-300">
          THE BADDEST DO
        </div>
      </div>

      <div ref={lineRef2} className="flex w-[200vw] justify-between">
        <div className="scale-y-70 transform leading-tight tracking-tight text-gray-300">
          FRONTEND DEV
        </div>
        <div className="scale-y-70 transform leading-tight tracking-tight text-gray-500">
          GRACE KIM
        </div>
        <div className="scale-y-70 transform leading-tight tracking-tight text-gray-300">
          DETAIL-DRIVEN
        </div>
        <div className="scale-y-70 transform leading-tight tracking-tight text-gray-500">
          GRACE KIM
        </div>
        <div className="scale-y-70 transform leading-tight tracking-tight text-gray-300">
          CODE & DESIGN
        </div>
        <div className="scale-y-70 transform leading-tight tracking-tight text-gray-500">
          GRACE KIM
        </div>
        <div className="scale-y-70 transform leading-tight tracking-tight text-gray-300">
          CREATIVE TECH
        </div>
      </div>
    </div>
  )
}
