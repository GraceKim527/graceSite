import { Project } from '../types/project'

export const sampleProjects: Project[] = [
  {
    id: 'goormthon-univ',
    title: '[kakao x goorm] 구름톤 유니브 플랫폼 개발',
    description:
      '전국 IT 연합 동아리 [kakao x goorm] 구름톤 유니브 해커톤 팀빌딩 플랫폼 구축 및 운영, 유지보수',
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
      { name: 'git', icon: 'https://skillicons.dev/icons?i=git' },
      { name: 'docker', icon: 'https://skillicons.dev/icons?i=docker' },
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
      { name: 'git', icon: 'https://skillicons.dev/icons?i=git' },
      { name: 'figma', icon: 'https://skillicons.dev/icons?i=figma' },
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
  {
    id: 'moodFriend',
    title: 'MoodFriend, 감정 챗봇 일기 서비스 개발',
    description: '감정 챗봇을 통해 일기를 작성하고, 감정을 기록하는 서비스 개발',
    image: '/image/moodFriend.png',
    techStack: [
      { name: 'React', icon: 'https://skillicons.dev/icons?i=react' },
      { name: 'JavaScript', icon: 'https://skillicons.dev/icons?i=js' },
      { name: 'Styled-Components', icon: 'https://skillicons.dev/icons?i=styledcomponents' },
      { name: 'Vercel', icon: 'https://skillicons.dev/icons?i=vercel' },
    ],
    githubUrl: 'https://github.com/LikeLion-12th-SKHU/LikeLion-12th-TEAM02-FE',
    contribution: '프론트엔드 개발, 기획, 디자인, 팀장, 운영 참여',
    isFeatured: false,
    overview: {
      role: 'Designer, Frontend Developer, Team Leader',
      contribution: '디자인 80%, 프론트엔드 개발 70%',
      period: '2024.07 - 2024.12',
      teamSize: '프론트엔드 2명, 백엔드 2명',
    },
    features: [
      '사용자 맞춤화된 AI 챗봇기능으로 대화',
      '대화 내용을 기반으로 감정 분석 및 일기 요약',
      '월별 일기 관리 및 통계 기능',
      '모바일 뷰 최적화',
    ],
    challenges: [
      {
        problem:
          '모바일 뷰에서 키보드가 올라올 때 입력창이나 버튼이 가려지거나, 화면이 비정상적으로 밀리는 현상이 발생함.',
        solution:
          '키보드 높이를 고려한 padding과 scroll 설정을 조정하여 사용자 입력 시 화면이 안정적으로 유지되도록 개선함.',
      },
    ],
  },
  {
    id: 'myPortFolio',
    title: '개인 포트폴리오 사이트 개발',
    description: 'My Portfolio 개발',
    image: '/image/myPortFolio.png',
    techStack: [
      { name: 'Next.js', icon: 'https://skillicons.dev/icons?i=nextjs' },
      { name: 'TypeScript', icon: 'https://skillicons.dev/icons?i=ts' },
      { name: 'Tailwind CSS', icon: 'https://skillicons.dev/icons?i=tailwind' },
      {
        name: 'GSAP',
        icon: 'https://miro.medium.com/v2/resize:fit:1200/1*wGdP-ym3kqQopOA9us8nXg.jpeg',
      },

      { name: 'Vercel', icon: 'https://skillicons.dev/icons?i=vercel' },
      { name: 'git', icon: 'https://skillicons.dev/icons?i=git' },
      { name: 'figma', icon: 'https://skillicons.dev/icons?i=figma' },
    ],
    githubUrl: 'https://github.com/GraceKim527/graceSite',
    contribution: '프론트엔드 개발 100%',
    isFeatured: false,
    overview: {
      role: 'Frontend Developer',
      contribution: '디자인 50%(일부 AI 도움), 프론트엔드 개발 100%',
      period: '2025.08 - current',
      teamSize: '프론트엔드 1명',
    },
    features: ['개인 포트폴리오 사이트 개발', '반응형 웹 디자인으로 모바일 최적화'],
    challenges: [
      {
        problem: '원하는 애니메이션을 구현하기 어려웠음.',
        solution: 'GSAP를 사용하여 타임라인을 기반으로 애니메이션을 직접 구현함(Intro부분)',
      },
    ],
  },
  {
    id: 'mapInSkhu',
    title: '교내 캠퍼스 지도 및 강의실 정보 서비스 개발 및 운영',
    description: '교내 캠퍼스 지도 및 강의실 정보 서비스 개발 및 운영, 유지보수',
    image: '/image/mapInSkhu.png',
    techStack: [
      { name: 'html', icon: 'https://skillicons.dev/icons?i=html' },
      { name: 'css', icon: 'https://skillicons.dev/icons?i=css' },
      { name: 'javascript', icon: 'https://skillicons.dev/icons?i=js' },
      { name: 'django', icon: 'https://skillicons.dev/icons?i=django' },
      { name: 'mysql', icon: 'https://skillicons.dev/icons?i=mysql' },
      { name: 'git', icon: 'https://skillicons.dev/icons?i=git' },
      { name: 'figma', icon: 'https://skillicons.dev/icons?i=figma' },
    ],
    githubUrl: 'https://github.com/MapinSkhu/MapinSkhu.ver2',
    liveUrl: 'https://mapinskhu.com/',
    contribution: '팀장, 기획, 퍼블리셔, 운영 참여',
    isFeatured: false,
    overview: {
      role: 'Team Leader, Product Manager, Publisher',
      contribution: '기획 60%, 퍼블리싱 70%',
      period: '2022.05 - current',
      teamSize: '디자인 1명, 퍼블리셔 1명, 백엔드 2명',
    },
    features: [
      '교내 캠퍼스 지도 및 강의실 정보 서비스 개발 및 운영, 유지보수',
      '반응형 웹 디자인으로 모바일 최적화',
    ],
    challenges: [
      {
        problem: '모바일 뷰 최적화',
        solution: '반응형 웹 디자인으로 모바일 최적화',
      },
    ],
  },
]
