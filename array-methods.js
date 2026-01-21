//Q.1.  slice()
let scoreList = [10, 20, 30, 40];

let partOfScores = scoreList.slice(1, 3);

console.log("Original:", scoreList);
console.log("Sliced:", partOfScores);

//Q.2. concat()
const firstSet = [1, 2];
const secondSet = [3, 4];
const mergedSet = firstSet.concat(secondSet);
console.log("Value of A: ", firstSet);
console.log("Value of B:", secondSet);
console.log("Combined values:", mergedSet);


//Q.3. join()
const animals = ["dog", "cow", "horse"];
console.log(animals.join("-"));
console.log(animals.join("|"));

//Q.4. includes()
const studentNames = ["Aisha", "Deepa", "Rita"];
if (studentNames.includes("Deepa")) {
    console.log("Deepa is present");

} else {
    console.log("Deepa is not present");
}

//Q.5. flat()
const mixedArrays = [5, [15, 25], [35, [45, 55]]];
console.log(mixedArrays.flat(1));
console.log(mixedArrays.flat(2));


//Q.6. Combining Methods
const baseArray = [100, 200, 300, 400];
const finalArray = baseArray.slice(0, 2).concat(baseArray.slice(3));
console.log("Original :", baseArray);
console.log("New:", finalArray);
