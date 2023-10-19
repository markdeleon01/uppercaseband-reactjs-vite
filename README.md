# uppercaseband-reactjs-vite

**CI build:**
[![CircleCI](https://dl.circleci.com/status-badge/img/gh/markdeleon01/uppercaseband-reactjs-vite/tree/master.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/markdeleon01/uppercaseband-reactjs-vite/tree/master)

**Code unit test coverage:**
| Statements                  | Branches                | Functions                 | Lines             |
| --------------------------- | ----------------------- | ------------------------- | ----------------- |
| ![Statements](https://img.shields.io/badge/statements-78.02%25-red.svg?style=flat) | ![Branches](https://img.shields.io/badge/branches-81.81%25-yellow.svg?style=flat) | ![Functions](https://img.shields.io/badge/functions-67.5%25-red.svg?style=flat) | ![Lines](https://img.shields.io/badge/lines-77.27%25-red.svg?style=flat) |

As a matter of interest and passion for JavaScript and music in general, I created a ReactJS web application for my band UPPERCASE.

This project was bootstrapped with [Vite](https://www.npmjs.com/package/create-vite), and tested with [Vitest](https://vitest.dev/guide/).

## Project setup

1.  Install NodeJS on your local machine
2.  Clone this project repository
3.  Navigate to the project folder and install

```sh
npm install --force
```

4.  Install JSON Server to simulate a backend REST service to deliver data in JSON format to the front-end application

```
npm install -g json-server
```

5.  JSON Server will use the _db.json_ file in the project folder to serve mock data as defined in the file
6.  Run the mock API server

```
json-server --port 8080 --watch db.json
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\

### `npm run lint`
You may also see any lint errors in the console.

### `npm test`

Launches the test runner.

### `npm run build`

Builds the app for production to the `dist` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### Disclaimer
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
