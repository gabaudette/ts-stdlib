[**@ts-standard-library/core v1.0.0**](../../../README.md)

***

[@ts-standard-library/core](../../../modules.md) / [assertions/assert](../README.md) / assert

# Function: assert()

> **assert**(`condition`, `message?`): `asserts condition`

Defined in: [assertions/assert.ts:12](https://github.com/gabaudette/ts-stdlib/blob/ea80ba1db09c741e99f8cb19e94e5a29b81b623b/packages/core/src/assertions/assert.ts#L12)

Asserts that a given condition is true at runtime.

If the condition evaluates to `false`, an `Error` is thrown with the provided message,
or a default message if none is specified. This function uses TypeScript's `asserts`
feature to inform the type system that the condition can be assumed true after this call.

## Parameters

### condition

`unknown`

The value to assert as truthy.

### message?

`string`

Optional error message to display if the assertion fails.

## Returns

`asserts condition`

## Throws

Throws an error if the condition is falsy.
