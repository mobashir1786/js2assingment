// Find Grades
//     Your school has the following grading system based upon the marks(M) obtained by a student:
//     .if M≤10, the grade will be E
//     .If 11≥M≤20, the grade will be D
//     .If 21≥M≤30, the grade will be C
//     .If 31≥M≤40, the grade will be B
//     .If 41≥M≤50, the grade will be A.
//     Your friend will enter his marks out of 50 , and your task is to print his grades using a switch statement.
//     Note: You have to complete findGrades function. No need to take any input.

// simple method
let marks=45;
switch(true){
    case (marks<=10):
      console.log("E")
      break;
        
    case (marks>10 && marks<=20):
        console.log("D")
      break;
        
    case (marks>20 && marks<=30):
        console.log("C");
      break;
        
    case (marks>30 && marks<=40):
        console.log("B");
      break;
        
    case (marks>40 && marks<=50):
        console.log("A");
      break;
    default:
        console.log("please enter the value in between 0 to 50");
    }

// with the help of function
const findGrades = (a) => {
    switch(true){
      case (a<=10):
        return ("E")
        break;
          
      case (a>10 && a<=20):
        return ("D")
        break;
          
      case (a>20 && a<=30):
        return ("C")
        break;
          
      case (a>30 && a<=40):
        return ("B")
        break;
          
      case (a>40 && a<=50):
        return ("A")
        break;
      default:
        return "please enter the value in between 0 to 50";
      }
  };
  console.log(findGrades(36));