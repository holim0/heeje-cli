import { Command } from 'commander'
import showPersonalDetails from './services/showPersonalDetails'
import introduceMe from './services/introduceMe'
import showSkillSet from './services/showSkillSet.ts'

const program = new Command()

program
  .version('1.0.0')
  .description('이희제의 CLI 이력서')
  .option('-i, --introduce', '이희제 자기소개')
  .option('-s, --skills', '이희제 기술 스택')

program.parse(process.argv)

const options = program.opts()

if (Object.keys(options).length === 0) {
  showPersonalDetails()
}

if (options.introduce) {
  introduceMe()
}

if (options.skills) {
  showSkillSet()
}
