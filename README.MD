<!--
*** Thanks you to be here. If you have some suggestions that may improve still more
*** make a fork and do a pull request or open a issue with tag "Suggestion".
*** Let's go run this awesome project :D
-->

<h1 align="center" style="margin: auto">AirCnC</h1>

<!-- ABOUT PROJECT -->

### About

AirCnC is OmniStack week's mobile project. Here was learned how to use expo to create a react-native app and how to work with it.

<!-- TABLE OF CONTENTS -->

### Project content (libraries)

Here is some libraries was used to create it:

-   [React Native Navigation](https://wix.github.io/react-native-navigation/#/) - _React Native Navigation_  provides 100% native platform navigation on both iOS and Android for React Native apps. The JavaScript API is simple and cross-platform.
-   [Styled Components](https://www.styled-components.com/) - _Styled Components_ is a CSS-in-JS library that enables developers to write each component with their own styles and allows the code to be in a single location. By coupling your styles with the components, it results in optimizing developer experience and output.
-   [Babel](https://babeljs.io/) - _Babel_ is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments.

<!-- GETTING STARTED -->

## Getting Started

#### Requirements

This project use expo as used in Omnistack week, but with you wanna use react-native-cli you can follow these [steps](https://docs.rocketseat.dev/ambiente-react-native/introducao) provided by _[Rocket Seat](https://rocketseat.com.br/)_.

#### Instalation

## Files structure

The files structure is this way:

```bash
AirCnC
├── src/
│   ├── assets/
│   │   └── logo.jpg
│   ├── components/
│   │   └── Component.json
│   ├── pages/
│   │   ├── login/
│   │   │   ├── index.js
│   │   │   └── style.js
│   ├── services/
│   │   └── sampleService.js
│   └── App.js
├── .gitignore
├── babel.config.js
├── App.js
├── package.json
└── README.md
```

This section will have instructions case you wanna edit template, explaining folder by folder and file by file:

-   **src** - Here contains every folders and files of the application, it is created in a only directory `src` because the code can be isolated and easile ported to another projects, if you need.

    -   **assets** - Here you can put some files like image, svg and etc.

    -   **components** - Here you can put your components that all application can use.

    -   **pages** - Directory that has screens from application, by default and good practices every screen will stay inside directory with your name.

        -   **login** - Sample directory, by default, it was adopted to always use the directory name in camelCase mode, within this directory it is necessary to create at least the `index.js` file.
            -   **index.js** - File with all logic from this screen, such as components that will be rendered;
            -   **styles.js** - File with all styled components from this screen;

    -   **services** - Here is where will be created the files relationed the services used on application, such as request HTTP, date, strings and more.

        -   **sampleService.js** - Sample file;

    -   **routes.js** - File with application's routes configuration, here is created the navigators provided from _React Navigation_.

-   **App.js** - The root file of the application, also called _Entry Point_, is the first file called at the time of building and executing the applications, in it is called the script `src/index.js`, which in turn calls the rotations of the application.

-   **jsconfig.json** - JavaScript configuration file in the Editor, it is responsible for activating the Autocomplete JavaScript code in the application.

-   **package.json** - This file has dependencies and devDependencies to run project.

<!-- CONTRIBUITION -->

## Contribution

Contributions are what make the open source community an incredible place to learn, inspire and create. Any contributions you make will be greatly appreciated.

1. Make a Project Fork
2. Create a Branch for your Feature (`git checkout -b feature/NewFeature`)
3. Add your changes (`git add .`)
4. Commit your changes (`git commit -m 'Adding an incredible feature!'`)
5. Push Branch (`git push origin feature/NewFeature`)
6. Merge with master and solve conflits if there were.
7. Open a Pull Request

**"That's all folks!"**