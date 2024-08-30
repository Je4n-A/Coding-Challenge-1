// Task 1: Variables and Data Types

let employeeName = "John Snow";
const employeeID = 213;
var isActive = true;

console.log(employeeName, typeof(employeeName));
console.log(employeeID, typeof(employeeID));
console.log(isActive, typeof(isActive));



//Task 2: Compound Data Types 

let products = ["Iphone", "Ipad", "Macbook"];
const productDetails = {
    name: products, 
    price: 1000.00,
    inStock: 50, 
}

console.log(products, typeof(products))
console.log(productDetails, typeof(productDetails))

//Task 3: Assignment Operators

let accountBalance = 2000.00;
console.log("Initial balance",accountBalance);

accountBalance += 50;
console.log("Updated balance:", accountBalance);

accountBalance -= 100;
console.log("Updated Balance", accountBalance);

accountBalance *= 20;
console.log("Updated balance", accountBalance);

accountBalance /= 3;
console.log("Updated Balance", accountBalance);

accountBalance %= 1;
console.log("Updated Balance", accountBalance);

//Task 4: Comparison Operators

let employeeScore1 = 100;
let employeeScore2 = 200;

console.log(employeeScore1 > employeeScore2)

console.log(employeeScore1 < employeeScore2)

console.log(employeeScore1 >= employeeScore2)

console.log(employeeScore1 <= employeeScore2)

console.log(employeeScore1 === employeeScore2)

console.log(employeeScore1 !== employeeScore2)

