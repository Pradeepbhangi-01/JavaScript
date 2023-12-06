/// while loop to check the number is palidrome or not

let num = "123421";
let number = num;
let reverse = "";
while (num !== 0) {
  reverse = reverse + (num % 10);
  num = parseInt(num / 10);
}

if (number === reverse) {
  console.log(number + " is a palindrome");
} else {
  console.log(number + " is not a palindrome");
}
