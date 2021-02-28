# FakeAnilist

Monorepo with a fake [Anilist](https://anilist.com) using their API in order to practice development and be able to show others what I consider as a well structured Frontend Architecture.
This project was generated using [Nx](https://nx.dev).

## Applications

## Libraries

- [Apollo](docs/libraries/apollo.md)
- [Workshop Web](docs/libs/workshop-web.md)

## Generate an application

Run `yarn nx g @nrwl/react:app my-app` to generate an application.

> You can use any of the plugins to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `yarn nx g @nrwl/react:lib my-lib` to generate a library.

> You can also use any of the plugins to generate libraries as well.

Libraries are sharable across libraries and applications.

## Code scaffolding

Run `yarn nx g @nrwl/react:component my-component --project=my-app` to generate a new component.

## Build

Run `yarn nx build my-app` to build the project. The build artifacts will be stored in the `dist

## Running unit tests

Run `yarn nx test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `yarn nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `yarn nx e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `yarn nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `yarn nx dep-graph` to see a diagram of the dependencies of your projects.
