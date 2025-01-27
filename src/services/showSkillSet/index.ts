import Table from 'cli-table3'
import colorize from 'src/utils/colorize'
import { logInfo } from 'src/utils/log'

const SKILLS = {
  'Front-End': [
    'React',
    'Next.js',
    'Tanstack Query',
    'SCSS',
    'JavaScript',
    'Zustand',
    'Emotion',
    'TypeScript',
    'Webpack',
    'Tailwind CSS',
  ],
  DevOps: ['GitLab CI', 'K8s', 'ArgoCD', 'Helm', 'Docker', 'Harbor'],
}

const showSkillSet = () => {
  const table = new Table({
    head: [colorize.bold.green('Category'), colorize.bold.green('Skills')],
    colWidths: [15, 50], // 열 너비 설정
    wordWrap: true,
  })

  // 스킬 데이터를 표에 추가
  for (const [category, items] of Object.entries(SKILLS)) {
    table.push([colorize.bold(category), items.join(', ')])
  }

  logInfo(table.toString())
}

export default showSkillSet
