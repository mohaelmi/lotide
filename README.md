# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @mohaelmi/lotide`

**Require it:**

`const _ = require('@mohaelmi/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

 * `head` : returns first item from the array
 * `tail` : returns all the items in the array except the first one 
 * `middle` : returns middle items in the array
 * `countOnly`: returns items that exist the array with condition
 * `countLetters`: count letters in the string
 * `eqArrays`: compare two arrays
 * `eqObjects`: compare two objects
 * `findKey`: find key in object with callback condition
 * `findKeyByValue`: find key using value
 * `flatten`: make nested array in one array
 * `letterPositions`: return letters position
 * `map`: return passed array with condition
 * `takeUntil`: return passed array until the condition is falsy
 * `without`: romves items based on condition