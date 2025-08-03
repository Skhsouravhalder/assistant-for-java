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
