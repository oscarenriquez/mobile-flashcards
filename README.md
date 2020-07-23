# Mobile Flash Cards - React Native

Mobile Flash Cards - Mobile multi-platform application for creating decks and cards that would be possible to create a quiz.
React Native, Redux, React Native Navigation, and the base stack for the application; CRNA was used to create and manage the application, 

## Installation

Use the package manager **npm** or [Yarn](https://yarnpkg.com/) to install Mobile Flashcards.

## System Tools:
For launching the application for development:
- Node : `14.2.0` [node.js](https://nodejs.org/es/)
- npm : `6.14.5` (bundled with nodejs) 
- Yarn package manager: `1.22.4` 

### NPM update:
[NPM update](https://docs.npmjs.com/try-the-latest-stable-version-of-npm)
   
```bash
npm install -g npm@latest
```

### Yarn install:
[Yarn installation](https://yarnpkg.com/getting-started/install)
   
```bash
npm install -g yarn
```

### Yarn CLI:
[See docs](https://yarnpkg.com/cli/install)

## Setting up the project:
- `cd` to your root folder.
- `yarn install` or `npm i` to install all dependencies and packages.

## Building

### Building for Web Development:
```bash
npm web
```

or

```bash
yarn web
```

### Building for Android Development:
```bash
npm android
```

or

```bash
yarn android
```

### Building for iOS Development:
```bash
npm ios
```

or

```bash
yarn ios
```

## Project tree:
```bash 
.
├── App.js
├── README.md
├── __tests__
│   └── App.js
├── actions
│   └── index.js
├── android
│   ├── app
│   ├── build.gradle
│   ├── gradle
│   ├── gradle.properties
│   ├── gradlew
│   ├── gradlew.bat
│   └── settings.gradle
├── api
│   └── _FlashCardsAPI.js
├── app.json
├── babel.config.js
├── components
│   ├── Deck.js
│   ├── DeckList.js
│   ├── FlashCard.js
│   ├── NewDeck.js
│   ├── NewQuestion.js
│   └── Quiz.js
├── constants
│   └── index.js
├── index.js
├── ios
│   ├── Podfile
│   ├── Podfile.lock
│   ├── Pods
│   ├── mobileflashcards
│   ├── mobileflashcards.xcodeproj
│   └── mobileflashcards.xcworkspace
├── metro.config.js
├── package.json
├── reducers
│   └── index.js
├── sagas
│   └── index.js
├── store
│   └── index.js
├── style.js
├── utils
│   └── logger.js
├── web-build
│   └── register-service-worker.js
└── yarn.lock

```
### Create Project Tree

`tree -v -L 2 -I 'node_modules|build|test_*' --charset utf-8 `