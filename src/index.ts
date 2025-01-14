"use strict";
// index.ts

// Define a simple class
class Greeter {
    greeting: string;

    constructor(message: string) {
        this.greeting = message;
    }

    greet() {
        return `Hello, ${this.greeting}`;
    }
}

// Create an instance of the Greeter class
const greeter = new Greeter("X-Ticket");

// Use the greet method
console.log(greeter.greet());

// Define a function that takes a number and returns its square
function square(num: number): number {
    return num * num;
}

// Use the square function
const result = square(5);
console.log(`The square of 5 is ${result}`);

