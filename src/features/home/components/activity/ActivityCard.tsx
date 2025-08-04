'use client'

import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { Activity } from '../../types/activity'

interface ActivityCardProps {
  activity: Activity
  index: number
}

export default function ActivityCard({ activity, index }: ActivityCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const getBorderColor = (index: number) => {
    const borderColors = [
      'border-purple-500/30 hover:border-purple-400/50',
      'border-blue-500/30 hover:border-blue-400/50',
      'border-green-500/30 hover:border-green-400/50',
      'border-orange-500/30 hover:border-orange-400/50',
      'border-pink-500/30 hover:border-pink-400/50',
      'border-cyan-500/30 hover:border-cyan-400/50',
      'border-indigo-500/30 hover:border-indigo-400/50',
      'border-red-500/30 hover:border-red-400/50',
    ]
    return borderColors[index % borderColors.length]
  }

  const getAccentColor = (index: number) => {
    const accentColors = [
      'from-purple-500 to-purple-600',
      'from-blue-500 to-blue-600',
      'from-green-500 to-green-600',
      'from-orange-500 to-orange-600',
      'from-pink-500 to-pink-600',
      'from-cyan-500 to-cyan-600',
      'from-indigo-500 to-indigo-600',
      'from-red-500 to-red-600',
    ]
    return accentColors[index % accentColors.length]
  }

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

  const getLinkIcon = (type: string) => {
    switch (type) {
      case 'blog':
        return '📝'
      case 'official':
        return '🔗'
      case 'presentation':
        return '📊'
      case 'article':
        return '📰'
      default:
        return '🔗'
    }
  }

  return (
    <div
      ref={cardRef}
      className={`group cursor-default rounded-xl border bg-gray-950/90 backdrop-blur-sm transition-all duration-300 ${getBorderColor(index)}`}
    >
      <div className="p-6">
        <div className="mb-4">
          <div className="mb-2 flex flex-col gap-1">
            <h3 className="group-hover:text-opacity-90 text-xl font-bold text-white transition-colors">
              {activity.title}
            </h3>
            <div className="flex flex-wrap items-center gap-2 text-sm">
              <span className={`font-semibold text-white`}>{activity.role}</span>
              <span className="text-gray-500">•</span>
              <span className="text-gray-400">{activity.organization}</span>
            </div>
            <div className="font-mono text-sm text-gray-500">{activity.period}</div>
          </div>
        </div>

        {/* 한 줄 요약 */}
        <div className="mb-4">
          <p className="leading-relaxed text-gray-300">{activity.summary}</p>
        </div>

        {/* 핵심 역할 및 성과 */}
        <div className="mb-4">
          <h4 className="mb-2 text-sm font-semibold text-gray-200">🎯 핵심 역할 및 성과</h4>
          <ul className="space-y-1.5">
            {activity.keyResponsibilities.map((responsibility, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-gray-400">
                <span
                  className={`mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gradient-to-r ${getAccentColor(index)}`}
                />
                <span className="leading-relaxed">{responsibility}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 배우고 느낀 점 */}
        <div className="mb-4">
          <h4 className="mb-2 text-sm font-semibold text-gray-200">💡 배우고 느낀 점</h4>
          <p className="text-sm leading-relaxed text-gray-400 italic">
            &quot;{activity.whatILearned}&quot;
          </p>
        </div>

        {/* 관련 링크 */}
        {activity.links && activity.links.length > 0 && (
          <div>
            <h4 className="mb-2 text-sm font-semibold text-gray-200">🔗 관련 링크</h4>
            <div className="flex flex-wrap gap-2">
              {activity.links.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link flex items-center gap-1 rounded-lg bg-gray-800/50 px-3 py-1.5 text-xs text-gray-400 transition-colors hover:bg-gray-700/50 hover:text-white"
                >
                  <span>{getLinkIcon(link.type)}</span>
                  <span>{link.title}</span>
                  <svg
                    className="h-3 w-3 transition-transform group-hover/link:translate-x-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
