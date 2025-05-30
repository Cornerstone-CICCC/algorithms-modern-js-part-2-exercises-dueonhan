// Sort Exercise
// Instructions: Create an array of at least five numbers in random order. 
// Write the code to sort this array in ascending order.


let numbers = [1, 4, 3, 5, 2, 47, 34, 23]
//console.log(numbers.sort())
// const number = numbers.forEach(number => {
//     console.log(number)
// })

// const numberSort = numbers.filter



const sortNumber = function (a, b) {
    if (a > b) {
        return 1
    } else if (a < b) {
        return -1
    }
}

//console.log(numbers)
console.log(numbers.sort(sortNumber))
