// HomeWork 15.05.22
// Task 1
// /**
//  * @typedef {{startYear: Number, grade: Number}} Course
//  * @typedef {{name: String, age: Number, learnEnglish: Course}} Student
//  *
//  * @param {Student[]} students
//  */
// function getSumGrades(students) {
// 	return students[0].learnEnglish.grade + students[students.length - 1].learnEnglish.grade
// }

// // Sample usage - do not modify
// let students = [
//   {
//     name: "Sam Doe",
//     age: 24,
//     learnEnglish: {
//       startYear: 2020,
//       grade: 18
//     }
//   },
//   {
//     name: "Charlie Bron",
//     age: 31,
//     learnEnglish: {
//       startYear: 2021,
//       grade: 19
//     }
//   }
// ];
// console.log(getSumGrades(students)); // 37

// Task 2
// /**
//  * @param {{firstName: String, lastName: String, age: Number}[]} users
//  */
// function getFullNames(users) {
// 	return `${users[0].firstName} ${users[0].lastName} ${users[users.length - 1].firstName} ${users[users.length - 1].lastName}`
// }

// // Sample usage - do not modify
// let users = [
//   {
//     firstName: "Sam",
//     lastName: "Blue",
//     age: 21,
//   },
//   {
//     firstName: "Charlie",
//     lastName: "Bon",
//     age: 38,
//   }
// ];
// console.log(getFullNames(users)); // [Sam Blue, Charlie Bon]