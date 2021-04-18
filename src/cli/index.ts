#!/usr/bin/env node
const program = require('commander')
import pkg from '../../package.json'
// import plophub from '..'
import marketplace from './marketplace'
// import { Plop, run } from 'plop'

program
  .version('plophub ' + pkg.version)
  .usage('<command> [options]')

program
  .command('marketplace')
  .description('launches a marketplace with plophub configs')
  .action(() => {
    marketplace()
  })

program.parse(process.argv)

// TODO: no need to import plophub in the plopfile
// program
  // .command('run')
  // .description('run plop and load plugins automatically')
  // .action((options) => {
    // Plop.launch({
      // configPath: 
    // }, run)
    // plophub()
  // })

