
/**
 * Represents a tuple containing two elements of potentially different types.
 *
 * @typeParam T1 - The type of the first element in the tuple.
 * @typeParam T2 - The type of the second element in the tuple.
 *
 * @remarks
 * The tuple is immutable due to the `Readonly` wrapper.
 *
 * @example
 * ```typescript
 * const pair: Tuple<number, string> = [42, "answer"];
 * ```
 *
 * @see {@link MutableTuple} for a mutable version of this tuple.
 */
export type Tuple<T1, T2> = Readonly<[T1, T2]>;

/**
 * Represents a read-only tuple containing exactly three elements of potentially different types.
 *
 * @typeParam T1 - The type of the first element in the tuple.
 * @typeParam T2 - The type of the second element in the tuple.
 * @typeParam T3 - The type of the third element in the tuple.
 *
 * @example
 * ```typescript
 * const point: Tuple3<number, number, number> = [1, 2, 3] as const;
 * ```
 *
 * @see {@link MutableTuple3} for a mutable version of this tuple.
 */
export type Tuple3<T1, T2, T3> = Readonly<[T1, T2, T3]>;


/**
 * Represents a tuple containing exactly four elements of potentially different types.
 *
 * @typeParam T1 - The type of the first element.
 * @typeParam T2 - The type of the second element.
 * @typeParam T3 - The type of the third element.
 * @typeParam T4 - The type of the fourth element.
 *
 * @example
 * ```typescript
 * const tuple: Tuple4<number, string, boolean, Date> = [1, "hello", true, new Date()];
 * ```
 *
 * @see {@link MutableTuple4} for a mutable version of this tuple.
 */
export type Tuple4<T1, T2, T3, T4> = Readonly<[T1, T2, T3, T4]>;


/**
 * Represents a tuple containing exactly five elements of potentially different types.
 *
 * @typeParam T1 - The type of the first element.
 * @typeParam T2 - The type of the second element.
 * @typeParam T3 - The type of the third element.
 * @typeParam T4 - The type of the fourth element.
 * @typeParam T5 - The type of the fifth element.
 *
 * @example
 * ```typescript
 * const tuple: Tuple5<number, string, boolean, Date, null> = [1, "two", true, new Date(), null];
 * ```
 *
 * @see {@link MutableTuple5} for a mutable version of this tuple.
 */
export type Tuple5<T1, T2, T3, T4, T5> = Readonly<[T1, T2, T3, T4, T5]>;

/**
 * Represents a tuple with exactly six elements, each potentially of a different type.
 *
 * @typeParam T1 - The type of the first element.
 * @typeParam T2 - The type of the second element.
 * @typeParam T3 - The type of the third element.
 * @typeParam T4 - The type of the fourth element.
 * @typeParam T5 - The type of the fifth element.
 * @typeParam T6 - The type of the sixth element.
 *
 * @remarks
 * The tuple is immutable due to the `Readonly` wrapper.
 *
 * @example
 * ```typescript
 * const tuple: Tuple6<number, string, boolean, Date, null, undefined> = [1, "two", true, new Date(), null, undefined];
 * ```
 *
 * @see {@link MutableTuple6} for a mutable version of this tuple.
 */
export type Tuple6<T1, T2, T3, T4, T5, T6> = Readonly<[T1, T2, T3, T4, T5, T6]>;

/**
 * Represents a mutable tuple containing two elements of types `T1` and `T2`.
 *
 * @typeParam T1 - The type of the first element in the tuple.
 * @typeParam T2 - The type of the second element in the tuple.
 *
 * @example
 * ```typescript
 * let pair: MutableTuple<number, string> = [42, "hello"];
 * pair[0] = 100; // Allowed, as the tuple is mutable
 * pair[1] = "world"; // Allowed, as the tuple is mutable
 * // console.log(pair);
 * // [100, "world"]
 * ```
 *
 * @remarks
 * The tuple is mutable, allowing for modification of its elements.
 * This should be used with caution, as it can lead to unexpected side effects.
 * In general, prefer immutable data structures when possible.
 *
 * @see {@link Tuple} for an immutable version of this tuple.
 */
export type MutableTuple<T1, T2> = [T1, T2];

/**
 * Represents a mutable tuple containing three elements of potentially different types.
 *
 * @typeParam T1 - The type of the first element.
 * @typeParam T2 - The type of the second element.
 * @typeParam T3 - The type of the third element. *
 *
 * @example
 * ```typescript
 * let triplet: MutableTuple3<number, string, boolean> = [42, "hello", true];
 * triplet[0] = 100; // Allowed, as the tuple is mutable
 * console.log(triplet);
 * // [100, "hello", true]
 * ```
 *
 * @remarks
 * The tuple is mutable, allowing for modification of its elements.
 * This should be used with caution, as it can lead to unexpected side effects.
 * In general, prefer immutable data structures when possible.
 *
 * @see {@link Tuple3} for an immutable version of this tuple.
 */
export type MutableTuple3<T1, T2, T3> = [T1, T2, T3];

/**
 * Represents a mutable tuple containing four elements of potentially different types.
 *
 * @typeParam T1 - The type of the first element.
 * @typeParam T2 - The type of the second element.
 * @typeParam T3 - The type of the third element.
 * @typeParam T4 - The type of the fourth element.
 *
 * @example
 * ```typescript
 * let triplet: MutableTuple3<number, string, boolean, string> = [42, "hello", true, "john"];
 * triplet[0] = 100; // Allowed, as the tuple is mutable
 * console.log(triplet);
 * // [100, "hello", true, "john"]
 * ```
 *
 * @remarks
 * The tuple is mutable, allowing for modification of its elements.
 * This should be used with caution, as it can lead to unexpected side effects.
 * In general, prefer immutable data structures when possible.
 *
 * @see {@link Tuple4} for an immutable version of this tuple.
 */
export type MutableTuple4<T1, T2, T3, T4> = [T1, T2, T3, T4];

/**
 * Represents a mutable tuple containing five elements of potentially different types.
 *
 * @typeParam T1 - The type of the first element.
 * @typeParam T2 - The type of the second element.
 * @typeParam T3 - The type of the third element.
 * @typeParam T4 - The type of the fourth element.
 * @typeParam T5 - The type of the fifth element.
 *
 * @example
 * ```typescript
 * let triplet: MutableTuple3<number, string, boolean, string, number> = [42, "hello", true, "john", 100];
 * triplet[0] = 100; // Allowed, as the tuple is mutable
 * console.log(triplet);
 * // [100, "hello", true, "john", 100]
 * ```
 *
 * @remarks
 * The tuple is mutable, allowing for modification of its elements.
 * This should be used with caution, as it can lead to unexpected side effects.
 * In general, prefer immutable data structures when possible.
 *
 * @see {@link Tuple5} for an immutable version of this tuple.
 */
export type MutableTuple5<T1, T2, T3, T4, T5> = [T1, T2, T3, T4, T5];

/**
 * Represents a mutable tuple containing six elements of potentially different types.
 *
 * @typeParam T1 - The type of the first element.
 * @typeParam T2 - The type of the second element.
 * @typeParam T3 - The type of the third element.
 * @typeParam T4 - The type of the fourth element.
 * @typeParam T5 - The type of the fifth element.
 * @typeParam T6 - The type of the sixth element.
 *
 * @example
 * ```typescript
 * let triplet: MutableTuple3<number, string, boolean, string, number, boolean> = [42, "hello", true, "john", 100, false];
 * triplet[0] = 100; // Allowed, as the tuple is mutable
 * console.log(triplet);
 * // [100, "hello", true, "john", 100, false]
 * ```
 *
 * @remarks
 * The tuple is mutable, allowing for modification of its elements.
 * This should be used with caution, as it can lead to unexpected side effects.
 * In general, prefer immutable data structures when possible.
 *
 * @see {@link Tuple6} for an immutable version of this tuple.
 */
export type MutableTuple6<T1, T2, T3, T4, T5, T6> = [T1, T2, T3, T4, T5, T6];
