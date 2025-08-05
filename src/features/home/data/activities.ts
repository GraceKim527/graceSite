import { Activity, ActivityByYear } from '../types/activity'

export const activities: Activity[] = [
  // 2025
  {
    id: 'goormthon-univ',
    title: '[kakao x goorm] 구름톤 유니브 4기 총괄',
    role: '총괄 리더 (Leader)',
    organization: 'kakao, goorm',
    period: '2025.01 - current',
    year: 2025,
    whatILearned:
      '목표 설정부터 팀 빌딩, 업무 분배. 하나의 대규모 조직을 이끌어가는 리더십을 직접 경험했습니다. 특히 참가자, 운영진, 스폰서 기업 등 다양한 이해관계자 사이의 복잡한 의사소통을 조율하며 효과적인 커뮤니케이션 역량을 길렀습니다. 예상치 못한 문제에 직면했을 때, 팀원들과 함께 해결책을 찾아 실행하는 과정에서 위기관리 능력과 실질적인 문제 해결 능력을 키울 수 있었습니다.',
    links: [
      {
        title: '구름톤 유니브 공식 페이지',
        url: 'https://9oormthon.university/',
        type: 'official',
      },
    ],
  },

  // 2024
  {
    id: 'skhuthon',
    title: "첫 교내 해커톤 '스쿠톤' 기획 및 총괄",
    role: '설립자 및 총괄 리더 (Founder & Lead)',
    organization: '성공회대학교 스쿠톤 (SKHUthon)',
    period: '2024.03 - 2024.07',
    year: 2024,
    whatILearned:
      "단순한 일회성 행사를 넘어 '사람'을 연결하는 것이 커뮤니티의 핵심임을 깨달았고, 졸업생과 재학생을 잇는 시도는 교내 IT 생태계에 새로운 활력을 불어넣는 성공적인 전략이었습니다. 이 과정을 통해 한정된 자원으로 최대의 효과를 내는 실용적인 문제 해결 능력을 체득했습니다.",
    links: [
      {
        title: '인스타그램 페이지',
        url: 'https://www.instagram.com/skhuthon/',
        type: 'official',
      },
    ],
  },

  // 2022
  {
    id: 'likelion-skhu',
    title: '멋쟁이사자처럼 교내 운영, 멘토 활동',
    role: '교내 대표 (11기), 운영진 (10, 12기), 멘토 (13기)',
    organization: '멋쟁이사자처럼 성공회대학교 (SKHU)',
    period: '2022.02 - current',
    year: 2022,
    whatILearned:
      "운영진에서 대표, 그리고 멘토로 역할을 전환하며 실무자, 리더, 조언자의 관점을 모두 경험할 수 있었습니다. 단순히 지식을 전달하는 것을 넘어, 함께 성장할 수 있는 '학습 환경'을 설계하고 운영하는 노하우를 체득했습니다. 4년간의 활동을 통해 지속가능한 개발자 커뮤니티를 만들기 위한 장기적인 비전 수립과 실행의 중요성을 깨달았습니다.",
  },
]

// 연도별로 그룹화
export const getActivitiesByYear = (): ActivityByYear[] => {
  const groupedActivities = activities.reduce((acc, activity) => {
    const existingYear = acc.find((item) => item.year === activity.year)
    if (existingYear) {
      existingYear.activities.push(activity)
    } else {
      acc.push({
        year: activity.year,
        activities: [activity],
      })
    }
    return acc
  }, [] as ActivityByYear[])

  return groupedActivities.sort((a, b) => b.year - a.year)
}
