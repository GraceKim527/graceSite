export interface Certificate {
  id: string
  name: string
  issuer: string
  issueDate: string
  expiryDate?: string
  credentialId?: string
  credentialUrl?: string
}

export interface Education {
  id: string
  institution: string
  program: string
  degree?: string
  major?: string
  period: string
  status: string
  gpa?: string
  activities?: string[]
}

export interface Award {
  id: string
  title: string
  organizer: string
  date: string
  rank: string
  category: string
  description?: string
  achievement?: string
}

export interface ContactInfo {
  email: string
  github: string
  linkedin?: string
}
