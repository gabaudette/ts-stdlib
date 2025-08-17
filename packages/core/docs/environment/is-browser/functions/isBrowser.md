[**@ts-standard-library/core v1.0.0**](../../../README.md)

***

[@ts-standard-library/core](../../../modules.md) / [environment/is-browser](../README.md) / isBrowser

# Function: isBrowser()

> **isBrowser**(): `boolean`

Defined in: [environment/is-browser.ts:9](https://github.com/gabaudette/ts-stdlib/blob/ea80ba1db09c741e99f8cb19e94e5a29b81b623b/packages/core/src/environment/is-browser.ts#L9)

Determines if the current runtime environment is a web browser.

## Returns

`boolean`

`true` if running in a browser environment, otherwise `false`.

This function checks for the existence of `window`, `document`, and `document.createElement`
to reliably detect browser contexts.
