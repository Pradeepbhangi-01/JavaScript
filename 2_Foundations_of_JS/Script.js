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

///////////////////////////////////////////OPERATORS

/// 0, "",null, undefined, false, NaN --------> these are false aprt from that evrything is truthy values.

/**********TYPE COERCION *****************/

console.log("5" + 5); /////// 55 --> it is a string

console.log("55" - 10); //////// 45 --> It is a Number

console.log("4" * 4); ////// 16 ---> Its is Number

//////   IMPLICIT CONVERSION OF DATATYPES IS CALLED TYPE COERSION

////// EXPLICITE CONVERSION OF DATATYPES IS CALLED  TYPE CONVERSION

///// To string

console.log(String(100));
console.log(String(true));
console.log(String(null));
console.log(String(undefined));

//////method

console.log((123).toString());

//// null and undefiend are not conerted to the string using the toString()

///// TOOOO Number

console.log("********TONUMBR**********");

console.log(Number("12345"));

console.log(Number("Value")); // NaN  - not a number

console.log(Number(true)); // 1

console.log(Number("24F")); //// NaN

console.log(Number("10.5") + 5); // 15.5

/// Unary + operator ---- works on Variables
let b = "5345";
console.log(+b); // It will convert to number

////////// parseFloat() and parseInt()

console.log(parseInt("836486")); // number

console.log(parseInt("123G")); // 123 ---> it will parse the last letter

console.log(parseInt("133R56T")); // 133 --> parse all the numbers till the first letter comes

console.log(parseInt("1234.56Fr")); // 1234

console.log(parseFloat("123.45F")); // 123.45

/////////////// To Boolean

console.log(Boolean(0)); // false
console.log(Boolean("t")); // true
