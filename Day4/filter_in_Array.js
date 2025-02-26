let numbers=[1,2,3,4,5,6,7,8,9,10];
console.log("Array of even numbers");
let evenNumbers=numbers.filter((num)=>num%2===0);
console.log(evenNumbers);
console.log("Array of odd numbers");
let oddNumbers=numbers.filter((num)=>num%2!==0);
console.log(oddNumbers);

