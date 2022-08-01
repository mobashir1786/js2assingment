// Find the maximum out of three numbers.
//     Take three numbers and print the largest number among them if all of three are same print −1.
//     Note: You have to complete Max_out_of_three. No need to take any input.

// simple method
let num1 = 5;
let num2 = 5;
let num3 = 5;
switch (true) {
    case (num1 > num2 && num1 > num3):
        console.log(num1);
        break;

    case (num2 > num1 && num2 > num3):
        console.log(num2);
        break;

    case (num3 > num1 && num2 < num3):
        console.log(num3);
        break;

    default:
        console.log(-1);
        break;
}

// with the help of function
const Max_out_of_three = (A, B, C) => {
    switch (true) {
        case (A > B && A > C):
            return A
            break;
        case (B > A && B > C):
            return B
            break;
        case (C > A && B < C):
            return C
            break;
        default:
            return -1
            break;
    }
};
console.log(Max_out_of_three(2, 3, 5));