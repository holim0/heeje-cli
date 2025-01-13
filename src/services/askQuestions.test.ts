import { jest } from '@jest/globals'
import askQuestions from './askQuestions'

const { confirm } = require('@inquirer/prompts') // Mock된 confirm 가져오기

jest.mock('@inquirer/prompts', () => ({
  confirm: jest.fn<() => Promise<boolean>>(),
}))

describe('init function', () => {
  beforeEach(() => {
    jest.clearAllMocks() // 각 테스트 전 mock 초기화
  })

  it('should display a greeting message when user confirms with "yes"', async () => {
    // Mocking: 사용자가 "yes"를 선택한 상황을 시뮬레이션
    ;(confirm as jest.Mock<() => Promise<boolean>>).mockResolvedValueOnce(true)

    // console.log를 감시하기 위한 spy 생성
    const consoleSpy = jest.spyOn(console, 'log')

    // init 함수 실행
    await askQuestions()

    // 콘솔 메시지 검증
    expect(consoleSpy).toHaveBeenCalledWith(
      '안녕하세요. 저는 프론트엔드 개발자 이희제입니다.',
    )

    // spy 복구
    consoleSpy.mockRestore()
  })

  it('should not display any message when user declines with "no"', async () => {
    // Mocking: 사용자가 "no"를 선택한 상황을 시뮬레이션

    ;(confirm as jest.Mock<() => Promise<boolean>>).mockResolvedValueOnce(false)

    // console.log를 감시하기 위한 spy 생성
    const consoleSpy = jest.spyOn(console, 'log')

    // init 함수 실행
    await askQuestions()

    // 콘솔 메시지가 호출되지 않았는지 확인
    expect(consoleSpy).not.toHaveBeenCalled()

    // spy 복구
    consoleSpy.mockRestore()
  })
})
