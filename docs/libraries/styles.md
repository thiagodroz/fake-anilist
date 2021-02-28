# Library: Styles

[<< README.md](../../README.md)

## About

The `Styles` library is a lib that exports the styles shared between applications within the monorepo. It includes [Styled Components](https://styled-components.com/) styles that are gonna be shared between desktop and mobile aplications and data relative to the `Themes`.

## Styles

The folder `styles` contains the Styled Component files with the styles that are shared between desktop and mobile. They're declared as `React Styled Components` and not as `React Native Styled Components`. Because of that **properties or units that are used by React but not by React Native SHOULD BE AVOIDED IN ORDER TO DO NOT BREAK THE MOBILE APPLICATION**.

Things like those won't work:

- Gradient
- em/rem
- vh/vw
- outline

## Themes

The `themes` folder contains the color palette, the current themes and the export of their typings.
