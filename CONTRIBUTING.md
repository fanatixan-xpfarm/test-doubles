# Contributing

:+1::tada: First off, thanks for taking the time to contribute! :tada::+1:

The following is a set of guidelines for contributing to Test Doubles.
These are mostly guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a pull request.

## Code of Conduct

This project and everyone participating in it is governed by a [Code of Conduct](./CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## How to contribute to Test Doubles

To start to develop within this project open up the NOTES.md and note down what you're going to work on during the pompodoro. Follow the instructions below on starting the tests in watch mode. Follow the TDD rules of write a failing test, then write just enough code to get it to pass, and commit. If you can clarify the code without changing the functionality then refactor, keeping the tests passing.

### Test Driven Development

To get 100% test coverage we do test driven development. To start test driven development run:

```bash
npm run test:unit:watch
```

### Commit Guidelines

The project uses the commitlint tool for standardizing changelog style commit
messages so you should follow it as so:

```bash
git add .           # add files to staging
npm run commit      # use the wizard for the commit message
```

Alternatively you can write your commit messages yourself in the following format:

```sh
type(scope?): subject  #scope is optional; multiple scopes are supported (current delimiter options: "/", "\" and ",")
```

Full details of Commitlint available on (https://github.com/conventional-changelog/commitlint/#what-is-commitlint)[https://github.com/conventional-changelog/commitlint/#what-is-commitlint]
