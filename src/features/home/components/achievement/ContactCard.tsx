'use client'

import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ContactInfo } from '../../types/achievement'
import * as gtag from '@/libs/gtag'

interface ContactCardProps {
  contactInfo: ContactInfo
}

export default function ContactCard({ contactInfo }: ContactCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const iconsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!cardRef.current || !iconsRef.current) return

    // 카드 전체 애니메이션
    const handleMouseEnter = () => {
      gsap.to(cardRef.current, {
        scale: 1.02,
        y: -4,
        duration: 0.4,
        ease: 'power2.out',
      })

      const icons = iconsRef.current?.children
      if (icons) {
        gsap.to(icons, {
          y: -2,
          duration: 0.3,
          stagger: 0.1,
          ease: 'back.out(1.7)',
        })
      }
    }

    const handleMouseLeave = () => {
      gsap.to(cardRef.current, {
        scale: 1,
        y: 0,
        duration: 0.4,
        ease: 'power2.out',
      })

      const icons = iconsRef.current?.children
      if (icons) {
        gsap.to(icons, {
          y: 0,
          scale: 1,
          duration: 0.3,
          stagger: 0.05,
          ease: 'back.out(1.7)',
        })
      }
    }

    const card = cardRef.current
    card.addEventListener('mouseenter', handleMouseEnter)
    card.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      card.removeEventListener('mouseenter', handleMouseEnter)
      card.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  const handleEmailClick = () => {
    window.location.href = `mailto:${contactInfo.email}`
    gtag.event('select_content', {
      event_category: 'contact',
      event_label: contactInfo.email,
      value: 1, // 1: email, 2: github, 3: linkedin
    })
  }

  const handleGithubClick = () => {
    window.open(contactInfo.github, '_blank', 'noopener,noreferrer')
    gtag.event('select_content', {
      event_category: 'contact',
      event_label: contactInfo.github,
      value: 2, // 1: email, 2: github, 3: linkedin
    })
  }

  const handleLinkedinClick = () => {
    if (contactInfo.linkedin) {
      window.open(contactInfo.linkedin, '_blank', 'noopener,noreferrer')
    }
    gtag.event('select_content', {
      event_category: 'contact',
      event_label: contactInfo.linkedin,
      value: 3, // 1: email, 2: github, 3: linkedin
    })
  }

  return (
    <div className="block justify-center lg:flex">
      <div
        ref={cardRef}
        className="group relative cursor-pointer overflow-hidden rounded-3xl border border-slate-700/50 bg-gradient-to-br from-slate-800/40 via-slate-900/60 to-gray-900/80 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:border-slate-600/70 hover:shadow-slate-500/20"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-cyan-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="relative z-10 px-8 py-6">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="w-full flex-1">
              <div className="mb-3 flex items-center gap-3">
                <div className="h-3 w-3 animate-pulse rounded-full bg-gradient-to-r from-green-400 to-blue-500" />
                <h3 className="text-xl font-bold text-white">Contact Me!</h3>
              </div>
              <p className="leading-relaxed text-slate-300">
                함께 성장하고 소통할 수 있는 기회를 만들어가고 싶습니다.
                <br />
                <span className="text-sm text-slate-400">언제든 편하게 연락주세요 🚀</span>
              </p>
            </div>

            <div ref={iconsRef} className="flex flex-wrap items-center gap-4">
              <button
                onClick={handleEmailClick}
                className="group/btn relative flex items-center gap-3 rounded-xl border border-red-500/30 bg-gradient-to-r from-red-500/20 to-pink-500/20 px-4 py-3 transition-all duration-300 hover:border-red-500/50 hover:from-red-500/30 hover:to-pink-500/30"
                title={contactInfo.email}
              >
                <img src="https://skillicons.dev/icons?i=gmail" className="h-5 w-5" />
                <span className="text-sm font-medium text-red-200 transition-colors group-hover/btn:text-white">
                  Email
                </span>
              </button>

              <button
                onClick={handleGithubClick}
                className="group/btn relative flex items-center gap-3 rounded-xl border border-gray-500/30 bg-gradient-to-r from-gray-600/20 to-slate-600/20 px-4 py-3 transition-all duration-300 hover:border-gray-500/50 hover:from-gray-600/30 hover:to-slate-600/30"
                title="GitHub Profile"
              >
                <img src="https://skillicons.dev/icons?i=github" className="h-5 w-5" />
                <span className="text-sm font-medium text-gray-200 transition-colors group-hover/btn:text-white">
                  GitHub
                </span>
              </button>

              <button
                onClick={handleLinkedinClick}
                className="group/btn relative flex items-center gap-3 rounded-xl border border-blue-500/30 bg-gradient-to-r from-blue-600/20 to-blue-500/20 px-4 py-3 transition-all duration-300 hover:border-blue-500/50 hover:from-blue-600/30 hover:to-blue-500/30"
                title="LinkedIn Profile"
              >
                <img src="https://skillicons.dev/icons?i=linkedin" className="h-5 w-5" />
                <span className="text-sm font-medium text-blue-200 transition-colors group-hover/btn:text-white">
                  LinkedIn
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* 하단 액센트 라인 */}
        <div className="absolute right-0 bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 opacity-60 transition-opacity duration-500 group-hover:opacity-100" />
      </div>
    </div>
  )
}
