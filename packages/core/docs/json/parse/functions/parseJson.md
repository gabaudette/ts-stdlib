[**@ts-standard-library/core v1.0.2**](../../../README.md)

***

[@ts-standard-library/core](../../../modules.md) / [json/parse](../README.md) / parseJson

# Function: parseJson()

> **parseJson**\<`T`\>(`jsonString`): `undefined` \| `T`

Defined in: [json/parse.ts:12](https://github.com/gabaudette/ts-stdlib/blob/4a412e6fb273dc9fcab54b84c05921f52dac4b3f/packages/core/src/json/parse.ts#L12)

Safely parses a JSON string and returns the resulting value typed as `T`.

If the input string is not valid JSON, the function returns `undefined`.

## Type Parameters

### T

`T`

The expected type of the parsed JSON object.

## Parameters

### jsonString

`string`

The JSON string to parse.

## Returns

`undefined` \| `T`

The parsed object of type `T`, or `undefined` if the input is not valid JSON.
