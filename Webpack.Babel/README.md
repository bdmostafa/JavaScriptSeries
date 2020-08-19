Some workflow tools - webpack, gulp, grunt etc.

Webpack is to fix the issues as like huge coding on one file, debugging issue, multiple scripts (single responsibility principal), multiple request handling in index.html file, bandwidth loss, slowing the application

Webpack- module bundler (bundle multiple js file to single file)
https://webpack.js.org/

Main file - main.js/app.js/script.js (anyone)
Dependency file - UI.js, Store.js, weather.js, or any related js file (altogether)

Babel - Convert the latest code into the older version code so that both of old and modern browsers can read the code and execute well

JavaScript compiler - (next generation code to ES5)
https://babeljs.io/

How to install webpack on project folder
https://webpack.js.org/guides/getting-started/
npm init -y
npm install webpack webpack-cli --save-dev

Install babel under webpack
https://webpack.js.org/loaders/
https://webpack.js.org/loaders/babel-loader/
npm install -D babel-loader @babel/core @babel/preset-env webpack - (webpack (not needed))

babel documentation
https://babeljs.io/docs/en/babel-preset-env
@babel/preset-env is a smart preset that allows you to use the latest JavaScript without needing to micromanage which syntax transforms (and optionally, browser polyfills) are needed by your target environment(s).
Latest code is transformed to ES5 or any old version code
