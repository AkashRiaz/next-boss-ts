class BankAccount{
   readonly userId : number;
    userName: string;
   private _userBalance: number;

    constructor(userId: number, userName: string, userBalance: number){
        this.userId = userId;
        this.userName = userName;
        this._userBalance = userBalance;
    }

    // set balance
    //  addBalance(balance: number){
    //     this._userBalance = this._userBalance + balance;
    // }

    // setter

    set addBalance(amount: number){
         this._userBalance += amount;
    }

    // get balance

    // getBalance(){
    //     return this._userBalance;
    // }

    // getter

    get getBalance(){
       return this._userBalance
    }
}

const akashBhaiBank = new BankAccount(111, "Akash", 20);

akashBhaiBank.addBalance = 100;
akashBhaiBank.addBalance= 380;
// console.log(akashBhaiBank)

console.log(akashBhaiBank.getBalance)