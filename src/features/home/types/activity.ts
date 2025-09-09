export interface Activity {
  id: string
  title: string
  role: string
  organization: string
  period: string
  year: number
  whatILearned: string
  type?: 'community' | 'opensource'
  links?: {
    title: string
    url: string
    type: 'blog' | 'official' | 'presentation' | 'article' | 'pr' | 'issue' | 'github'
  }[]
}

export interface ActivityByYear {
  year: number
  activities: Activity[]
}
