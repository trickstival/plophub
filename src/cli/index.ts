#!/usr/bin/env node
import program from 'commander'
import pkg from '../../package.json'
import plophub from '..'
import { Plop, run } from 'plop'

program
  .version('plophub ' + pkg.version)
  .usage('<command> [options]')

program
  .command('run')
  .description('run plop and load plugins automatically')
  .action((options) => {
    Plop.launch({}, run)
    plophub()
  })

