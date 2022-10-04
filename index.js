// Release 0
let student = {};
student.firstName = "Petr";
student.lastName = "Perviy";
student.firstName = "Petya";
delete student.firstName;
console.log(student);

// Release 1
let group = [];
group.push(student)

let student2 = {
  firstName: "Alex",
  lastName: "Ivanov",
}

let student3 = {
  firstName: "Olya",
  lastName: "Vasileva",
}
group.push(student2, student3)
console.log(group);