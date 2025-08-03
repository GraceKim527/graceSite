import { AboutSection } from '@/features/home/AboutSection'
import { IntroSection } from '@/features/home/IntroSection'

export default function Home() {
  return (
    <div className="relative bg-gray-950">
      <IntroSection />
      <AboutSection />
    </div>
  )
}
