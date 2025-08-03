/** Problem -01 ( Divide the Asset ) */
var area = 2060;
//write your code here
var result = area / 2;
console.log(result);

/** Problem -02 ( Cycle or Laptop ) */
var money = 9999;
//write your code here
if (money >= 25000) {
  console.log(" Laptop");
} else if (money >= 10000) {
  console.log(" Cycle");
} else if (money < 10000) {
  console.log(" Chocolate");
}

/** Problem -03 ( Medicine Planner ) */
var lastDay = 11;
//write your code here
for (i = 1; i <= 11; i++) {
  if (i % 3 === 0) {
    console.log(i + " -" + " " + "medicine");
  } else {
    console.log(i + " -" + " " + "rest");
  }
}

/** Problem 04 - (Delete / Store) */
var fileName = "data.docx";
//write your code here
if (
  fileName.includes(".pdf") ||
  fileName.includes(".docx") ||
  fileName.includes("#")
) {
  console.log("Store");
} else {
  console.log("Delete");
}

/** Problem 05 - ( PH Email Generator )  */
var student = { name: "jhanku", roll: 1014, department: "cse" };
//write your code here
console.log(
  student.name + student.roll + "." + student.department + "@ph.ac.bd"
);
