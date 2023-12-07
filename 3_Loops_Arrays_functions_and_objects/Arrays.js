// const students = ["Pradeep", "Nitesh", "Mohini"];

// console.log(students);

// const employees = new Array("PP", "BB");

// console.log(employees);

// ///Heterogenous Arrays

// const str = ["Pradeep", 22, true];

// console.log(str);

// //--------------------------------------------------------------------------------------------------------------------------->>>>>

// /// Methods on Arrays

// const teams = ["MI", "RCB", "CSK"];
// console.log(teams);

// // Adding an Element
// //push() ---> add the items at the end only
// const teamsArray = teams.push("KKR"); /// returns the length of the array after the push
// console.log(teams);
// console.log(teamsArray);

// //unshift --> add the items at beginning
// const teamsUnshift = teams.unshift("DC");
// console.log(teams);
// console.log(teamsUnshift); // returns the length of the array after the unshift

// //pop ---> to delete the element --> pop out the element from the end

// const teamsPop = teams.pop("CSK"); // returns the poped out item from the array
// console.log(teams);
// console.log(teamsPop);

// // shift --> will delete the item from the begining

// const teamsShift = teams.shift("DC"); // return the shifted item from the array
// console.log(teams);
// console.log(teamsShift);

// // const teams = ['csk','rcb','mi','kkr','dc','rr','gt','kxip','srh','pbks'];

// // /// indexOf()  ----> returns the index of the first occurence of the element in the array
// // console.log(teams.indexOf('srh'));

// // /// include()  -----> reurns true

// // console.log(teams.includes('rcb'))

// // /// slice()  -----> returns a new array with the elements of the array that are selected

// // console.log(teams.slice(0,2 )); // -->

// // slice() and splice()

// // slice() --> slices out a piece of an array. It creates a new array.

// const teams = ['kkr', 'rcb', 'mi', 'csk', 'dc', 'rr'];

// console.log(teams.slice(2)); // remove array from the starting in new array
// console.log(teams)
// console.log(teams.slice(-1)) // it will remove the last element from the array

// /// splice() --> splices out a piece of an array. It changes the original array.
// // splice() --> it will add/ remove the element - it can add the element in between the array.

// teams.splice(2,0,'GT') // it will add the element in between the array
// console.log(teams)

// //concat(array1, array2) --> concat() method is used to merge two or more arrays. It creates a new array.

// const teams2 = ['India','Australia','England','New Zealand']

// console.log(teams.concat(teams2))// it will create the shalloy copy of the array.

///////////////////////////////////////////Reversing an Array

// function reverseString(str){
//   //Implement Your function here

//     let reversed = '';
//     reversed = str.split(``).reverse().join(``);
//     return reversed

//   }
//   console.log(reverseString("Hello"));
//   //Output : "olleH"
