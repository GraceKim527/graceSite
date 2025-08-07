'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { Project } from '../../types/project'

interface ProjectModalProps {
  project: Project | null
  isOpen: boolean
  onClose: () => void
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)
  const backdropRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!modalRef.current || !backdropRef.current) return

    if (isOpen) {
      // 모달 열기 애니메이션
      gsap.fromTo(
        backdropRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: 'power2.out' },
      )
      gsap.fromTo(
        modalRef.current,
        { scale: 0.8, opacity: 0, y: 50 },
        { scale: 1, opacity: 1, y: 0, duration: 0.4, ease: 'back.out(1.7)' },
      )
      // body 스크롤 방지
      document.body.style.overflow = 'hidden'
    } else {
      // body 스크롤 복원
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscKey)
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey)
    }
  }, [isOpen, onClose])

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  const handleClose = () => {
    if (!modalRef.current || !backdropRef.current) return

    // 모달 닫기 애니메이션
    gsap.to(modalRef.current, {
      scale: 0.8,
      opacity: 0,
      y: 50,
      duration: 0.3,
      ease: 'power2.in',
    })
    gsap.to(backdropRef.current, {
      opacity: 0,
      duration: 0.3,
      ease: 'power2.in',
      onComplete: onClose,
    })
  }

  if (!isOpen || !project) return null

  return (
    <div
      ref={backdropRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div
        ref={modalRef}
        className="relative mx-4 max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-2xl bg-gray-900 shadow-2xl"
      >
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-gray-700 bg-gray-900/95 px-6 py-4 backdrop-blur-sm">
          <div className="flex items-center gap-4">
            <div className="relative h-12 w-12 overflow-hidden rounded-lg">
              <Image src={project.image} alt={project.title} fill className="object-cover" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">{project.title}</h2>
              <p className="text-sm text-gray-400">{project.description}</p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="rounded-full p-2 text-gray-400 transition-colors hover:bg-gray-800 hover:text-white"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* 콘텐츠 */}
        <div className="max-h-[calc(90vh-80px)] overflow-y-auto">
          <div className="p-6">
            {/* 프로젝트 개요 */}
            <section className="mb-8">
              <h3 className="mb-4 text-lg font-bold text-purple-300">🎯 프로젝트 개요</h3>
              <div className="rounded-lg bg-gradient-to-r from-purple-950/50 to-pink-950/50 p-4">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <span className="text-sm font-medium text-gray-400">역할</span>
                    <p className="text-white">{project.overview.role}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-400">기여도</span>
                    <p className="text-white">{project.overview.contribution}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-400">기간</span>
                    <p className="text-white">{project.overview.period}</p>
                  </div>
                  {project.overview.teamSize && (
                    <div>
                      <span className="text-sm font-medium text-gray-400">팀 규모</span>
                      <p className="text-white">{project.overview.teamSize}</p>
                    </div>
                  )}
                </div>
              </div>
            </section>

            {/* 기술 스택 */}
            <section className="mb-8">
              <h3 className="mb-4 text-lg font-bold text-blue-300">🛠️ 기술 스택</h3>
              <div className="flex flex-wrap gap-3">
                {project.techStack.map((tech, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 rounded-lg bg-gray-800/50 px-4 py-2"
                  >
                    <img src={tech.icon} alt={tech.name} width={16} height={16} loading="lazy" />
                    <span className={`font-medium text-white`}>{tech.name}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* 주요 기능 */}
            <section className="mb-8">
              <h3 className="mb-4 text-lg font-bold text-green-300">✨ 주요 기능</h3>
              <div className="space-y-3">
                {project.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 rounded-lg bg-green-950/30 p-4"
                  >
                    <span className="text-green-400">▶</span>
                    <p className="text-gray-200">{feature}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 어려웠던 점과 해결 과정 */}
            <section className="mb-8">
              <h3 className="mb-4 text-lg font-bold text-orange-300">🚧 어려웠던 점과 해결 과정</h3>
              <div className="space-y-6">
                {project.challenges.map((challenge, index) => (
                  <div
                    key={index}
                    className="rounded-lg bg-gradient-to-r from-orange-950/30 to-red-950/30 p-4"
                  >
                    <div className="mb-3">
                      <h4 className="mb-2 font-semibold text-orange-300">💥 문제</h4>
                      <p className="text-gray-300">{challenge.problem}</p>
                    </div>
                    <div>
                      <h4 className="mb-2 font-semibold text-green-300">💡 해결</h4>
                      <p className="text-gray-300">{challenge.solution}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 링크 */}
            <section>
              <h3 className="mb-4 text-lg font-bold text-cyan-300">🔗 링크</h3>
              <div className="flex gap-4">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-lg bg-gray-800 px-4 py-2 text-white transition-colors hover:bg-gray-700"
                  >
                    <img
                      src="https://skillicons.dev/icons?i=github"
                      alt="GitHub"
                      width={16}
                      height={16}
                      loading="lazy"
                    />
                    GitHub Repository
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
                  >
                    <span>🌐</span>
                    Live Demo
                  </a>
                )}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
