// Second Smallest
//     You are given 3 distinct integers X,Y, and Z, and your task is to find and return the second smallest integer among the three provided integers.
//     Note: You have to complete findSndSmallest function. No need to take any input.

// simple method
const a = 2;
const b = 15;
const c = 9;
if ((a > b) && (a > c)) {
    if (b > c)
        console.log(b);
    else
        console.log(c);
}

else if ((b > a) && (b > c)) {
    if (a > c)
        console.log(a);
    else
        console.log(c);
}

else if ((c > a) && (c > b)) {
    if (a > c)
        console.log(a);
    else
        console.log(b);
}

// with the help of function
const findSndSmallest = (x, y, z) => {
    if ((x > y) && (x > z)) {
        if (y > z)
            return y;
        else
            return z;
    }

    else if ((y > x) && (y > z)) {
        if (x > z)
            return x;
        else
            return z;
    }

    else if ((z > x) && (z > y)) {
        if (x > y)
            return x;
        else
            return y;
    }
};
console.log(findSndSmallest(3, 25, 12));