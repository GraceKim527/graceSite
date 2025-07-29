import { IntroSection } from '@/features/home/Introduce'
import AboutSection from '@/features/home/components/AboutSection'

export default function Home() {
  return (
    <div className="bg-gray-950">
      <IntroSection />
      <AboutSection />
    </div>
  )
}
