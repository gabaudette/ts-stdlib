[**@ts-standard-library/core v0.0.1**](../../../README.md)

***

[@ts-standard-library/core](../../../modules.md) / [environment/is-browser](../README.md) / isBrowser

# Function: isBrowser()

> **isBrowser**(): `boolean`

Defined in: environment/is-browser.ts:9

Determines if the current runtime environment is a web browser.

## Returns

`boolean`

`true` if running in a browser environment, otherwise `false`.

This function checks for the existence of `window`, `document`, and `document.createElement`
to reliably detect browser contexts.
