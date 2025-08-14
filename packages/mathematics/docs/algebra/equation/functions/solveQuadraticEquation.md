[**@ts-standard-library/mathematics v0.0.2**](../../../README.md)

***

[@ts-standard-library/mathematics](../../../README.md) / [algebra/equation](../README.md) / solveQuadraticEquation

# Function: solveQuadraticEquation()

> **solveQuadraticEquation**(`a`, `b`, `c`): `null` \| \[`number`, `number`\]

Defined in: [algebra/equation.ts:29](https://github.com/gabaudette/ts-stdlib/blob/725aff52e6f28b9942b278b955914b3ace9f325c/packages/mathematics/src/algebra/equation.ts#L29)

Solves a quadratic equation of the form ax² + bx + c = 0.

## Parameters

### a

`number`

The coefficient of x² (must not be zero).

### b

`number`

The coefficient of x.

### c

`number`

The constant term.

## Returns

`null` \| \[`number`, `number`\]

A tuple containing the two real roots [root1, root2] if they exist, or `null` if there are no real roots.
