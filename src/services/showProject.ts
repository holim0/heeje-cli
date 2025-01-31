import Table from 'cli-table3'
import { logInfo } from 'src/utils/log'
import colorize from 'src/utils/colorize'

const career = [
  {
    period: '2024.05 ~ 2024.10',
    company: '넷마블',
    project: '게임 가이드 서비스 어드민 개편',
    achievement: [
      `관리자 내 이관 기능 제공으로 월 평균 ${colorize.bold.blue('14일의 업무 시간 단축')}을 실현`,
      `추가로 이관 상태를 명확히 파악할 수 있도록 Step UI를 통해 기획/사업 부서가 성공/실패 내역을 확인하며 ${colorize.bold.blue('커뮤니케이션 효율성을 향상')}`,
      `화이트 리스트 기능을 제공하여 아이템 확률 정보와 같은 중요 정보가 게임 오픈 전 유저에게 ${colorize.bold.blue('사전에 노출되는 리스크를 제거')}하면서 사업/기획/QA 부서가 실계 환경에서 확률 데이터를 확인할 수 있도록 운영 편의성을 개선`,
      `기획/사업 부서가 원하는 시간에 게임 가이드 서비스 전체를 오픈 또는 점검 처리할 수 있도록 지원했으며, 추가로 각 가이드 메뉴별로 ${colorize.bold.blue('노출 시간을 예약 설정할 수 있도록 제공')}하여 유연한 서비스 관리가 가능`,
    ],
  },
  {
    period: '2023.12 ~ 현재',
    company: '넷마블',
    project: '게임 점검 웹뷰 서비스 개편 및 운영',
    achievement: [
      `인메모리 기반의 API 캐싱, Brotli 압축을 적용하여 JS 번들 사이즈를 줄이며 네트워크 사용량을 20% 줄이고 ${colorize.bold.blue('서비스 초당 처리량(TPS)을 21% 가량 증대 (5500TPS → 6700TPS)')}`,
      `font preload, preconnect 및 이미지 압축 적용(avif, webp) 등의 웹 최적화를 통해 로딩 속도 감소로 향상된 사용자 경험을 제공 ${colorize.bold.blue('(LCP 기준 4.8s→ 1.7s 감소)')}`,
      `나 혼자만 레벨업:어라이즈 게임 오픈 시에 ${colorize.bold.blue('동접 80-90만의 스파이크 트래픽 환경에서도 안정적으로 서비스를 제공')}`,
    ],
  },
  {
    period: '2023.10 ~ 2023.11',
    company: '넷마블',
    project: '게임 점검 웹뷰 어드민 개발',
    achievement: [
      `기존에는 이관 기능이 없어 사용자가 각 Zone별로 수동 설정을 해야 했으며, 이 과정에서 잘못된 설정이나 누락이 발생했습니다. 새로운 기능을 통해 여러 Zone으로의 이관을 지원하여 ${colorize.bold.blue('정확성과 편리성을 향상')}`,
      `기획/사업부 서비스 관련 문의 ${colorize.bold.blue('100% 감소')}`,
      `게임 별로 등록 페이지를 독립적으로 제공하여 복잡했던 점검 웹뷰 등록 URL Path를 ${colorize.bold.blue('단순화하여 등록 복잡도를 감소')}`,
    ],
  },
  {
    period: '2023.03 ~ 현재',
    company: '넷마블',
    project: '사내 공통 테마 시스템 및 어드민 개발 및 운영',
    achievement: [
      `점검 웹뷰, 쿠폰, 넷마블 런처, 넷마블 인증 서비스 등 다양한 서비스에서 현재 적극적으로 활용되고 있어 미리 정의된 디자인 요소를 재사용 가능하도록 하여 ${colorize.bold.blue('웹/플랫폼 서비스의 UI 개발 시간과 비용을 절감')}`,
      `웹/플랫폼 서비스에서 게임 룩과 맞는 통일성 있는 UI를 적용할 수 있게 하여 일관된 ${colorize.bold.blue('일관된 서비스 이미지와 사용자 경험을 제공')}`,
    ],
  },
  {
    period: '2022.10 ~ 2023.03',
    company: '넷마블',
    project: '쿠폰 서비스 어드민 개편',
    achievement: [
      `사업부가 직접 쿠폰 사용량, 발급량 등을 파악할 수 있도록 로그 및 지표 데이터를 제공하여 ${colorize.bold.blue('전략적 운영 지원')}`,
      `기존 쿠폰 데이터에 대해 수동 요청 및 제공 과정에서 발생하던 ${colorize.bold.blue('휴먼 에러와 커뮤니케이션 비용을 감소')}시킴으로써 보고 및 분석 프로세스를 간소화`,
    ],
  },
  {
    period: '2022.05 ~ 2022.08',
    company: '넷마블',
    project: '게임 점검 웹뷰 서비스 K8s 환경 전환',
    achievement: [
      `서비스의 ${colorize.bold.blue('초당 처리량(TPS)을 10% 향상')}`,
      `K8s의 Auto-scaling과 Self-healing 기능을 통해 서비스의 ${colorize.bold.blue('운영 효율성 및 안정성을 개선')}`,
      `사내 K8s 환경 전환 가이드를 작성하여 다른 팀 구성원의 ${colorize.bold.blue('환경 전환 시간을 단축하고 리소스 투입을 감소')}`,
    ],
  },
]

// 커리어 출력 함수
const showProject = () => {
  const table = new Table({
    head: [
      colorize.bold.green('기간'),
      colorize.bold.green('회사'),
      colorize.bold.green('프로젝트'),
      colorize.bold.green('핵심 성과'),
    ],
    colWidths: [30, 15, 40, 60], // 열 너비 설정
    wordWrap: true,
  })

  career.forEach((entry) => {
    const achievementsList = entry.achievement
      .map((point, index) => (point !== '' ? `▶ ${point}` : ''))
      .join('\n')

    table.push([entry.period, entry.company, entry.project, achievementsList])
  })

  logInfo(table.toString())
}

export default showProject
