console.log("JS Funadamentals");

// IN JS variables are not typed
let age = 10;

console.log(age);

// let, const, var
// naming variables number,alphabet,$,_ and not start with number
// camel casing - prefferred

// const should be intialize while declaring the varialbe

// Difference b/w in let,var and const
// const - strongly strict, let - strict  and var - losely strict
// Need to avoid the using of the var

//////////////////////////DATA TYPES

/////PRIMITIVE DATATYPES

//Number(64 bit), String, Boolean, Undefined, Null, Symbol(ES6/2015) BigInt(ES2020)

let num = 20;

console.log(typeof num);

///weired in type of null

let a = null;
console.log(typeof a); ///Object --------------> This is a bug in JS

///BigInt
let num1 = 10n;
console.log(typeof num1); /// bigInt -------> most propbably we won't use

//////////INTERESTING THINGS
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

console.log(typeof Number.MAX_VALUE * 10); // NaN -----> Not a number

console.log(12 / Infinity); // 0

console.log(Infinity / Infinity); // NaN
