// Some Exercise
// Instructions: Create an array of at least five numbers. 
// Write code to check if some of the numbers are even.

let numbers = [1, 2, 3, 4, 5];

const even = numbers.some(element => {
    if (element % 2 === 0) {
        return element;
    }
})

console.log(even)
