import { Command } from 'commander'
import showPersonalDetails from './services/showPersonalDetails'

const program = new Command()

program.version('1.0.0').description('이희제의 CLI 이력서')

program.parse(process.argv)

const options = program.opts()

if (Object.keys(options).length === 0) {
  showPersonalDetails()
}
