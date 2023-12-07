// const Students = ["Tin", "raj", "mohan"];

// for (let i = 0; i < Students.length; i++) {
//   console.log(`Roll ${i + 1} is ${Students[i]}`);
// }

//Complete the deleteOccur function
//Do not alter the starter Code.
// let arr = [23, 56, 4, 78, 5, 63, 45, 210, 56, 56];
// let ele = 56;

// function deleteOccur(arr, ele) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == ele) {
//       arr.splice(i, 1); //Delete element from array --------------------------->IMPORTANT
//       i--;
//     }
//   }
//   return arr;
// }

// console.log(deleteOccur(arr, ele));
// //Output: [23,4,78,5,63,45,210];

//----------------------------> for in loop

// const Students = ["Tin", "raj", "mohan"];

// for (let i in Students) {
//   console.log(`Roll ${Number(i) + 1} is ${Students[i]}`);
// }

// //------------------------------------> For of Loop

// for (let student of Students) {
//   // -------------------> here student is the original element in the array not the index number
//   console.log(student);
// }

////////////////////////////-------------------------->>>>>> DUPLICATE ARRAY

///////////////////////////////DDDDDDDDDDDDDDDDDDDDDDDDDDuplicate Array Elements

// let arr = [4, 2, 34, 4, 1, 12, 1, 4];

// function findDuplicate(arr) {
//   var arrDup = [];
//   for (var i in arr) {
//     if (arr.indexOf(arr[i]) != i && arrDup.indexOf(arr[i]) == -1) {
//       arrDup.push(arr[i]);
//     }
//   }

//   return arrDup;
// }

/////////////////////BREAK AND CONTINUE

// const inputs = [11, 32, 12, 45, 65, 94, 123, 3, 4, 5, 53, 23, 4, 5]; //--> need first five even numbers

// const evenNumbers = [];
// for (let i of inputs) {
//   if (i % 2 !== 0) {
//     continue;
//   }
//   evenNumbers.push(i);
//   if (evenNumbers.length === 3) {
//     break;
//   }
// }

// console.log(evenNumbers);

///////////////////Rest opearator

// Rest is represented by ...

const batch1 = ["pp", "ebf"];
const batch2 = ["pp", "ebf"];

const batch3 = ["pp", "ebf"];

function Add(batch, ...students) {
  /// ... --> it can take any number of input ES6 concept
  for (let i of students) {
    batch.push(i);
  }
  console.log(batch);
}

Add(batch1, "jsbjn", "jjsk", "hkdn");

/// spread operator symbol --> ...

const newBatch1 = batch1;
const newBatch2 = [...batch1];
console.log("newBatch1 " + newBatch1);
console.log("newBatch2 " + newBatch2);

batch1.push("kah");
console.log("batch1 " + batch1);
console.log("newBatch1 " + newBatch1);
console.log("newBatch2 " + newBatch2); // --> this will create the shollow copy of the array

// spread operator will concatinate also

const mergedBatch = [...batch2, ...batch3];
console.log(mergedBatch);

/// set operator ES6
