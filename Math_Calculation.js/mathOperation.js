function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}
function divide(num1, num2) {
    return num1 / num2;
}

module.exports = {
    add,
    subtract,
    multiply,
    divide
}

// it return anonymus function as object
// exports.add = (num1,num2) => num1 + num2;
// exports.subtract = (num1,num2) => num1 - num2;
// exports.multiply = (num1,num2) => num1 * num2;
// exports.divide = (num1,num2) => num1 / num2;