// Calculator
//     Write a program to make a simple calculator using switch statement that takes operator 
//     and two numbers from user and print the result after operation.
//     Note: You have to complete Calculator. No need to take any input

// simple method
let operator = "+";
let firstNumber = 41;
let secondNumber = 53;
let result1;
switch (operator) {
    case "+":
        result1 = firstNumber + secondNumber;
        console.log(result1);
        break;
    case "-":
        result1 = firstNumber - secondNumber;
        console.log(result1);
        break;
    case "*":
        result1 = firstNumber * secondNumber;
        console.log(result1);
        break;
    case "/":
        result1 = firstNumber / secondNumber;
        console.log(result1);
        break;

    default:
        console.log("given input is not correct");
        break;
}

// with the help of function
const Calculator = (A, B, C) => {
    let result;
    switch (A) {
        case "+":
            result = B + C;
            return result;
        case "-":
            result = B - C;
            return result;
        case "*":
            result = B * C;
            return result;
        case "/":
            result = B / C;
            return result;
    }
};
console.log(Calculator("*",2,25));