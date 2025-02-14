const { students } = require('../datasets/students');

// To run the code you've written in this file, use node prototypes/problem-sets/students.js

console.log('Running students.js')

/* Students Prompts*/

/*
Level 1

Code: 
  Write a function called "findEnrolledStudents" that returns the name of all students who are enrolled.

Invoke: 
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(findEnrolledStudents())
    should print -->      
      ["John", "Bob", "Eve"]

Annotate:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible. 
*/

function findEnrolledStudents() {
  let enrolledStudenNames = students.filter((student) => {
    return student.enrolled
  })
  return enrolledStudenNames.map((student) => {
    return student.name
  })
}

// console.log(findEnrolledStudents())

/*
Level 2

Code: 
  Write a function called "getAverageGrade" that takes in a student's name and returns that student's average grade.

Invoke:
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(getAverageGrade("John"))
    should print -->  86.25

e.g.
  console.log(getAverageGrade("Bob"))
    should print -->  84.5

Annotation:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible. 
*/

function getAverageGrade(studentName) {
  let target = students.filter((student) => {
    return student.name === studentName
  })[0]

  return target.grades.reduce((acc, score) => {
    return acc + score
  }, 0) / target.grades.length
}

// console.log(getAverageGrade("Bob"))

/*
Level 3

Code: 
  Write a function called "findBestAverageGrade" that returns the name of the student with the highest average grade.

Invoke:
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(findBestAverageGrade())
    should print -->  "Eve"

Annotation:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible. 
*/

function findBestAverageGrade() {
  let cleanedStudents = students.map((student) => {
    return {
      "name": student.name,
      "averageGrade": student.grades.reduce((acc, score) => {
        return acc + score
      }, 0) / student.grades.length
    }
  })

  return cleanedStudents.reduce((acc, student) => {
    if (!acc || student.averageGrade > acc.averageGrade) {
      acc = student
    }
    return acc
  }, undefined).name
}

// console.log(findBestAverageGrade())

/*
Level 4

Test:
  * Uncomment the module.exports below.
  * Unskip the students prompts tests in your prototype-test.js file.
  * Run `npm test` to confirm that all your functions are passing their tests.
  * Refactor as needed until all students tests are passing

Annotation:
  If your tests did not immediately pass, take notes on what details you missed while building and checking your solutions. 
  Take notes on the error messages that led you to fixing those details. 
*/


module.exports = {
  findEnrolledStudents,
  getAverageGrade,
  findBestAverageGrade
};
