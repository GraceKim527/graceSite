'use client'

import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { Award } from '../../types/achievement'

interface AwardCardProps {
  awards: Award[]
}

export default function AwardCard({ awards }: AwardCardProps) {
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

  const getRankBadge = (rank: string) => {
    if (rank.includes('대상')) {
      return (
        <span className="rounded-full bg-red-500/20 px-2 py-1 text-xs text-red-400">🏆 {rank}</span>
      )
    } else if (rank.includes('1위') || rank.includes('금상')) {
      return (
        <span className="rounded-full bg-yellow-500/20 px-2 py-1 text-xs text-yellow-400">
          🥇 {rank}
        </span>
      )
    } else if (rank.includes('2위') || rank.includes('준우승') || rank.includes('은상')) {
      return (
        <span className="rounded-full bg-gray-500/20 px-2 py-1 text-xs text-gray-400">
          🥈 {rank}
        </span>
      )
    } else if (rank.includes('3위') || rank.includes('동상')) {
      return (
        <span className="rounded-full bg-orange-500/20 px-2 py-1 text-xs text-orange-400">
          🥉 {rank}
        </span>
      )
    } else {
      return (
        <span className="rounded-full bg-purple-500/20 px-2 py-1 text-xs text-purple-400">
          {rank}
        </span>
      )
    }
  }

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case '해커톤':
        return '💻'
      case '프로그래밍':
        return '⌨️'
      case '경진대회':
        return '🏆'
      default:
        return '🏆'
    }
  }

  return (
    <div
      ref={cardRef}
      className="group h-full cursor-default rounded-xl border border-purple-500/30 bg-gray-950/90 backdrop-blur-sm transition-all duration-300 hover:border-purple-400/50"
    >
      <div className="p-6">
        <div className="mb-6">
          <div className="mb-2 flex items-center gap-2">
            <span className="text-2xl">🏅</span>
            <h3 className="group-hover:text-opacity-90 text-xl font-bold text-white transition-colors">
              수상
            </h3>
          </div>
          <p className="text-sm text-gray-400">대회 및 공모전 수상 내역</p>
        </div>

        <div className="max-h-96 space-y-3 overflow-y-auto pr-2">
          {awards.map((award) => (
            <div key={award.id} className="rounded-lg bg-gray-800/30 p-4">
              <div className="mb-2 flex items-start gap-2">
                <span className="text-lg">{getCategoryIcon(award.category)}</span>
                <div className="flex-1">
                  <h4 className="leading-tight font-semibold text-white">{award.title}</h4>
                  <p className="mt-1 text-sm text-gray-400">{award.organizer}</p>
                </div>
              </div>

              <div className="mb-2 flex items-center justify-between">
                {getRankBadge(award.rank)}
                <span className="font-mono text-xs text-gray-500">{award.date}</span>
              </div>

              {award.description && (
                <p className="text-xs leading-relaxed text-gray-300">{award.description}</p>
              )}

              {award.achievement && (
                <p className="mt-2 text-xs font-medium text-purple-400">{award.achievement}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
