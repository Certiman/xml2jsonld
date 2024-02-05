# npm-template-typescript

Supports javascript developers who use npm to publish and share package quicker. Less time to setup utility tools to follow best-practices and more time on the core features of the package.

## Prerequisites

The following tools need to be installed:

* [Git](http://git-scm.com/)
* [Node.js 18+](http://nodejs.org/)

## Capabilities and Frameworks

|Capability|Module|
|------------------|-----------|
|Dependence Framework| [`@tsconfig/node18`](https://www.npmjs.com/package/@tsconfig/node18) extend ts config node18+, [ts-node](https://www.npmjs.com/package/ts-node) execution and REPL for node.js, with source map and native ESM support.|
|Build Tools| [`tsup`](https://tsup.egoist.dev) Bundle your TypeScript library with no config, powered by esbuild|
|Coding Standard| TBU|
|Testing Framework| [Jest](https://jestjs.io/) a delightful JavaScript Testing Framework with a focus on simplicity.|
|Useful Links| [npmtrends](https://npmtrends.com/) Compare package download counts over time|

## How to test

```bash
npm test | yarn test
npm test:coverage | yarn test:coverage
```

## How to check lint [TBU]

```bash
npm run lint
npm run lintFix
```

## How to use [TBU]

### Clone the repository

```bash
git clone git@github.com:lengocduy/npm-template-typescript.git
cd npm-template-typescript
```

### Open package.json file to edit some fields e.g. name, repository, etc

## Collaboration

1. We use the git rebase strategy to keep tracking meaningful commit message. Help to enable rebase when pull `$ git config --local pull.rebase true`
2. Follow TypeScript Style Guide [Google](https://google.github.io/styleguide/tsguide.html)
3. Follow Best-Practices in coding:
     * [Clean code](https://github.com/labs42io/clean-code-typescript) make team happy
     * [Return early](https://szymonkrajewski.pl/why-should-you-return-early/) make code safer and use resource Efficiency
     * [Truthy & Falsy](https://frontend.turing.edu/lessons/module-1/js-truthy-falsy-expressions.html) make code shorter
     * [SOLID Principles](https://javascript.plainenglish.io/solid-principles-with-type-script-d0f9a0589ec5) make clean code
     * [DRY & KISS](https://dzone.com/articles/software-design-principles-dry-and-kiss) avoid redundancy and make your code as simple as possible
4. Make buildable commit and pull latest code from `main` branch frequently
5. Use readable commit message [karma](http://karma-runner.github.io/6.3/dev/git-commit-msg.html)

```bash
     /‾‾‾‾‾‾‾‾
🔔  <  Ring! Please use semantic commit messages
     \________


<type>(<scope>): ([issue number]) <subject>
    │      │        |             │
    |      |        |             └─> subject in present tense. Not capitalized. No period at the end. 
    |      |        |  
    │      │        └─> Issue number (optional): Jira Ticket or Issue number 
    │      │
    │      └─> Scope (optional): eg. Articles, Profile, Core
    │                                                                           
    └─> Type: chore, docs, feat, fix, refactor, style, ci, perf, build, or test.
```
