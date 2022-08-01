// // Check whether the condition is fulfilled or not?
// //     Write a program that takes a number and prints whether the number is divisible by 6 and 9 or not.
// //     Note: You have to complete Check_divisibility. No need to take any input

// simple method
let number = 90;
if (number % 6 === 0 && number % 9 === 0) {
    console.log("Divisible by both");
}
else {
    console.log("Not Divisible by both");
}

// with the help of function
const Check_divisibility = (N) => {
    if (N % 6 === 0 && N % 9 === 0) {
        return ("Divisible by both");
    }
    else {
        return ("Not Divisible by both");
    }
};
console.log(Check_divisibility(34))