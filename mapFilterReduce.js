// Map Function
let arr = [1, 2, 3, 4, 5, 6];
let mapped = arr.map((item) => {
    return item * 10
})

console.log(mapped)
// [ 10, 20, 30, 40, 50, 60 ]

// Filter Function
let users = [
    {
        name: "karthick",
        mobileNo: "9988934454"
    },
    {
        name: "John",
        mobileNo: "9443503532"
    },
    {
        name: "Vijay",
        mobileNo: "9843503532"
    }
]

let filterArray = users.filter((item) => {
    return item.name !== 'karthick'
})

console.log("filterArray", filterArray)
/**
    filterArray [
        { name: 'John', mobileNo: '9443503532' },
        { name: 'Vijay', mobileNo: '9843503532' }
    ]
*/

// Reduce Function
let numbersArray = [1, 2, 3, 8, 34, 23, 9, 12];
let initialValue = 10;

let sum = numbersArray.reduce((previousValue, currentValue) => {
    console.log("previousValue---->", previousValue, "currentValue---->", currentValue)
    return previousValue + currentValue
}, initialValue);

console.log("sum", sum);

/**
    previousValue----> 0 currentValue----> 1
    previousValue----> 1 currentValue----> 2
    previousValue----> 3 currentValue----> 3
    previousValue----> 6 currentValue----> 8
    previousValue----> 14 currentValue----> 34
    previousValue----> 48 currentValue----> 23
    previousValue----> 71 currentValue----> 9
    previousValue----> 80 currentValue----> 12

    sum 92
 */