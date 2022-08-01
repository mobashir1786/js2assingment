// Eligible Voter
//     You are given an integer A, denoting the age of a person, and your task is to determine whether he/she is eligible to vote or not.
//     Note: You have to complete isEligible function. No need to take any input

// simple method
let age=56;
if(age>=18){
    console.log("Eligible for Voting");
  }
  else{
    console.log("Not Eligible for Voting");
  }

// with the help of function
const isEligible = (a) => {
    if(a>=18){
      return "Eligible for Voting";
    }
    else{
      return "Not Eligible for Voting"
    }
};
console.log(isEligible(17));