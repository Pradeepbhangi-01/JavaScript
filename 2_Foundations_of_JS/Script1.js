/// Loops

let num = 14;

if (num < 100) console.log("number is leass than 100"); // for writing out only one line of the code we can write without curly bracess

if (num % 2 == 0) {
  console.log("number is even");
} else {
  console.log("number is odd");
}

/// Email verification  ---> Check is it authentic or not
// Input an email
// Verification parameters---->>>>  length>11, after . only 2 or 3 characters allowed, minimum 3 characters between @ and .

// let email = "pp@gmail.com";
// let email = prompt("Enter the email adderss");

// emailLen = email.length;
// dotIndex = email.lastIndexOf(".");
// atIndex = email.lastIndexOf("@");
// lastIndex = emailLen - 1;

// if (
//   emailLen < 11 ||
//   lastIndex - dotIndex < 2 ||
//   lastIndex - dotIndex > 3 ||
//   dotIndex - atIndex < 3
// ) {
//   console.log("Inavalid Email");
// }

////////////////////////////SWITCH

// switch (expression) {
//   case a:
//     break;
//   case b:
//     break;

//   default:
// }

// const fruits = prompt("Enter the fruit");

// switch (fruits) {
//   case "Apple":
//     console.log("Its is an Apple");
//     break;

//   case "Kiwi":
//     console.log("Its a Kiwi");
//     break;

//   default:
//     console.log("Any other fruit");
// }

// console.log("Outside switch");

////////////////Ternery operator

//Condition? (True) Expreseeion1 : (False) Expreseion2

let number = Number(prompt("enter a number"));

number % 2 === 0 ? console.log("Even") : console.log("Odd");
