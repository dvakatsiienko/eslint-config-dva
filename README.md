# eslint-config-dva

[![npm version](https://badge.fury.io/js/eslint-config-dva.svg)](https://badge.fury.io/js/eslint-config-dva)

This package provides Dima Vakatsiienko's (dva) **ESLint** config as an extensible shared config.

The config is an extension of **[eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)** and intended for **[TypeScript](https://www.typescriptlang.org/)** projects.

**The following ESLint plugins are included**:

-   [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin)
-   [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules)
-   [eslint-plugin-react-hooks](https://github.com/facebook/react/tree/master/packages/eslint-plugin-react-hooks)
-   [eslint-plugin-jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)
-   [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import)
-   [eslint-plugin-align-import](https://github.com/Simonwep/eslint-plugin-align-import)

Also, the config is dependent on the [@typescript-eslint/parser](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser).

> All the required dependencies are included in the installation script below.

### Install

Install all the required packages using the following script:

**yarn**

```sh
yarn add -D eslint eslint-config-dva @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-config-airbnb eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y eslint-plugin-import eslint-plugin-align-import
```

**npm**

```sh
npm install -D eslint eslint-config-dva @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-config-airbnb eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y eslint-plugin-import eslint-plugin-align-import
```

### Usage

Add the following to your `eslintrc.js`:

```js
module.exports = {
    extends: 'dva'
};
```
