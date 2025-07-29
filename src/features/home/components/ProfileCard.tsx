'use client'

import Image from 'next/image'
import me from '../../../../public/image/me.jpg'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function ProfileCard() {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { y: 200, opacity: 0, scale: 0.8 },
        { y: 0, opacity: 1, scale: 1, duration: 1, delay: 3.2, ease: 'power4.out' },
      )
    }
  }, [])

  return (
    <div
      ref={cardRef}
      className="absolute top-2/3 right-80 w-[300px] -translate-y-1/2 rotate-[20deg] transform overflow-hidden rounded-[20px] bg-gradient-to-br from-white/10 via-white/5 to-white/10 p-5 text-white shadow-[0_4px_30px_rgba(0,0,0,0.1)] shadow-[inset_0_0_30px_rgba(255,255,255,0.2)] ring-1 ring-white/20 backdrop-blur-2xl"
    >
      <div className="pointer-events-none absolute inset-0 rounded-[20px] bg-white/20 opacity-10 blur-2xl" />
      <Image
        src={me}
        alt="Profile Picture"
        width={100}
        height={100}
        unoptimized
        className="aspect-square w-full rounded-[16px] border border-white/30 object-cover"
      />
      <div className="mt-4 text-center">
        <h2 className="text-xl font-semibold">Grace Kim(김은혜)</h2>
        <p className="text-sm text-white/70">Frontend Developer</p>
      </div>
    </div>
  )
}
