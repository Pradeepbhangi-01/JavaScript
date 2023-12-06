// function calculate(amount) {
//   let discount;
//   // write your code here
//   switch (true) {
//     case amount < 500:
//       discount = "No Discount";
//       break;
//     case amount >= 500 && amount < 1000:
//       discount = "10% Discount";
//       break;
//     case amount >= 1000 && amount < 2000:
//       discount = "20% Discount";
//       break;
//     case amount >= 2000 && amount < 4000:
//       discount = "30% Discount";
//       break;
//     case amount >= 4000 && amount < 5000:
//       discount = "40% Discount";
//       break;
//     case amount >= 5000:
//       discount = "50% Discount";
//       break;
//     default:
//       discount = "Invalid Input";
//   }
//   return discount;
// }

// console.log(calculate(1000));

///////////////////////////////////////////////////////////////////////////////////PROBLEM2
//Write the program here to get the access level of the user depending upon the jobTitle and yearsOfExperience.
//Store your final result in the "accessLevel" variable.
//Please do not alter anything else in the starter code

function main(jobTitle, yearsOfExperience) {
  let accessLevel;

  switch (jobTitle) {
    case "Manager":
      accessLevel = "Full Access";
      break;
    case "Supervisor":
      if (yearsOfExperience >= 5) {
        accessLevel = "Full Access";
      } else {
        accessLevel = "Partial Access";
      }
      break;
    case "Associate":
      if (yearsOfExperience >= 3) {
        accessLevel = "Partial Access";
      } else {
        accessLevel = "Limited Access";
      }
      break;
    default:
      if (yearsOfExperience >= 2) {
        accessLevel = "Limited Access";
      } else {
        accessLevel = "Trainee Access";
      }
      break;
  }

  console.log("Access level: " + accessLevel);
  return accessLevel;
}
