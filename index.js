console.log("hello");

const arr = [1, 2, 3];
//get and edit individual items in array
console.log(arr[1]);
//check if item is in an array
console.log(arr.includes(3)); //true
console.log(arr.includes(4)); //false
console.log(arr.indexOf(1)); //1
console.log(arr.lastIndexOf(3)); //from right to left
//adding elements to array
arr.push(4); // push for the end and unshift for the beginning
console.log(arr);
//removing from an array
arr.pop(4);
console.log(arr);
//check the type of array
console.log(Array.isArray(arr)); //true
console.log(arr instanceof Array); //true
//Deleting and replacing elements
arr.splice(1, 2);
console.log(arr);
arr.push(2, 3, 4);
//iterating through array

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

//for of
for (const value of arr) {
  console.log(value);
}
//buit in array functions
arr.forEach(function (value) {
  value++;
  console.log(value);
});
arr.forEach((v) => console.log((v *= 5)));
//map
const arr1 = [100, 200, 300, 400];
const mappedArray = arr1.map(
  function (value1, index) {
    return value1 + index + this.num;
  },
  { num: 10 }
);
console.log(mappedArray);
