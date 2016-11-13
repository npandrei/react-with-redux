# react-with-redux

This repo contains a simple application that uses react, redux and react-router.

# running the project

You must first restore the dependencies and install webpack
```
npm install
npm install webpack -g
```
Then you can run the project by using:
```
npm start
```
and then access http://localhost:8080

The goal of this project is to show how you can configure react, redux and react-router to work together. All that it does is create a SPA with 2 pages, home and home-edit. In the home page, we display a message that can be edited in the home-edit page.

Basically, it all comes down to the [configureApp method](https://github.com/npandrei/react-with-redux/blob/master/src/scripts/index.js#L9).
