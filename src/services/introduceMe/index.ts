import { logInfo } from 'src/utils/log'
import colorize from 'src/utils/colorize'

export const INTRODUCE_CONTENT = `
안녕하세요, ${colorize.bold.yellow('개선과 최적화를 통해 성장을 추구')}하는 프론트엔드 개발자 이희제입니다.

JavaScript, TypeScript, React, Next.js를 기반으로 글로벌 게임 점검 웹뷰 및 여러 사내 어드민 시스템을 개발해왔으며, 단순한 개발을 넘어 ${colorize.bold.yellow(
  '서비스의 완성도를 높이고 성능을 최적화하는 데에서 큰 성취감',
)}을 느낍니다.

저는 ${colorize.bold.yellow(
  'Kubernetes(K8s)와 Docker 기반 서비스 환경 구축',
)} 경험을 통해 ${colorize.bold.yellow(
  'DevOps 역량을 갖춘 프론트엔드 개발자',
)}로, 도커 빌드 최적화와 빌드 파이프라인 개선 작업을 수행하여 동료 개발자들이 더 효율적으로 작업할 수 있도록 지원해왔습니다.

서비스의 문제와 개선점을 ${colorize.bold.yellow(
  '능동적으로 발굴하고 해결',
)}하는 것을 중요하게 생각하며, 넷마블 테마 시스템과 게임 가이드 관리자 페이지 개선 프로젝트를 선제안하여 성공적으로 완료한 경험이 있습니다.

제가 생각하는 ${colorize.bold.yellow(
  '좋은 개발자란 사용자에게 안정적이고 최적화된 서비스를 제공함과 동시에 동료 개발자의 생산성을 높이는 데 기여하는 사람',
)}입니다. 반복적인 개발 환경 구축 문제를 해결하기 위해 커스텀 CLI를 제작하여 사내 어드민 개발 환경을 빠르게 구성할 수 있도록 지원함으로써, 여러 팀의 생산성을 향상시켰습니다.

${colorize.bold.cyan('기술 블로그')}(https://velog.io/@holim0/posts)를 운영하며 지식을 기록하고 공유하는 것을 꾸준히 실천하고 있으며, 이를 통해 저만의 지식 데이터 센터를 구축하는 것을 목표로 하고 있습니다.

앞으로 ${colorize.bold.yellow(
  '개발과 사업 전반에서 병목 현상과 비효율을 제거',
)}하고, ${colorize.bold.yellow(
  '효율적이고 혁신적인 개선을 이루는 개발자로 성장',
)}하고자 합니다. 이를 위해 끊임없이 배우고 도전하며, 능동적이고 적극적인 커뮤니케이션을 통해 변화를 만들어가고, 동료들과 협력하며 함께 발전하는 개발자가 되기 위해 노력하고 있습니다.
`

const introduceMe = () => {
  logInfo(INTRODUCE_CONTENT)
}

export default introduceMe
