## Usage

This example was built with https://www.yahoofinanceapi.com/

First clone this repository to your laptop. You must have Node (> v4) and [yarn](https://yarnpkg.com/lang/en/docs/install/) installed.

```bash
cd ~/code/<your_github_nickname>
git clone git@github.com:andrerferrer/stocks-with-yahoo-api.git my-js-project
cd my-js-project
rm -rf .git
yarn install
code . # Open this folder your text editor
```

Make sure you have `./node_modules/.bin` in your `$PATH`! This way you can run this:

```bash
eslint lib
webpack-dev-server
```
