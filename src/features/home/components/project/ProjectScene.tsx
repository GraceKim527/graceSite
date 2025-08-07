'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'
import { sampleProjects } from '../../data/projects'
import { Project } from '../../types/project'

gsap.registerPlugin(ScrollTrigger)

export default function ProjectScene() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const featuredGridRef = useRef<HTMLDivElement>(null)
  const moreButtonRef = useRef<HTMLButtonElement>(null)
  const moreGridRef = useRef<HTMLDivElement>(null)

  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [showMoreProjects, setShowMoreProjects] = useState(false)

  // 프로젝트 분류
  const featuredProjects = sampleProjects.filter((project) => project.isFeatured)
  const otherProjects = sampleProjects.filter((project) => !project.isFeatured)

  useEffect(() => {
    if (!sectionRef.current) return

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 85%',
        end: 'bottom 15%',
        toggleActions: 'play none none reverse',
        scrub: false,
        refreshPriority: -1,
      },
    })

    // 타이틀 애니메이션
    tl.fromTo(
      titleRef.current,
      { y: 80, opacity: 0, scale: 0.9 },
      { y: 0, opacity: 1, scale: 1, duration: 1.2, ease: 'power4.out' },
    )

    // 대표 프로젝트 카드들 스태거 애니메이션
    if (featuredGridRef.current) {
      const featuredCards = featuredGridRef.current.children
      tl.fromTo(
        featuredCards,
        {
          y: 80,
          opacity: 0,
          scale: 0.9,
          rotationX: 30,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotationX: 0,
          duration: 0.2,
          ease: 'power4.out',
          stagger: 0.2,
        },
        '-=0.2',
      )
    }

    // 더 보기 버튼 애니메이션
    tl.fromTo(
      moreButtonRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
      '-=0.4',
    )

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  // 더 보기 프로젝트들 애니메이션
  useEffect(() => {
    if (showMoreProjects && moreGridRef.current) {
      const moreCards = moreGridRef.current.children
      gsap.fromTo(
        moreCards,
        {
          y: 60,
          opacity: 0,
          scale: 0.8,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.5,
          ease: 'power3.out',
          stagger: 0.15,
        },
      )
    }
  }, [showMoreProjects])

  const handleMoreProjectsClick = () => {
    setShowMoreProjects(true)

    if (moreButtonRef.current) {
      gsap.to(moreButtonRef.current, {
        scale: 0,
        opacity: 0,
        duration: 0.3,
        ease: 'power2.in',
      })
    }
  }

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project)
  }

  const handleModalClose = () => {
    setSelectedProject(null)
  }

  return (
    <>
      <section
        ref={sectionRef}
        className="m-auto flex min-h-screen w-full items-center justify-center py-20 sm:w-[80%]"
      >
        <div className="container m-auto px-4">
          <div className="mb-16 text-center">
            <div ref={titleRef}>
              <h2 className="mb-4 text-4xl font-black text-gray-600 lg:text-5xl">
                My
                <span className="block bg-gradient-to-r from-blue-500 to-cyan-700 bg-clip-text text-transparent">
                  Projects
                </span>
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-400">
                사용자 경험을 중심으로 한 프론트엔드 개발 프로젝트들입니다.
                <br />각 프로젝트를 클릭하여 자세한 내용을 확인해보세요.
              </p>
            </div>
          </div>

          {/* 대표 프로젝트들 */}
          <div className="mb-12">
            <div className="mb-8 text-center">
              <h3 className="text-2xl font-bold text-purple-300">✨ Featured Projects</h3>
              <p className="mt-2 text-gray-400">주요 프로젝트들을 소개합니다</p>
            </div>

            <div ref={featuredGridRef} className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {featuredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  onClick={() => handleProjectClick(project)}
                />
              ))}
            </div>
          </div>

          {/* 더 보기 버튼 */}
          {!showMoreProjects && otherProjects.length > 0 && (
            <div className="mb-12 text-center">
              <button
                ref={moreButtonRef}
                onClick={handleMoreProjectsClick}
                className="group cursor-pointer rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:from-purple-700 hover:to-blue-700"
              >
                <span className="flex items-center gap-2">
                  더 많은 프로젝트 보기
                  <svg
                    className="h-5 w-5 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </button>
            </div>
          )}

          {/* 추가 프로젝트들 */}
          {showMoreProjects && otherProjects.length > 0 && (
            <div>
              <div className="mb-8 text-center">
                <h3 className="text-2xl font-bold text-green-300">🚀 More Projects</h3>
                <p className="mt-2 text-gray-400">다양한 개발 경험과 도전들</p>
              </div>

              <div
                ref={moreGridRef}
                className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
              >
                {otherProjects.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index + featuredProjects.length}
                    onClick={() => handleProjectClick(project)}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 프로젝트 상세 모달 */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={handleModalClose}
      />
    </>
  )
}
