module.exports = {
  autoload: false,
  plugins: [
    {
      name: 'customPlopFile',
      plopfile: 'settings/configPlop.js',
    },
    {
      name: 'customPlugin'
    }
  ]
}
