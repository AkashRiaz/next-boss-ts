class BankAccount {
  readonly userId: number;
  userName: string;
   protected userBalance: number;

  constructor(userId: number, userName: string, userBalance: number) {
    this.userId = userId;
    this.userName = userName;
    this.userBalance = userBalance;
  }

  addBalance(balance: number) {
    this.userBalance += balance;
  }
}


class StudentBankAccount extends BankAccount{
    studentAddBalance(balance: number){
        this.userBalance += balance 
    }
}

const akashBhaiAccount = new BankAccount(111, "Akash Bhai", 30);

const studentBalanceAccount = new StudentBankAccount(111, "student", 3);
studentBalanceAccount.studentAddBalance(4)

console.log(studentBalanceAccount)

akashBhaiAccount.addBalance(30)

// console.log(akashBhaiAccount);
