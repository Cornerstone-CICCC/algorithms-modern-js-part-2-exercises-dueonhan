// Every Exercise
// Instructions: Create an array of at least five numbers. Write code to check 
// if every number in the array is positive.

let ages = [19, 20, 27, 33, 40];

const checkAges = ages.every(element => {
    if (element >= 19) {
        return true;
    }
})

console.log(checkAges)
