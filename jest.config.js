module.exports = {
  preset: 'ts-jest', // ts-jest를 사용
  testEnvironment: 'node', // Node.js 환경 설정
  roots: ['<rootDir>/src'], // 테스트 파일의 루트 경로
  testMatch: [
    '**/__tests__/**/*.+(ts|tsx|js)',
    '**/?(*.)+(spec|test).+(ts|tsx|js)',
  ], // 테스트 파일 패턴
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest', // TypeScript 파일 변환
  },
}
