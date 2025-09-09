import { Certificate, Education, Award, ContactInfo } from '../types/achievement'

export const certificates: Certificate[] = [
  {
    id: 'sqld',
    name: 'SQL 개발자(SQLD)',
    issuer: '한국데이터산업진흥원',
    issueDate: '2024.09',
  },
]

export const educations: Education[] = [
  {
    id: 'skhu-main',
    institution: '성공회대학교',
    program: '공학사',
    degree: '학사',
    major: '소프트웨어공학',
    period: '2021.05 - current',
    status: '졸업 유예',
  },
]

export const awards: Award[] = [
  {
    id: 'school-award-software',
    title: '교내 소프트웨어 경진대회',
    organizer: '성공회대학교',
    date: '2025.06',
    rank: '준우승 (2위)',
    category: '경진대회',
    description: '제 17회 소프트웨어 경진대회',
  },
  {
    id: 'school-award-it3',
    title: '교내 IT 경진대회',
    organizer: '성공회대학교',
    date: '2024.11',
    rank: '동상',
    category: '경진대회',
    description: '제 15회 IT 경진대회',
  },
  {
    id: 'school-award-it2',
    title: '교내 IT 경진대회',
    organizer: '성공회대학교',
    date: '2023.11',
    rank: '금상',
    category: '경진대회',
    description: '제 14회 IT 경진대회',
  },
  {
    id: 'school-award-it1',
    title: '교내 IT 경진대회',
    organizer: '성공회대학교',
    date: '2022.11',
    rank: '대상',
    category: '경진대회',
    description: '제 13회 IT 경진대회',
  },
]

export const contactInfo: ContactInfo = {
  email: 'k07173027@gmail.com',
  github: 'https://github.com/GraceKim527',
  linkedin: 'https://www.linkedin.com/in/eunhye-kim-a98184348/',
}
