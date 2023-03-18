// Qn1 Find the last element of the following arrays.
// arr1 = [3,7,34,90,12]
// arr2 = [true, "green", "where",12,56]

let arr1 = [3,7,34,90,12];
console.log(arr1.slice(-1))
let arr2 = [true, "green", "where",12,56]
console.log(arr2.slice(-1))

// console.log(arr1);
// console.log(arr2);
// arr1.slice(-1);
// arr2.pop(-1)


//Write a JS program that will join the following array elements into a string
let myPets = ["Cow", "Python", "Snake", "Dog"];
console.log(myPets.join(` `));

//Write a JS script to sort the following array items
var arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
let sortedArr = arr3.sort();
console.log(sortedArr);

//Write a program to remove duplicates from the following array.
//Console the array without duplicates, and console another array that only contains the duplicates
let arr = ["apple", "mango", "apple",
            "orange", "mango", "mango"];
             console.log(...new Set(arr));

// Write a JS script to search for the following word in the array.
//If the word is present, console it else console "the search word was not found"
let arr5 = ["the", "way", "x", 4, 23];
console.log(arr5.includes(4))
//Write a JS script to sort the following string
let word = ["lufituaeb"].sort();
console.log(word);
