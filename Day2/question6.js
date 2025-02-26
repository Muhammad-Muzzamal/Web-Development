let obtainMarks = 89;
let totalMarks = 100;
let perc;
perc = (obtainMarks * 100) / totalMarks;

if (perc >= 90) {
  console.log("Grade A");
} else if (perc > 80) {
  console.log("Grade B");
} else if (perc > 70) {
  console.log("Grade C");
} else if (perc > 60) {
  console.log("Grade D");
} else if (perc < 60) {
  console.log("Grade F");
}
