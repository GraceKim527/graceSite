'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useTranslations } from 'next-intl'

gsap.registerPlugin(ScrollTrigger)

export default function AboutScene() {
  const t = useTranslations('about')
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const introTextRef = useRef<HTMLDivElement>(null)
  const cardsContainerRef = useRef<HTMLDivElement>(null)
  const card1Ref = useRef<HTMLDivElement>(null)
  const card2Ref = useRef<HTMLDivElement>(null)
  const card3Ref = useRef<HTMLDivElement>(null)

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
        anticipatePin: 1,
      },
    })

    tl.fromTo(
      titleRef.current,
      { y: 80, opacity: 0, scale: 0.9 },
      { y: 0, opacity: 1, scale: 1, duration: 1.2, ease: 'power4.out' },
    )

      .fromTo(
        imageRef.current,
        { scale: 0.3, opacity: 0, rotation: -10 },
        { scale: 1, opacity: 1, rotation: 0, duration: 1.4, ease: 'back.out(1.7)' },
        '-=0.8',
      )

      // 소개 텍스트 애니메이션
      .fromTo(
        introTextRef.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
        '-=0.6',
      )

      // 카드들 스태거 애니메이션
      .fromTo(
        [card1Ref.current, card2Ref.current, card3Ref.current],
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
          duration: 0.5,
          ease: 'power4.out',
          stagger: 0.15,
        },
        '-=0.4',
      )

    // 카드 호버 효과
    const cards = [card1Ref.current, card2Ref.current, card3Ref.current]
    cards.forEach((card) => {
      if (card) {
        const handleMouseEnter = () => {
          gsap.to(card, { scale: 1.05, duration: 0.3, ease: 'power4.out' })
        }
        const handleMouseLeave = () => {
          gsap.to(card, { scale: 1, duration: 0.3, ease: 'power4.out' })
        }

        card.addEventListener('mouseenter', handleMouseEnter)
        card.addEventListener('mouseleave', handleMouseLeave)

        return () => {
          card.removeEventListener('mouseenter', handleMouseEnter)
          card.removeEventListener('mouseleave', handleMouseLeave)
        }
      }
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="m-auto flex min-h-screen w-full items-center justify-center sm:w-[80%]"
    >
      <div className="container m-auto px-4">
        <div className="mb-6 text-center">
          <div ref={titleRef} className="mb-8">
            <h2 className="mb-4 text-4xl font-black text-gray-600 lg:text-5xl">
              About
              <span className="block bg-gradient-to-r from-purple-500 to-violet-700 bg-clip-text text-transparent">
                Grace Kim
              </span>
            </h2>
          </div>

          <div ref={imageRef} className="mb-8 flex justify-center">
            <div className="relative">
              <div className="h-30 w-30 overflow-hidden rounded-full shadow-2xl lg:h-40 lg:w-40">
                <Image
                  src="/image/me.jpg"
                  alt="Grace Kim"
                  width={180}
                  height={180}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -top-3 -right-3 h-16 w-16 animate-pulse rounded-full bg-gradient-to-br from-purple-400 to-pink-400 opacity-20"></div>
              <div
                className="absolute -bottom-4 -left-4 h-20 w-20 animate-pulse rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 opacity-15"
                style={{ animationDelay: '1s' }}
              ></div>
            </div>
          </div>

          <div ref={introTextRef} className="mx-auto max-w-3xl">
            <p className="text-lg leading-relaxed text-gray-400 md:text-xl">
              {t('greeting')} <br />
              <span className="font-semibold text-gray-200">{t('introLine1')}</span>
              <br />
              {t('introLine2')}
            </p>
          </div>
        </div>

        <div ref={cardsContainerRef} className="space-y-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div
              ref={card1Ref}
              className="cursor-pointer rounded-lg border border-purple-800/20 bg-gradient-to-r from-purple-950/30 to-pink-950/30 p-6 transition-all duration-300"
            >
              <h3 className="mb-3 flex items-center text-lg font-bold text-purple-300">
                {t('card1.title')}
              </h3>
              <p className="text-sm leading-relaxed text-gray-300">
                {t.rich('card1.description', {
                  highlight: (chunks) => (
                    <span className="font-semibold text-purple-400">{chunks}</span>
                  ),
                })}
              </p>
            </div>

            <div
              ref={card2Ref}
              className="cursor-pointer rounded-lg border border-blue-800/20 bg-gradient-to-r from-blue-950/30 to-cyan-950/30 p-6 transition-all duration-300"
            >
              <h3 className="mb-3 flex items-center text-lg font-bold text-blue-300">
                {t('card2.title')}
              </h3>
              <p className="text-sm leading-relaxed text-gray-300">
                {t.rich('card2.description', {
                  highlight: (chunks) => (
                    <span className="font-semibold text-blue-400">{chunks}</span>
                  ),
                })}
              </p>
            </div>

            <div
              ref={card3Ref}
              className="cursor-pointer rounded-lg border border-green-800/20 bg-gradient-to-r from-green-900/30 to-emerald-900/30 p-6 transition-all duration-300"
            >
              <h3 className="mb-3 flex items-center text-lg font-bold text-green-300">
                {t('card3.title')}
              </h3>
              <p className="text-sm leading-relaxed text-gray-300">
                {t.rich('card3.description', {
                  highlight: (chunks) => (
                    <span className="font-semibold text-green-400">{chunks}</span>
                  ),
                })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
