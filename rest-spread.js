//Q.1.Rest Operator with Arrays
const numbers= [21,22,23,24];
const [first, ...rest]=numbers;
console.log(first);
console.log(rest);

//Q.2.Rest Operator in Functions
function Arguments(...args) {
    return args.length;
}
console.log ("Total arguments:", Arguments(1,2,3,4));

//Q.3.Spread Operator with Arrays
const arrays1=[2,4,6];
const arrays2=[1,5,7];
const merged=[...arrays1, ...arrays2];
console.log(merged);

//Q.4. Copying an Array
const originalArray= [2,6,9];
let copiedArray=[...originalArray];
copiedArray.push (7);
console.log (originalArray);
console.log(copiedArray);

//Q.5. Spread Operator with Objects
let studentInfo = {
    name: "Ayumi",
    age: 20
};
let updatedStudentInfo = {
    ...studentInfo,
    Faculty: "CSIT"
};
console.log(updatedStudentInfo);
//Q.6. Updating Object Properties
const account = {
    id: 201,
    name: "Ayumi",
    age: 20
};
const modifiedAccount = {
    ...account,
    id: 305
};
console.log(modifiedAccount);
