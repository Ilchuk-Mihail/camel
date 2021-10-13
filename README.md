<p align="center">
    <img alt="camelCase" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/CamelCase_new.svg/1200px-CamelCase_new.svg.png" width="150" />
</p>
<h1 align="center">
  Truly camelCase lib
</h1>

[![javascript style guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
![camel ci](https://github.com/Ilchuk-Mihail/camel/workflows/camel%20ci/badge.svg?branch=master)
[![Coverage Status](https://coveralls.io/repos/github/Ilchuk-Mihail/camel/badge.svg?branch=master)](https://coveralls.io/github/Ilchuk-Mihail/camel?branch=master)
![camel package](https://github.com/Ilchuk-Mihail/camel/workflows/camel%20package/badge.svg?branch=master)

## What is camelCase?

>Camel case is the practice of capitalizing the first letter of each word in a series and then removing spaces, numbers, underscores, hyphens, and other special characters. This leaves a concatenation of words that is combined into a single string with various letters capitalized throughout.

## Basic camelCase rules:

- The first letter is capitalized.
- One or more letters in that word are also capitalized.
- The word does not end on a capitalized letter: camelCasE
- No two capitalized letters shall follow directly each other: camelCAse
- No number in that word at any place: CamelCase1more
- No dot(.), under_score or dash (-) within the word, only letters: camel_Case
- No ‘foreign’ letters in it like äöüß or accentuated like áéí. cämélCáße

## Installation

```
npm install camel
```

## Usage

```js
const camel = require('camel')

// is camelCase
camel.isCamelCase('fooBar') // => true
camel.isCamelCase('foo-bar') // => false

// camelize
camel.camelize('foo-bar') // => 'fooBar'
camel.camelize('foo_bar') // => 'fooBar'

// decamelize
camel.decamelize('fooBar') // => 'foo_bar'
camel.decamelize('fooBar', '-') // => 'foo-bar'

```

## API

### `isCamelCase(value)`

Function that validate if string value is a camel case

| Param | Description | Type |
| ----- | ----------- | ---- |
| value | String value to validate | `string`

<br/>

### `camelize(value)`

Function that camelize string value. 
Keep in mind that, it's a greedy operation, it will remove any special character and also numbers to create camelCase string value.

| Param | Description | Type |
| ----- | ----------- | ---- |
| value | String value to camelize | `string`

<br/>

### `decamelize(value, separator = '_')`

Function that decamelize string value.
It saves any special characters and numbers unlike `camelize` function.

| Param | Description | Type |
| ----- | ----------- | ---- |
| value | String value in camelCase | `string`
| separator | Separator for the new decamelized string. Underscore by default| `string` |