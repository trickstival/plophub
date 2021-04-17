# Plophub

> Install Plopfiles from npm

- 💻 Share your own plopfiles with other users
- ⚙️  Install popular plopfiles from npm

## Install

```sh
npm install -D plophub
# or
yarn add -D plophub
```

## Configuring

Add plophub to your plopfile

```js
// plopfile.js
const plophub = require('plophub')

module.exports = (plop) => {
    plophub(plop)
    plop.setGenerator('Vue test file', {
      // ...
    });
};
```

