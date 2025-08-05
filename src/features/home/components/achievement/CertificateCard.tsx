'use client'

import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { Certificate } from '../../types/achievement'

interface CertificateCardProps {
  certificates: Certificate[]
}

export default function CertificateCard({ certificates }: CertificateCardProps) {
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
      className="group h-full cursor-default rounded-xl border border-emerald-500/30 bg-gray-950/90 backdrop-blur-sm transition-all duration-300 hover:border-emerald-400/50"
    >
      <div className="p-6">
        <div className="mb-6">
          <div className="mb-2 flex items-center gap-2">
            <span className="text-2xl">🏆</span>
            <h3 className="group-hover:text-opacity-90 text-xl font-bold text-white transition-colors">
              자격증
            </h3>
          </div>
          <p className="text-sm text-gray-400">취득한 전문 자격증</p>
        </div>

        <div className="space-y-4">
          {certificates.map((cert) => (
            <div key={cert.id} className="rounded-lg bg-gray-800/30 p-4">
              <h4 className="font-semibold text-white">{cert.name}</h4>
              <div className="mt-1 space-y-1 text-xs text-gray-400">
                <p>{cert.issuer}</p>
                <p className="font-mono">{cert.issueDate}</p>
                {cert.credentialId && (
                  <p className="font-mono text-gray-500">ID: {cert.credentialId}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
