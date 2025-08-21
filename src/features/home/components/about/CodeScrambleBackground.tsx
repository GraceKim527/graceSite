'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin'
import { useTranslations } from 'next-intl'

gsap.registerPlugin(ScrambleTextPlugin)

export default function CodeScrambleBackground() {
  const t = useTranslations('about')
  const containerRef = useRef<HTMLDivElement>(null)
  const nameRef = useRef<HTMLSpanElement>(null)
  const roleRef = useRef<HTMLSpanElement>(null)
  const skillsRef = useRef<HTMLSpanElement>(null)
  const mottoRef = useRef<HTMLSpanElement>(null)
  const container2Ref = useRef<HTMLDivElement>(null)
  const valuesRef = useRef<HTMLSpanElement>(null)
  const communitySkillsRef = useRef<HTMLSpanElement>(null)
  const softSkillsRef = useRef<HTMLSpanElement>(null)
  useEffect(() => {
    const scrambleLoop = () => {
      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 5,
      })

      const scrambleTargets = [
        { ref: nameRef, text: `return "${t('name')}"` },
        { ref: roleRef, text: 'return "Frontend Developer, Leader"' },
        {
          ref: skillsRef,
          text: 'return ["React", "TypeScript", "Next.js", "Zustand", "React Query", "Tailwind CSS", "GSAP", "Framer"]',
        },
        { ref: mottoRef, text: `return "${t('motto')}"` },
        { ref: valuesRef, text: `return "${t('values')}"` },
        { ref: communitySkillsRef, text: 'return ["Figma", "Notion", "Slack"]' },
        { ref: softSkillsRef, text: 'return ["Communication", "Teamwork", "Problem Solving"]' },
      ]

      scrambleTargets.forEach((target, index) => {
        tl.to(
          target.ref.current,
          {
            scrambleText: {
              text: target.text,
              chars: 'lowerCase',
              speed: 0.4,
            },
            duration: 1.8,
            ease: 'power1.out',
          },
          index * 0.2,
        )
      })

      return tl
    }

    // 초기 딜레이 후 시작
    gsap.delayedCall(2, scrambleLoop)

    return () => {
      gsap.killTweensOf([nameRef.current, roleRef.current, skillsRef.current, mottoRef.current])
    }
  }, [])

  return (
    <div className="pointer-events-none inset-0 z-0 hidden overflow-hidden md:block">
      <div ref={containerRef} className="absolute top-1/2 left-16 -translate-y-1/2 opacity-50">
        <div className="max-w-sm">
          <div className="rounded-lg bg-gray-950/70 p-4 font-mono text-xs leading-relaxed backdrop-blur-sm">
            <div className="space-y-1 text-gray-500">
              <div className="flex">
                <span className="text-blue-400">function</span>
                <span className="ml-2 text-yellow-300">getSkills</span>
                <span className="text-gray-500">() {'{'}</span>
              </div>
              <div className="flex pl-4">
                <span ref={skillsRef} className="text-gray-300">
                  return &quot;loading... many stories&quot;
                </span>
              </div>
              <div className="flex">
                <span className="text-gray-500">{'}'}</span>
              </div>

              <div className="mt-2 flex">
                <span className="text-blue-400">function</span>
                <span className="ml-2 text-yellow-300">getCommunitySkills</span>
                <span className="text-gray-500">() {'{'}</span>
              </div>
              <div className="flex pl-4">
                <span ref={communitySkillsRef} className="text-gray-300">
                  return &quot;initializing...&quot;
                </span>
              </div>
              <div className="flex">
                <span className="text-gray-500">{'}'}</span>
              </div>

              <div className="mt-2 flex">
                <span className="text-blue-400">function</span>
                <span className="ml-2 text-yellow-300">getSoftSkills</span>
                <span className="text-gray-500">() {'{'}</span>
              </div>
              <div className="flex pl-4">
                <span ref={softSkillsRef} className="text-gray-300">
                  return [&quot;loading...&quot;]
                </span>
              </div>
              <div className="flex">
                <span className="text-gray-500">{'}'}</span>
              </div>

              <div className="mt-3 flex">
                <span className="text-gray-600">{'//'}</span>
                <span className="ml-2 text-gray-600 italic">coding... ⚡</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div ref={container2Ref} className="absolute top-1/3 right-16 -translate-y-1/2 opacity-50">
        <div className="max-w-sm">
          <div className="rounded-lg bg-gray-950/70 p-4 font-mono text-xs leading-relaxed backdrop-blur-sm">
            <div className="space-y-1 text-gray-500">
              <div className="flex">
                <span className="text-blue-400">function</span>
                <span className="ml-2 text-yellow-300">getName</span>
                <span className="text-gray-500">() {'{'}</span>
              </div>
              <div className="flex pl-4">
                <span ref={nameRef} className="text-gray-300">
                  return &quot;loading...&quot;
                </span>
              </div>
              <div className="flex">
                <span className="text-gray-500">{'}'}</span>
              </div>

              <div className="mt-2 flex">
                <span className="text-blue-400">function</span>
                <span className="ml-2 text-yellow-300">getRole</span>
                <span className="text-gray-500">() {'{'}</span>
              </div>
              <div className="flex pl-4">
                <span ref={roleRef} className="text-gray-300">
                  return &quot;initializing...&quot;
                </span>
              </div>
              <div className="flex">
                <span className="text-gray-500">{'}'}</span>
              </div>

              <div className="mt-2 flex">
                <span className="text-blue-400">function</span>
                <span className="ml-2 text-yellow-300">getValues</span>
                <span className="text-gray-500">() {'{'}</span>
              </div>
              <div className="flex pl-4">
                <span ref={valuesRef} className="text-gray-300">
                  return &quot;loading...&quot;
                </span>
              </div>
              <div className="flex">
                <span className="text-gray-500">{'}'}</span>
              </div>

              <div className="mt-2 flex">
                <span className="text-blue-400">function</span>
                <span className="ml-2 text-yellow-300">getMotto</span>
                <span className="text-gray-500">() {'{'}</span>
              </div>
              <div className="flex pl-4">
                <span ref={mottoRef} className="text-gray-300">
                  return &quot;compiling...&quot;
                </span>
              </div>
              <div className="flex">
                <span className="text-gray-500">{'}'}</span>
                <span className="text-gray-500">{'}'}</span>
              </div>

              <div className="mt-3 flex">
                <span className="text-gray-600">{'//'}</span>
                <span className="ml-2 text-gray-600 italic">coding... ⚡</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
