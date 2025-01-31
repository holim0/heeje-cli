// 학력 정보 정의
import Table from 'cli-table3'
import colorize from 'src/utils/colorize'

const EDUCATION = [
  {
    period: '2015.03 ~ 2021.08',
    school: '성균관대학교',
    details: [
      { major: '소비자학과', grade: '4.09/4.5' },
      { major: '컴퓨터공학과', grade: '4.18/4.5' },
    ],
    note: '학사 우등 졸업',
  },
]

// 학력 출력 함수
const showEducation = () => {
  const table = new Table({
    head: [
      colorize.green('재학 기간'),
      colorize.green('학교'),
      colorize.green('전공 및 학점'),
      colorize.green('비고'),
    ],
    colWidths: [20, 30, 40, 30], // 열 너비 설정
  })

  // 학력 데이터를 표에 추가
  EDUCATION.forEach((entry) => {
    // 학과 및 학점을 포맷팅하여 하나의 문자열로 합침
    const majorDetails = entry.details
      .map((d) => `${d.major} (학점: ${d.grade})`)
      .join('\n')

    table.push([entry.period, entry.school, majorDetails, entry.note])
  })

  console.log(table.toString())
}

export default showEducation
