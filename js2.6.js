// Get Value
//     You are provided with a table containing some characters and their corresponding values. 
//     Your task will be to find the value from the table corresponding to an input character and return it.

//     | P or p 	- PrepBytes      	|
//     | Z or z 	- Zenith         	|
//     | E or e 	- Expert Coder   	|
//     | D or d 	- Data Structure 	|

//     Note: You have to complete getValue function. No need to take any input.

// simple method
let value="p";
switch (true) {
    case (value == "p" || value == "P"):
        console.log("PrepBytes");
        break;

    case (value == "z" || value == "Z"):
        console.log("Zenith");
        break;

    case (value == "e" || value == "E"):
        console.log("Expert Coder");
        break;

    case (value == "d" || value == "D"):
        console.log("Data Structure");
        break;

    default:
        console.log("Invalid");
        break;
}

// with the help of function
const getValue = (a) => {
    switch (true) {
        case (a == "p" || a == "P"):
            return "PrepBytes"
            break;

        case (a == "z" || a == "Z"):
            return "Zenith"
            break;

        case (a == "e" || a == "E"):
            return "Expert Coder"

        case (a == "d" || a == "D"):
            return "Data Structure"
            break;

        default:
            return "Invalid"
            break;
    }
};
console.log(getValue("e"));