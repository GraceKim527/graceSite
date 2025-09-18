export interface Project {
  id: string
  title: string
  description: string
  image: string
  techStack: string[]
  githubUrl?: string
  liveUrl?: string
  contribution?: string
  isFeatured: boolean

  // 모달 상세 정보
  overview: {
    role: string
    contribution: string
    period: string
    teamSize?: string
  }
  features: string[]
  challenges: string[]
}
