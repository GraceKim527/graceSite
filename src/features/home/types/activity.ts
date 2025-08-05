export interface Activity {
  id: string
  title: string
  role: string
  organization: string
  period: string
  year: number
  whatILearned: string
  links?: {
    title: string
    url: string
    type: 'blog' | 'official' | 'presentation' | 'article'
  }[]
}

export interface ActivityByYear {
  year: number
  activities: Activity[]
}
