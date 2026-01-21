// 1. ARRAY DESTRUCTURING
// Create an array of at least 5 numbers
const numberArray = [10, 20, 30, 40, 50];
const [firstNumber, secondNumber] = numberArray;
console.log( firstNumber);
console.log(secondNumber);

// 2. SKIPPING VALUES
const [first, , third] = numberArray;
console.log(first);
console.log(third);

//3.DEFAULT VALUES
const nums = [40];
const [x,y=35]=nums;
console.log(x);
console.log(y);

//4.OBJECT DESTRUCTING
const students={
    name:"Ayumi",
    age:20,
    city:"ktm"
};
const{name,age,city}=students;
console.log(name,age,city);

//Q.5. Renaming Variables
const {name: firstName, program: subjectprogram}= student;
console.log(firstName);

//Q.6. Nested Destructuring
const student={
    fullname:"Ayumi Khanal",
    marks: {
        Physics:55,
        Maths:50,
    },
practical:{
   Physics:35,
    Maths: 25,
},
};
const {fullname}= student;
const{
    practical:{Maths}
} = student;
console.log(fullname);
console.log(Maths);

//Q.7. Function Parameter Destructuring
function Student({ name, age }) {
  console.log("Name:", name);
  console.log("Age:", age);
}
Student(student);