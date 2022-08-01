// PrepBuddy wants you to get familiar with various Relational operators. He provides you with two integer values 
//     X and Y and asks you to find the relation between them.
//     The relationships between integers X and Y are as follows:
//     .If X<Y, it means that X is smaller than Y
//     .If X>Y, it means that X is greater than Y
//     .If X=Y, it means that X is equal to Y. 
//     Note: You have to complete findRelationship function. No need to take any input.

// simple method
let firstInteger = 18;
let secondInteger = 21;
if (firstInteger < secondInteger) {
    console.log(firstInteger + " is smaller than " + secondInteger)
}
else if (firstInteger > secondInteger) {
    console.log(firstInteger + " is greater than " + secondInteger)
}
else {
    console.log(firstInteger + " is equal to " + secondInteger)
}

// with the help of function
const findRelation = (x, y) => {
    if (x < y) {
        return (x + " is smaller than " + y)
    }
    else if (x > y) {
        return (x + " is greater than " + y)
    }
    else {
        return (x + " is equal to " + y)
    }
};
console.log(findRelation(21, 35))