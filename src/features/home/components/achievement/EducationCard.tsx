'use client'

import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { Education } from '../../types/achievement'

interface EducationCardProps {
  educations: Education[]
}

export default function EducationCard({ educations }: EducationCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!cardRef.current) return

    const card = cardRef.current

    const handleMouseEnter = () => {
      gsap.to(card, {
        scale: 1.02,
        y: -8,
        duration: 0.3,
        ease: 'power2.out',
      })
    }

    const handleMouseLeave = () => {
      gsap.to(card, {
        scale: 1,
        y: 0,
        duration: 0.3,
        ease: 'power2.out',
      })
    }

    card.addEventListener('mouseenter', handleMouseEnter)
    card.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      card.removeEventListener('mouseenter', handleMouseEnter)
      card.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <div
      ref={cardRef}
      className="group h-full cursor-default rounded-xl border border-blue-500/30 bg-gray-950/90 backdrop-blur-sm transition-all duration-300 hover:border-blue-400/50"
    >
      <div className="p-6">
        <div className="mb-6">
          <div className="mb-2 flex items-center gap-2">
            <span className="text-2xl">🎓</span>
            <h3 className="group-hover:text-opacity-90 text-xl font-bold text-white transition-colors">
              교육
            </h3>
          </div>
          <p className="text-sm text-gray-400">학력 및 교육 과정</p>
        </div>

        <div className="space-y-4">
          {educations.map((edu) => (
            <div key={edu.id} className="rounded-lg bg-gray-800/30 p-4">
              <div className="mb-2 flex items-start justify-between">
                <h4 className="font-semibold text-white">{edu.institution}</h4>
                <span className="rounded-full bg-green-500/20 px-2 py-1 text-xs text-green-400">
                  {edu.status}
                </span>
              </div>
              <p className="text-sm text-gray-300">{edu.program}</p>
              {edu.major && <p className="text-sm text-gray-400">{edu.major}</p>}
              <div className="mt-2 space-y-1 text-xs text-gray-400">
                <p className="font-mono">{edu.period}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
