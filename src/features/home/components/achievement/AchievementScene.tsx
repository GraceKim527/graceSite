'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import CertificateCard from './CertificateCard'
import EducationCard from './EducationCard'
import AwardCard from './AwardCard'
import ContactCard from './ContactCard'
import { certificates, educations, awards, contactInfo } from '../../data/achievements'

gsap.registerPlugin(ScrollTrigger)

export default function AchievementScene() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const titleTl = gsap.timeline({
      scrollTrigger: {
        trigger: titleRef.current,
        start: 'top 85%',
        end: 'bottom 15%',
        toggleActions: 'play none none reverse',
      },
    })

    titleTl.fromTo(
      titleRef.current,
      { y: 80, opacity: 0, scale: 0.9 },
      { y: 0, opacity: 1, scale: 1, duration: 1.2, ease: 'power4.out' },
    )

    // 그리드 카드들 애니메이션
    const cards = gridRef.current?.children
    if (cards) {
      gsap.fromTo(
        cards,
        { y: 100, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        },
      )
    }

    // Contact 카드 애니메이션
    if (contactRef.current) {
      gsap.fromTo(
        contactRef.current,
        { y: 60, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: contactRef.current,
            start: 'top 85%',
            end: 'bottom 15%',
            toggleActions: 'play none none reverse',
          },
        },
      )
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger?.closest?.('[data-section="achievement"]')) {
          trigger.kill()
        }
      })
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      data-section="achievement"
      className="relative min-h-screen bg-gray-950 py-20"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-20 text-center">
          <div ref={titleRef}>
            <h2 className="mb-4 text-5xl font-black text-gray-600 lg:text-6xl">
              My
              <span className="block bg-gradient-to-r from-green-500 to-emerald-700 bg-clip-text text-transparent">
                Achievements
              </span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-400">
              성장하는 과정에서 마주한 작은 성공과 배움의 기록들입니다.
            </p>
          </div>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <CertificateCard certificates={certificates} />
          <EducationCard educations={educations} />
          <AwardCard awards={awards} />
        </div>

        <div ref={contactRef} className="mt-16">
          <ContactCard contactInfo={contactInfo} />
        </div>
      </div>
    </section>
  )
}
