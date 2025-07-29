import { AboutSection } from '@/features/home/AboutSection'
import { IntroSection } from '@/features/home/IntroSection'
import CodeScrambleBackground from '@/features/home/components/CodeScrambleBackground'

export default function Home() {
  return (
    <div className="relative bg-gray-950">
      <CodeScrambleBackground />
      <IntroSection />
      <AboutSection />
    </div>
  )
}
