# OCC-React-Components.ts

![Node CI](https://github.com/oracle-commerce-cloud/occ-react-components.ts/workflows/Node%20CI/badge.svg)

Standalone Starter React Component for [Oracle Commerce Cloud](https://cloud.oracle.com/en_US/commerce-cloud "Oracle Commerce Cloud").
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory and after running:

```
$ cp .env.exemple .env
```

<img src="https://raw.githubusercontent.com/oracle-commerce-cloud/occ-webpack-plugin/dev/screencast.svg"  alt="npm run build" style="max-width:100%;">

you can run:

### `npm start:dev`

Runs the app in the development mode.<br>
Open [https://localhost:9001](https://localhost:9001) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm start`

Runs the app in the development mode.<br>
Open [https://localhost:9000](https://localhost:9000) to view it in the browser.

You will be able to use any web proxy that supports mapping files both locally and remotely. The webpack dev server is configured to run on `https://localhost:9000` so you will need to configure your proxy mappings.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run format`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

~You will need to use the `DCU` to manually deploy the files and supplementary bundles after the first extension installations.
I am currently working on a deployment task which will come in a later version.~

Currently, you can deploy your project in this way

```
$ cd platform
$ npx dcu -k $KTEST -n $NTEST -x .
```

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.


## Related
* [create-occ-react-app](https://github.com/oracle-commerce-cloud/create-occ-react-app "occ-react-scripts") and [occ-react-scripts](https://www.npmjs.com/package/occ-react-scripts "occ-react-scripts")
* [occ-react-components.ts](https://github.com/oracle-commerce-cloud/occ-react-components.ts "occ-react-components.ts")
* [Design-Code-Utility](https://www.npmjs.com/package/@oraclecc/dcu "dcu")
* [leedium/occ-shared-resource-bundles](https://github.com/leedium/occ-shared-resource-bundles "occ-shared-resource-bundles")
* [leedium/occ-react-component](https://github.com/leedium/occ-react-component "occ-react-component")

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
