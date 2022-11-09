// Task 1
const stringLength = (str) => {
    if (str.length > 1 && str.length < 10) {
        return str.length
    } else {
        return 'String must be less than 10 and greater than 1'
    }
    
}

// Task 2
const reverseString = (str) => {
    return str.split('').reverse().join('')
}

// Task 3
class Calculator {
    static add = (x, y) => {
        return x + y
    }

    static subtract = (x, y) => {
        return x - y
    }

    static divide = (x, y) => {
        return x / y
    } 

    static multiply = (x, y) => {
        return x * y
    }
}

// Task 4
const capitalize = (str) => {
    return str.slice(0, 1).toUpperCase() + str.slice(1)
}


module.exports = {stringLength, reverseString, Calculator, capitalize}