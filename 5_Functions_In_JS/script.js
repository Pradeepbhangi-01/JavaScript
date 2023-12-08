////////// functions

// Function declaration

// function sum1(a, b) {
//   return a + b;
// }

// console.log(sum1(100, 200));

// /// Function expression

// const sum2 = function (a, b) {
//   return a + b;
// };

// console.log(sum2(10, 20));

// /////////////// When we want to go without function declaration the function should not be accessed then we have to go with Function expression

// /******** ARROW FUNCTION  */

// let product = (a, b) => {
//   return a + b;
// };

// console.log(product(22, 33));

// //// IIFE(Immediately invoked Function expression)

// (function () {
//   console.log("IIFE");
// })(); /////// () this will call/invoke the function

// (function (a, b) {
//   console.log(a ** b);
// })(100, 2);

// ////////////////////////////////////////////--------------------> iife is used to allow only certain elements ---> its creating an abstracion layer
// const iife = (function () {
//   const userData = {
//     userName: "Pradeep",
//     age: 24,
//   };

//   function userName() {
//     console.log(userData.userName);
//   }

//   function getData(age) {
//     console.log(userData.age + age);
//   }

//   return { userName, getData };
// })();

// // console.log(iife);

// iife.userName();
// iife.getData(20);

// // console.log(iife.userData);

function main() {
  const userAuth = //Implement your IIFE here
    //It should return the registerUser function

    (function () {
      const users = {
        username: "",
        password: "",
      };

      function registerUser(username, password) {
        users.username = username;
        users.password = password;
      }
      function checkCredentials(username, password) {
        for (let i in users) {
          if (i.username === username) {
            return "The user is already registered";
          }
        }
        users.username = username;
        users.password = password;
        return "The user have been added to the registeredUser array";
      }
    })();

  console.log(userAuth.registerUser("user1", "password123"));
  //Output: The user have been added to the registeredUser array
  console.log(userAuth.registerUser("user1", "password123"));
  //Output : The user is already registered
  return userAuth;
}
