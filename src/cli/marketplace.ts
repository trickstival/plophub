const inquirer = require('inquirer')
const { searchPackages } = require('query-registry')

inquirer.registerPrompt('autocomplete', require('inquirer-autocomplete-prompt'))

function marketplace () {
  inquirer.prompt({
    // @ts-ignore
    type: 'autocomplete',
    name: 'search',
    message: 'Plophub Marketplace - search for plophub plugins',
    // @ts-ignore
    async source (answersSoFar, input) {
      const response = await searchPackages({
        query: {
          text: 'plophub-' + (input || '')
        }
      })

      return response.objects.map((item: any) => item.package.name)
    }
  })
}

export default marketplace

