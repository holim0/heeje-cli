import { Command } from 'commander'
import showPersonalDetails from './services/showPersonalDetails'
import introduceMe from './services/introduceMe'
import showEducation from './services/showEducation'
import showSkillSet from './services/showSkillSet'
import showCareer from './services/showCareer'
import showProject from './services/showProject'

const program = new Command()

program
  .version('1.0.0')
  .description('이희제의 CLI 이력서입니다.')
  .option('-i, --introduce', '자기소개')
  .option('-c, --career', '경력 사항')
  .option('-p, --project', '프로젝트 내역')
  .option('-s, --skills', '기술 스택')
  .option('-e, --education', '학력 사항')

program.parse(process.argv)

const options = program.opts()

if (Object.keys(options).length === 0) {
  showPersonalDetails()
}

// 전달된 옵션 처리
const selectedOption = Object.keys(options)[0] // 첫 번째 전달된 옵션 가져오기

switch (selectedOption) {
  case 'introduce':
    introduceMe()
    break
  case 'career':
    showCareer()
    break
  case 'project':
    showProject()
    break
  case 'skills':
    showSkillSet()
    break
  case 'education':
    showEducation()
    break
}
