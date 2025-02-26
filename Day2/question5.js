let age = 20;
if (age < 0) {
  console.log("Enter the valid Age!");
} else if (age >= 0 && age <= 12) {
  console.log("Child");
} else if (age >= 13 && age <= 19) {
  console.log("Teenager");
} else if (age >= 20 && age <= 59) {
  console.log("Adult");
} else {
  console.log("Senior");
}
