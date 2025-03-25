/*
function sayHi() {
  console.log("Hi.....");
}
sayHello = () => {
  console.log("Hello....");
};

//Callback function is the function that is used as a parameter in another function 

function add(num1, num2, callback) {
  console.log(num1 + num2);
  callback();
}
add(22, 33, sayHi);
add(22, 56, sayHello);
*/

let box = document.querySelector(".box");
let body=document.querySelector('body');

round=()=>{
  box.style.borderRadius="50%";
  box.style.backgroundColor='black';
  body.style.backgroundColor='gray';
  box.classList.add('animation');

  
}

console.log(")ne");
console.log("Two");
console.log("Three");

setTimeout(round, 2000);


// callback hell


