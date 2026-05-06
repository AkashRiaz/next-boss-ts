## Why any is a "Type Safety Hole"

When it comes to using "any" in TypeScript, it’s basically letting the compiler know that you don’t care what kind of type the variable is. Therefore, "any" can be considered as a "Type Safety Hole" in TypeScript. This is because TypeScript is specifically created in order to detect errors as soon as possible, but the "any" type simply avoids all of that.

- Bypasses Validation: Any type allows us to access any method or property that doesn’t exist.

- Passing a value of "any" to a type-safe function won’t raise any warning or error from TypeScript.

## Why unknown is the Safer Choice

In TypeScript, "unknown" is considered the safer choice compared to "any" because it enforces more type safety. Because:

 - The Difference: With any, we can do anything. With unknown, we can do nothing until we prove what the type is. So we can say "unknown" is the safer choice then "any".

## The Concept of Type Narrowing

In TypeScript, narrowing refers to the process of reducing the type of a variable from a broader type to a more specific type within a certain code block or context. This is often done through conditional statements or type guards, which help the TypeScript compiler understand more precisely what the type of a variable is at a given point in the code.

Here are some common ways narrowing can occur in TypeScript:

- Truthiness Guards: Checking if a value exists (if (val) ...).
- typeof guards: Checking for primitive types (string, number, boolean).
- instanceof guards: Checking if an object is an instance of a specific class.
- Equality narrowing: Comparing values using === or !==.

const processData = (input: unknown) => {
if (typeof input === "string") {
console.log(input.toUpperCase());
} else if (typeof input === "number") {
console.log(input.toFixed(2));
}
}
