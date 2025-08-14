[**@ts-standard-library/mathematics v0.0.2**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [algebra/equation](../README.md) / solveLinearEquation

# Function: solveLinearEquation()

> **solveLinearEquation**(`a`, `b`): `null` \| `number`

Defined in: [algebra/equation.ts:13](https://github.com/gabaudette/ts-stdlib/blob/725aff52e6f28b9942b278b955914b3ace9f325c/packages/mathematics/src/algebra/equation.ts#L13)

Solves a linear equation of the form `ax + b = 0` for `x`.

## Parameters

### a

`number`

The coefficient of `x`.

### b

`number`

The constant term.

## Returns

`null` \| `number`

The solution for `x` if one exists, or `null` if the equation has no solution or infinitely many solutions.

## Example

```typescript
const x = solveLinearEquation(2, -4); // Returns 2
```
