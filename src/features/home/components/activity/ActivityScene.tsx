'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ActivityCard from './ActivityCard'
import { getActivitiesByYear } from '../../data/activities'
import { useTranslations } from 'next-intl'

gsap.registerPlugin(ScrollTrigger)

export default function ActivityScene() {
  const t = useTranslations('activity')
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)

  const activitiesByYear = getActivitiesByYear()

  useEffect(() => {
    if (!sectionRef.current) return

    // 메인 타이틀 애니메이션
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

    // 각 연도별 섹션 애니메이션
    activitiesByYear.forEach((yearData, yearIndex) => {
      const yearElement = document.querySelector(`[data-year="${yearData.year}"]`)
      const yearTitleElement = document.querySelector(`[data-year-title="${yearData.year}"]`)

      if (yearElement && yearTitleElement) {
        // 연도 타이틀 애니메이션
        gsap.fromTo(
          yearTitleElement,
          { x: -100, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: yearElement,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          },
        )

        // 해당 연도의 활동 카드들 애니메이션
        const activityCards = yearElement.querySelectorAll('[data-activity-card]')

        activityCards.forEach((card, cardIndex) => {
          gsap.fromTo(
            card,
            {
              x: 100,
              opacity: 0,
              scale: 0.9,
            },
            {
              x: 0,
              opacity: 1,
              scale: 1,
              duration: 0.6,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
                // 각 카드마다 약간의 지연을 두어 순차적으로 나타나게 함
              },
              delay: cardIndex * 0.1, // 카드별 지연
            },
          )
        })
      }
    })

    // 타임라인 라인 애니메이션
    if (timelineRef.current) {
      gsap.fromTo(
        timelineRef.current,
        { scaleY: 0, transformOrigin: 'top center' },
        {
          scaleY: 1,
          duration: 2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 90%',
            toggleActions: 'play none none reverse',
          },
        },
      )
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [activitiesByYear])

  return (
    <section
      ref={sectionRef}
      className="m-auto flex min-h-screen items-start justify-center py-20 sm:w-[90%] md:w-[80%] lg:w-[60%]"
    >
      <div className="container m-auto px-4">
        <div className="mb-20 text-center">
          <div ref={titleRef}>
            <h2 className="mb-4 text-5xl font-black text-gray-600 lg:text-6xl">
              My
              <span className="block bg-gradient-to-r from-orange-500 to-red-700 bg-clip-text text-transparent">
                Activities
              </span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-400">
              {t.rich('description', {
                br: () => <br />,
              })}
            </p>
          </div>
        </div>

        {/* 타임라인 컨텐츠 */}
        <div className="relative">
          <div
            ref={timelineRef}
            className="absolute top-0 left-8 h-full w-0.5 bg-gradient-to-b from-orange-500/50 via-red-500/30 to-transparent md:left-24"
          />

          {/* 연도별 활동들 */}
          <div className="space-y-16">
            {activitiesByYear.map((yearData, yearIndex) => (
              <div key={yearData.year} data-year={yearData.year} className="relative">
                {/* 연도 표시 */}
                <div className="mb-8 flex items-center">
                  <div className="relative">
                    {/* 타임라인 포인트 */}
                    <div className="absolute top-1/2 -left-2 h-4 w-4 -translate-y-1/2 rounded-full bg-gradient-to-r from-orange-500 to-red-500 shadow-lg md:-left-6" />

                    {/* 연도 텍스트 */}
                    <div data-year-title={yearData.year} className="ml-8 md:ml-12">
                      <h3 className="text-4xl font-black text-white md:text-5xl">
                        {yearData.year}
                      </h3>
                      <div className="mt-1 h-1 w-16 rounded-full bg-gradient-to-r from-orange-500 to-red-500" />
                    </div>
                  </div>
                </div>

                {/* 해당 연도의 활동들 */}
                <div className="w-full space-y-8">
                  {yearData.activities.map((activity, activityIndex) => (
                    <div
                      key={activity.id}
                      data-activity-card
                      className="relative lg:left-0 lg:w-full xl:left-1/3 xl:w-2/3"
                    >
                      <ActivityCard activity={activity} index={yearIndex * 10 + activityIndex} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="relative mt-8">
            <div className="absolute -left-2 h-4 w-4 rounded-full bg-gradient-to-r from-gray-600 to-gray-800 opacity-50 md:-left-6" />
            <div className="ml-8 text-gray-500 md:ml-12">
              <span className="font-mono text-sm">generating • • •</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
