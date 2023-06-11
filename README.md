# Generate Me Components

A simple library for creating js component(s) folder quickly with as many files as you want! :fire:

## Installation

```bash
npm i -D generate-me-components
```

## Usage

```bash
npx generate-me-components [your-components-names]
```

OR:

```bash
npx gmc [your-components-names]
```

**NOTE: if you don't specifiy components' names, you will be asked later. Also, components names are *case-insensitive*.**

Example:

```bash
npx gmc couter1 counter2
```

This command will ask you the following questions:

1. Components Path (if it does not exist, it will be created automatically).
2. If you're using JSX/TSX file extensions.

Then if you're using JSX/TSX file extensions, it will ask you:

1. The used StyleSheet language (CSS, SASS, Stylus...).
2. The used Scripting language (JSX, TSX).
3. If arrow function components are preferred.
4. If you want to include additional files.
5. Additional files' extension (e.g., test.js...).
6. Components' Names (if not specified in CLI arguments).

Otherwise, it will just ask you:

1. Extensions of Component's files (e.g., vue, svelte...).
2. Components' Names (if not specified in CLI arguments).

For example: if you enter: vue ts js, it will create 3 files with the same name but different file extensions.

After this, it will ask you if you want to create a config file so that you don't have to answer these questions the next time.

The file name is generate-me-components.json.

**NOTE: if you delete an option in the generated config file, it will ask you the corresponding question for that deleted option next time you run the command.**

## Issues

If you find a bug or want to suggest a new feature, create a [new issue](https://github.com/MrLuckyCat/gift-me-components/issues).

if you like the library, give a star to that repo to support me and buy me a coffee if you can!

[![paypal](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://ko-fi.com/mrluckycat)
