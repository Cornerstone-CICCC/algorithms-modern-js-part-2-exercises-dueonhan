// Find Exercise
// Instructions: Create an array of at least five numbers. Write code to find the first element that is greater than 10.

let numbers = [9, 2, 11, 20, 4];

const findNumber = numbers.find(index => {
    if (index > 10) {
        return index
    }
})

console.log("findNumber" + findNumber)