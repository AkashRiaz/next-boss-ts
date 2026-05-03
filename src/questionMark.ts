//  ? : ternary operator : decision making operator
// ?? : nullish coalescing operator 
//  ?. : optional chaining operator

const biyerJonnoEligible = (age: number) =>{
    return age >= 18 ? "Biyer jonno eligible" : "Biyer jonno eligible na";
}


const result = biyerJonnoEligible(20);

// console.log(result);

const userTheme = "Dark Theme";

const selectedTheme = userTheme ?? "Light Theme";

console.log(selectedTheme);