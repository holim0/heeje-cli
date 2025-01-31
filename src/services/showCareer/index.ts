import Table from 'cli-table3'
import colorize from 'src/utils/colorize'
// 커리어 정보 정의
const CAREER = [
  { company: '넷마블', period: '2022.01 ~ 현재', type: '정규직' },
  { company: 'KT', period: '2021.06 ~ 2021.08', type: '인턴' },
  { company: 'NAVER FINANCIAL', period: '2021.01 ~ 2021.02', type: '인턴' },
]

// 커리어 출력 함수
const showCareer = () => {
  const table = new Table({
    head: [
      colorize.bold.green('회사'),
      colorize.bold.green('재직 기간'),
      colorize.bold.green('구분'),
    ],
    colWidths: [30, 20, 10], // 열 너비 설정
  })

  // 커리어 데이터를 표에 추가
  CAREER.forEach((entry) => {
    table.push([entry.company, entry.period, entry.type])
  })

  console.log(table.toString())
}

export default showCareer
