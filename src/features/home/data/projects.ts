import { Project } from '../types/project'

export const sampleProjects: Project[] = [
  {
    id: 'goormthon-univ',
    title: '[kakao x goorm] 구름톤 유니브 플랫폼 개발',
    description:
      '전국 IT 연합 동아리 [kakao x goorm] 구름톤 유니브 해커톤 팀빌딩 플랫폼 구축 및 운영',
    image: 'https://9oormthon.university/assets/danPungThon-DKC4x3RA.png',
    techStack: [
      { name: 'React', icon: 'https://skillicons.dev/icons?i=react' },
      { name: 'TypeScript', icon: 'https://skillicons.dev/icons?i=ts' },
      {
        name: 'Tailwind CSS',
        icon: 'https://skillicons.dev/icons?i=tailwind',
      },
      {
        name: 'Zustand',
        icon: 'https://user-images.githubusercontent.com/958486/218346783-72be5ae3-b953-4dd7-b239-788a882fdad6.svg',
      },
      {
        name: 'vite',
        icon: 'https://skillicons.dev/icons?i=vite',
      },
      {
        name: 'framer motion',
        icon: 'https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/design/framer-juy68xjgctdz8ny5xhq3lb.png/framer-327cd591thw0mfx6rzkm4q.png?_a=DATAg1XyZAA0',
      },
    ],
    githubUrl: 'https://github.com/9oormthon-univ/9oormthon_univ',
    liveUrl: 'https://9oormthon.university',
    contribution: '프론트엔드 개발 리드, 기획 및 운영 참여',
    isFeatured: true,
    overview: {
      role: 'Project Lead, Frontend Developer',
      contribution: '프론트엔드 아키텍처 설계 및 개발 100%',
      period: '2025.02 - current',
      teamSize: '디자인 1명, 프론트엔드 1명, 백엔드 1명',
    },
    features: [
      '해커톤 참가자 등록 및 관리 시스템',
      '해커톤 진행 현황 대시보드 및 어드민 시스템 구현',
      '아이디어 등록 및 차시 별 팀 빌딩 시스템 구축',
      '반응형 웹 디자인으로 모바일 최적화',
    ],
    challenges: [
      {
        problem:
          '다양한 디바이스에서의 일관된 UX 제공하고자 함. 모바일 환경에서도 최적화된 사용자 경험 제공',
        solution:
          'useBreakPoint 훅을 설계하여 모바일 환경에서도 최적화된 사용자 경험 제공. 모바일 환경에서는 화면 크기에 따라 화면 구성을 변경하고, 데스크탑 환경에서는 화면 크기에 따라 화면 구성을 변경함.',
      },
      {
        problem:
          '마이페이지, 멤버 리스트, 프로젝트 등 화면마다 API 응답 조건에 따라 분기 처리해야 할 항목이 많았음.',
        solution:
          'Zustand를 전역 상태로 관리하고, 화면 전환 시 상태를 초기화하는 방식으로 구현했음.',
      },
    ],
  },
  {
    id: 'skhuni',
    title: '교내 IT 커뮤니티 플랫폼 개발',
    description: '교내 IT 인사이트 공유 및 커뮤니티 플랫폼 구축 및 운영',
    image: '/image/skhuni.png',
    techStack: [
      { name: 'Next.js 15', icon: 'https://skillicons.dev/icons?i=nextjs' },
      { name: 'React', icon: 'https://skillicons.dev/icons?i=react' },
      { name: 'TypeScript', icon: 'https://skillicons.dev/icons?i=ts' },
      { name: 'Tailwind CSS', icon: 'https://skillicons.dev/icons?i=tailwind' },
      {
        name: 'Zustand',
        icon: 'https://user-images.githubusercontent.com/958486/218346783-72be5ae3-b953-4dd7-b239-788a882fdad6.svg',
      },
      { name: 'vite', icon: 'https://skillicons.dev/icons?i=vite' },
      {
        name: 'framer motion',
        icon: 'https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/design/framer-juy68xjgctdz8ny5xhq3lb.png/framer-327cd591thw0mfx6rzkm4q.png?_a=DATAg1XyZAA0',
      },
    ],
    githubUrl: 'https://github.com/SKHUniArchive/SKHUni-FE',
    contribution: '프론트엔드 개발, 기획, 디자인, 운영 참여',
    isFeatured: true,
    overview: {
      role: 'Designer, Frontend Developer',
      contribution: '프론트엔드 개발 100%',
      period: '2025.04 - 2025.05',
      teamSize: '프론트엔드 1명, 백엔드 1명',
    },
    features: [
      '교내 IT 인사이트 공유 및 커뮤니티 플랫폼 구축 및 운영',
      '반응형 웹 디자인으로 모바일 최적화',
      '커피챗, 코드리뷰 등 커뮤니티 기능 구현',
      '교내 학생들만 이용가능 하도록 인증 시스템 구현',
    ],
    challenges: [
      {
        problem:
          '로그인 페이지 접근 시 이미 로그인한 사용자가 접근하면 홈으로 이동해야 하고, 로그인하지 않은 사용자가 다른 페이지에 접근하면 로그인으로 리디렉션돼야 하는 로직이 필요했음.',
        solution:
          '로그인 여부를 전역 상태로 관리하기 위해 Zustand를 도입했으며, 토큰 유무로 로그인 상태를 판단하고 라우팅 가드를 설정함.',
      },
    ],
  },
]
