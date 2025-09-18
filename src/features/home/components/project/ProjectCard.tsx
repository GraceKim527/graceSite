'use client'

import { useRef, useEffect } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { Project } from '../../types/project'

interface ProjectCardProps {
  project: Project
  onClick: () => void
  index: number
}

export default function ProjectCard({ project, onClick, index }: ProjectCardProps) {
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

  const getBorderColor = (index: number) => {
    const colors = [
      'border-purple-800/30 bg-gradient-to-br from-purple-950/40 to-pink-950/40',
      'border-blue-800/30 bg-gradient-to-br from-blue-950/40 to-cyan-950/40',
      'border-green-800/30 bg-gradient-to-br from-green-950/40 to-emerald-950/40',
      'border-orange-800/30 bg-gradient-to-br from-orange-950/40 to-red-950/40',
      'border-indigo-800/30 bg-gradient-to-br from-indigo-950/40 to-purple-950/40',
    ]
    return colors[index % colors.length]
  }

  return (
    <div
      ref={cardRef}
      onClick={onClick}
      className={`group cursor-pointer rounded-xl border backdrop-blur-sm transition-all duration-300 ${getBorderColor(index)}`}
    >
      <div className="relative h-48 w-full overflow-hidden rounded-t-xl">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {project.isFeatured && (
          <div className="absolute top-3 right-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 px-3 py-1 text-xs font-bold text-black">
            ⭐ Featured
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      <div className="p-6">
        <h3 className="mb-2 text-xl font-bold text-white transition-colors group-hover:text-purple-300">
          {project.title}
        </h3>

        <p className="mb-4 text-sm leading-relaxed text-gray-300">{project.description}</p>

        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {project.techStack.slice(0, 4).map((tech, techIndex) => (
              <div
                key={techIndex}
                className="flex items-center gap-1 rounded-full bg-gray-800/50 px-3 py-1 text-xs"
              >
                <span className={`font-medium text-white`}>{tech}</span>
              </div>
            ))}
            {project.techStack.length > 4 && (
              <div className="flex items-center rounded-full bg-gray-800/50 px-3 py-1 text-xs text-gray-400">
                +{project.techStack.length - 4}개
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-1 text-xs text-gray-400 transition-colors hover:text-white"
              >
                <img
                  src="https://skillicons.dev/icons?i=github"
                  alt="GitHub"
                  width={16}
                  height={16}
                  loading="lazy"
                />
                GitHub
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-1 text-xs text-gray-400 transition-colors hover:text-white"
              >
                <span>🌐</span>
                Live
              </a>
            )}
          </div>

          {project.contribution && (
            <div className="text-xs font-medium text-purple-400">{project.contribution}</div>
          )}
        </div>

        <div className="mt-4 flex items-center justify-center">
          <div className="text-xs text-gray-500 transition-colors group-hover:text-gray-300">
            클릭하여 자세히 보기 →
          </div>
        </div>
      </div>
    </div>
  )
}
