# Plophub

![GitHub Workflow Status](https://img.shields.io/github/workflow/status/trickstival/plophub/test)
![npm](https://img.shields.io/npm/v/plophub)
![Codecov](https://img.shields.io/codecov/c/github/trickstival/plophub)

> Install Plopfiles from npm

- 💻 Share your own plopfiles with other users
- ⚙️  Install popular plopfiles from npm

## 🏗  Install

```sh
npm install -D plophub
# or
yarn add -D plophub
```

## 🚀 Setup

Add plophub to your plopfile

```js
// plopfile.js
const plophub = require('plophub')

module.exports = (plop) => {
  // Loading plugins
  plophub(plop)

  Your custom plop generators
  plop.setGenerator('Vue test file', {
    // ...
  });
};
```

Now all packages that start with `plophub-` are loaded automatically
when `plop` is run

## Roadmap

- [x] Load `plophub-<plugin name>` packages automaticaly
- [ ] Create plophub marketplace cli
- [ ] Provide custom plugin options API

