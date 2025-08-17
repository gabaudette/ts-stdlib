[**@ts-standard-library/string v1.0.4**](../../../README.md)

***

[@ts-standard-library/string](../../../modules.md) / [template-interpolation/template-interpolation](../README.md) / interpolate

# Function: interpolate()

> **interpolate**(`template`, `variables`): `string`

Defined in: [template-interpolation/template-interpolation.ts:11](https://github.com/gabaudette/ts-stdlib/blob/ea80ba1db09c741e99f8cb19e94e5a29b81b623b/packages/string/src/template-interpolation/template-interpolation.ts#L11)

Replaces placeholders in a template string with corresponding values from a variables object.

Placeholders are denoted by double curly braces, e.g. `{{key}}`.
If a key is not found in the variables object, it is replaced with an empty string.

## Parameters

### template

`string`

The template string containing placeholders.

### variables

`Record`\<`string`, `string` \| `number` \| `boolean`\>

An object mapping keys to values to interpolate into the template.

## Returns

`string`

The interpolated string with all placeholders replaced by their corresponding values.
