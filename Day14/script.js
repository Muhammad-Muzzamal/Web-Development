let heading = document.querySelector("h1");
let grade = document.querySelector(".grade");
let detail = document.querySelector(".detail");
let marks = prompt("Enter the Marks:");
if (marks < 0 || marks > 100) {
  console.log("Please Enter the valid marks (0-100)");
} else if (marks > 80) {
  grade.innerHTML = "A";
  detail.innerHTML = "Congratulate you get the A grade";
} else if (marks > 70) {
  grade.innerHTML = "B";
  detail.innerHTML = "Congratulate you get the B grade";
} else if (marks > 60) {
  grade.innerHTML = "C";
  detail.innerHTML = "Your Grade is C. <br> best of luck for the next time ";
} else if (marks > 50) {
  grade.innerHTML = "D";
  detail.innerHTML =
    "Your Grade is D. <br>Work Hard <br> best of luck for the next time ";
} else {
  grade.innerHTML = "F";
  detail.innerHTML = 'Ops! You have Failed <br> Your grade is F';

}
