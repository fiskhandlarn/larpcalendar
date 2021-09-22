# Larp Calendar

[Larp Calendar](https://larpcalendar.org/) is a website for keeping track of larp events accepting international participants.

This repository contains the source code for the website as well as some documentation on how to contribute.

## Tech Stack

The core technical ideals of this project is to maintain a modern codebase with a professional grade structure and avoid user hostile patterns and technologies like tracking, dark patterns and such.

### Repository

This is a monorepo built on [Nx](https://nx.dev). In short it's a tool that helps us keep a clean structure and helps us write better code.

### Backend & Hosting

The site backend and hosting is on [Google Firebase](https://firebase.google.com/). For local development Firebase emulators are used.

### Frontend

The site frontend is build on [react](https://reactjs.org/) with the [Chakra UI](https://chakra-ui.com/) library for styling and interface. Reactfire is used to interface with Firebase, Formik is used to build forms and react-icons is used for icons outside of Chakra's base set. We strive for keeping the code modular, easy to maintain and as testable as possible.

## Recommended Tools

- [Visual Studio Code](https://code.visualstudio.com/) for editing code. There is a vscode workspace set up in the repository to help you follow the standards and settings of the project.
- [GitHub Desktop](https://desktop.github.com/) for source control if you are not a fan of command line git use.
- [commitizen](https://github.com/commitizen/cz-cli) for clean git commit messages.

## Local Development

### Pre-requisites

To run the project locally you need:

- [git](https://git-scm.com/) for source control.
- [node.js](https://nodejs.org/en/) to run the code. We suggest using the latest Long Term Support version.
- [yarn](https://yarnpkg.com/) to manage packages and run tasks.
- [Java](https://openjdk.java.net/) to run the Firebase emulators.
- [Firebase CLI](https://firebase.google.com/docs/cli#install_the_firebase_cli) to run Firebase emulators and scripts.

### Getting Started

Check out the code from Github using your favorite method.

Enter the project directory and run `yarn` to install packages.

Open the file `larpcalendar.code-workspace` in Visual Studio Code and install the suggested plugins.

Run the npm script `start`, either from within Visual Studio Code or from the command line with `yarn start`. This will start the Firebase emulators with UI, import default mock data and start the local development server.

You can now access the Firebase Emulator UI on <http://localhost:4000> and the website itself on <http://localhost:4200/>.

The frontend app using hot module reloading, so any changes in the code should automatically reload the page.

### Mock Data

There is a handful of default events pre-populated in the mock Firestore database.

There 9 pre-made users for testing auth. They all have the password `password` and email addresses `admin@example.com`, `user1@example.com`, `user2@example.com`, etc up until `user9@example.com`.

You can make any changes you like to the mock data in the ui. It is possible to export the data for persistance, but please be careful with this.

### Running Tests

Due to a limitation in the current setup you need to stop your local development server before running the npm script for tests. If you want to run tests without stopping your server you can run `yarn test:dev` to run the tests without starting the emulators.

### Adding a Feature

To add features to the project you must use Nx generators. These will scaffold components for you with tests and proper defaults. The easiest way to do this is with the Nx plugin in Visual Studio Code. If you want to use the command line you can read more on how to in the [Nx Generators documentation](https://nx.dev/l/r/generators/using-schematics).

The main app resides in `apps/larpcalendar-web`. This is mostly a basic framework with routing.

Firebase scaffolding resides in the `libs/firebase` directory.

Page logic resides in `libs/pages`.

Shared Typescript interfaces reside in `libs/types`.

UI components reside in `libs/web-ui`.

### Committing Code

This repository uses Husky to lint and test the code before allowing a commit. Due to the aforementioned limitation in emulators you need to stop your local development server before committing code. We know this is annoying and hope to resolve this in the near future.

Please use commitizen to write a concise and clear commit message.

When a pull request is created on Github a continous integration/continuous deploy workflow will run that lints, tests, builds and deploys the app to a temporary test site.

### Contact

You can use the [issues tab](https://github.com/nordiclarp/larpcalendar/issues) in this repository to report bugs or suggest improvements.

If you have any questions, don't hesitate to reach out! You can reach me on [johannes@axner.io](mailto:johannes@axner.io) or join our community in the [Nordic Larp Discord](https://discord.gg/bGvAFDsDwV).
