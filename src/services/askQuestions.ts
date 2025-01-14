import { confirm } from '@inquirer/prompts'

const askQuestion = async () => {
  const isYes = await confirm({
    message: '제가 궁금하신가요?',
  })

  if (isYes) {
    console.log('안녕하세요. 저는 프론트엔드 개발자 이희제입니다.')
  }
}

export default askQuestion
