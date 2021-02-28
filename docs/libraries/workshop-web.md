# Library: Workshop Web

[<< README.md](../../README.md)

## About

The `Workshop Web` library is a lib that exports all components used by the web applications in this monorepo.

## Workshop

This library uses the concept of [The Workshop and The Storefront by Brad Frost](https://bradfrost.com/blog/post/the-workshop-and-the-storefront/), so it's our `Workshop` where our components are developed, in isolation, to then be consumed by an application that will be the `Storefront`.

## Atomic Design

This library uses the concept of [Atomic Design by Brad Frost](https://atomicdesign.bradfrost.com/chapter-2/), so inside the `lib` folder we're gonna find folders using the Atomic Design definition of: `Atoms`, `Molecules`, `Organisms` and `Templates`. The page itself isn't responsability of this lib, but responsability of the application that will consume it.

## Storybook

This library contains an implementation of [Storybook](https://storybook.js.org/). So every component should have a `.stories.tsx` file with them that will describe all their [stories](https://storybook.js.org/docs/react/get-started/whats-a-story).

We also use `.stories.mdx` files to describe docs stories, that aren't specifically talking about a component, but a concept.

To run the `Storybook` just run the command:

```
yarn workshop-web:run
```

It's gonna open at http://localhost:4400/.

But if you wanna build the storybook to publish it, jus run the command:

```
  yarn workshop-web:build
```
