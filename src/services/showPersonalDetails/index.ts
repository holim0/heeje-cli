import { confirm } from '@inquirer/prompts'
import colorize from 'src/utils/colorize'
import { logInfo } from 'src/utils/log'

const URL = {
  GITHUB: 'https://github.com/holim0',
  BLOG: 'https://velog.io/@holim0/posts',
  LINKED_IN: 'https://www.linkedin.com/in/holim0/',
  EMAIL: 'holim1226@gmail.com',
  RESUME: 'https://resume-holim0.com/',
}

const showPersonalDetails = async () => {
  let isYes = false

  while (!isYes) {
    isYes = await confirm({
      message: '안녕하세요. 프론트엔드 개발자 이희제입니다. 제가 궁금하신가요?',
    })

    if (!isYes) {
      logInfo(
        colorize.yellow.bold(
          '천천히 고민해보셔도 괜찮습니다. 다시 한번 여쭤보겠습니다.',
        ),
      )
    }
  }

  logInfo(`${colorize.yellow.bold('Github:')} ${URL.GITHUB}`)
  logInfo(`${colorize.yellow.bold('Blog:')} ${URL.BLOG}`)
  logInfo(`${colorize.yellow.bold('LinkedIn:')} ${URL.LINKED_IN}`)
  logInfo(`${colorize.yellow.bold('E-mail:')} ${URL.EMAIL}`)
  logInfo(`${colorize.yellow.bold('Resume:')} ${URL.RESUME}`)
  logInfo('\n더 많은 정보는 --help를 통해 확인해주세요.')
}

export default showPersonalDetails
