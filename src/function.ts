// function

//  arrow function,  normal function

function add(num1:number, num2: number): number{
    return num1 + num2;
}

const add2 = (num1: number, num2: number): number => {
    return num1 + num2;
}

const poorUser = {
    name: "Md Akashuzzaman Riaz",
    balance: 100,

    addBalance(money: number): void{
        this.balance += money;
    }
}


// poorUser.addBalance(50);
// console.log(poorUser)

const number: number[] = [1, 2, 3, 4, 5];

const squareNumbers = number.map((element: number): number => element * element);

console.log(squareNumbers)