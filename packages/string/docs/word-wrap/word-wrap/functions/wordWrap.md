[**@ts-standard-library/string v1.0.7**](../../../README.md)

***

[@ts-standard-library/string](../../../modules.md) / [word-wrap/word-wrap](../README.md) / wordWrap

# Function: wordWrap()

> **wordWrap**(`text`, `width`): `string`

Defined in: [word-wrap/word-wrap.ts:11](https://github.com/gabaudette/ts-stdlib/blob/be448e6a9d9c20c6c2f27f6550ce4e65fc8c9b89/packages/string/src/word-wrap/word-wrap.ts#L11)

Wraps a given text into lines of specified maximum width, breaking lines at word boundaries.

Splits the input text into words and constructs lines such that each line's length does not exceed the specified width.
Words are not split; if a word would cause the line to exceed the width, it is moved to the next line.

## Parameters

### text

`string`

The input string to be wrapped.

### width

`number`

The maximum width (in characters) of each line.

## Returns

`string`

The wrapped text with lines separated by newline characters (`\n`).
