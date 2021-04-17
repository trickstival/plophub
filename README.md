# Plophub

> Install Plopfiles from npm

- 💻 Share your own plopfiles with other users
- ⚙️  Install popular plopfiles from npm

## Install

```sh
npm install plophub
# or
yarn add plophub
```

## Configuring

Add plophub to your plopfile

```js
// plopfile.js
import plophub from 'plophub'

module.exports = (plop) => {
    plophub(plop)
    plop.setGenerator('Vue test file', {
      // ...
    });
};
```

