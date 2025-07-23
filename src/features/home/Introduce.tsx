import ScrambleTextLayer from './components/ScrambleTextLayer'
import IntroScene from './components/IntroScene'
import MovingTextBackground from './components/MovingTextBackground'

export function Introduce() {
  return (
    <section className="relative min-h-screen bg-gray-950">
      {/* 배경 텍스트 */}
      <div className="absolute inset-0 z-0">
        <MovingTextBackground />
      </div>

      <div className="absolute inset-0 z-5">
        <ScrambleTextLayer />
      </div>

      {/* 메인 콘텐츠 */}
      <div className="relative z-10">
        <IntroScene />
      </div>
    </section>
  )
}
