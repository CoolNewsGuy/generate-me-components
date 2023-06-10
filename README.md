# Gift Me Components

A simple library for creating js component(s) quickly!

## Installation

```bash
npm i -D gift-me-components
```

## Usage

```bash
npx gift-me-components 
```

This command will ask you the following questions:

1. Components Path (if it does not exist, it will be created automatically).
2. Your JavaScript framework.

**NOTE: if you're using a library/framework that uses JSX/TSX files, just choose React as a framework. The reason is that it will fill the JSX/TSX with simple boilerplate.**

Then if you're using React, it will ask you:

1. The used StyleSheet language (CSS, SASS, Stylus...).
2. The used Scripting lanuage (JSX, TSX).
3. If arrow function components are preferred.
4. If you want to include additional files.
5. additional files' extension (e.g., test.js...).

Otherwise, it will just ask you:

- Extensions of Component's files (e.g., vue, svelte...).

After this:
it will ask you if you want to create a config file so that you don't have to answer these questions the next time.

The file name is gift-me-components.json.

**NOTE: if you delete an option in the generated config file, it will ask you the corresponding question for that deleted option next time you run the command.**

## Issues

If you find a bug or want to suggest a new feature, create a [new issue](https://github.com/MrLuckyCat/gift-me-components/issues).
