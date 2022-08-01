// Check whether the triangle is Acute or Obtuse
//     Write a program takes takes three angles and checks whether the triangle is acute or obtuse.
//     Note: You have to complete Triangle_Check. No need to take any input

// simple method
let angle1=92;
let angle2=90;
let angle3=90;
if(angle1>90 || angle2>90 || angle3>90){
    console.log("obtuse");
  }
  else{
    console.log("acute");
  }

// with the help of function
const Triangle_Check = (A,B,C) => {
    if(A>90 || B>90 || C>90){
      return "obtuse";
    }
    else{
      return "acute";
    }
};
console.log(Triangle_Check(30, 90,90));