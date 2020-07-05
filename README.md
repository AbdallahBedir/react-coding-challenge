
## Newsapi Coding challenge

Simple app created with react.js that consuming [https://newsapi.org​/](https://newsapi.org​/) API.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Introduction

The searchbox and category select in subheader filters the news result, The search icon in searchbox is disabled unless 3 letters or more are typed in searchbox, after clicking the search button, we are sending a request to newsapi with the searched query, also if specific category is selected, it will be passed to the request.  

## Future Improvements

- **[For mobile]** Minimize subheader controls to icons that expanded on click. 
- <s>Submit the form using enter key</s>.
- Add Loading indicator while fetching the news.
- Display error messages and `No news match your result`.
- Support routing `/news` with active route highlighted.
- <s>Expanded sidebar submenus.</s>
- Proptypes & defaultProps.
- Profile menu that display items on clicking.
- Search news as you type.

## Current CORS issue

Because we're serving tha app at github pages [https://abdallahbedir.github.io/react-coding-challenge/](https://abdallahbedir.github.io/react-coding-challenge/) which is secure `https`, We've ended with a CORS issue but in localhost newsapi is sending `Access-Control-Allow-Origin: *`, so it works but in production it doesn't.

The following are exceptions thrown while managing to fix:

- xhr.js:178 Mixed Content: The page at 'https://abdallahbedir.github.io/react-coding-challenge/' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://newsapi.org/v2/top-headlines?q=test'. This request has been blocked; the content must be served over HTTPS.
-  Access to XMLHttpRequest at 'https://newsapi.org/v2/top-headlines?q=test' from origin 'https://abdallahbedir.github.io' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: It does not have HTTP ok status.
- https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?q=test  `426 Upgrade Required`

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
