# bpk-svgs

[![Build Status](https://github.com/Skyscanner/bpk-svgs/workflows/Foundations%20CI/badge.svg)](https://github.com/Skyscanner/bpk-svgs/actions)

> Backpack's collection of SVGs.

## Installation

```sh
npm install @skyscanner/bpk-svgs --save-dev
```

## Usage

This package exposes Backpack SVGs in various formats:

- React components
  ```
  dist/js/icons/lg/*
  dist/js/icons/sm/*
  dist/js/spinners/*
  ```

- An icon font
  ```
  dist/font/BpkIcon.ttf
  ```

## Implementation 

`.svg` assets are stored within `./src` and various different formats are generated based upon this source. The generation tasks are defined within `gulpfile.mjs`. 

### JS

For web consumption, `.svg` files are transformed into individual react components. [svgr](https://react-svgr.com/) is used to power the transformation, optimisation and form of the resulting react component. The current `svgr` setup will create typescript components, in order to provide consumers with `.js` assets to consume within their react codebase, `typescript` is used to transpile from typescript to javascript. `.d.ts` files are nested alongside the original source to provide typescript types to consumers.


## Contributing

To contribute please see [contributing.md](CONTRIBUTING.md).