[**@ts-standard-library/core v1.0.3**](../../../README.md)

***

[@ts-standard-library/core](../../../modules.md) / [assertions/assert](../README.md) / assertNever

# Function: assertNever()

> **assertNever**(`value`, `message?`): `asserts value is never`

Defined in: [assertions/assert.ts:32](https://github.com/gabaudette/ts-stdlib/blob/be448e6a9d9c20c6c2f27f6550ce4e65fc8c9b89/packages/core/src/assertions/assert.ts#L32)

Asserts that a value should never occur.

This function is typically used for exhaustive checks in switch statements
or other control flow constructs where all possible cases should be handled.
If called, it throws an error, indicating that an unexpected value was encountered.

## Parameters

### value

`never`

The value that should never occur.

### message?

`string`

Optional custom error message to include in the thrown error.

## Returns

`asserts value is never`

## Throws

Always throws an error with the provided message or a default message.
