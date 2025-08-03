export interface TechStack {
  name: string
  icon: string
}

export interface Project {
  id: string
  title: string
  description: string
  image: string
  techStack: TechStack[]
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
  challenges: {
    problem: string
    solution: string
  }[]
}
