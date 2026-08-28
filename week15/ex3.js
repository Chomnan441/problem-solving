function getPassedStudents(students) {
  //Start Coding Here
  const passedStudents = [];
  for (let i of students) {
    if (i.score >= 50) {
      passedStudents.push(i.name);
    }
  }
  return passedStudents;
}

let result1 = getPassedStudents([
  { name: "A", score: 80 },
  { name: "B", score: 45 },
  { name: "C", score: 60 },
]);
console.log(result1); // ["A", "C"]
