class BankAccount {
  readonly userId: number;
  userName: string;
  protected userBalance: number;

  constructor(userId: number, userName: string, userBalance: number) {
    this.userId = userId;
    this.userName = userName;
    this.userBalance = userBalance;
  }

  private addBalance(balance: number) {
    this.userBalance += balance;
  }

  addBalanceInsideHideMethod(balance: number) {
    this.addBalance(balance);
  }
}

class StudentBankAccount extends BankAccount {
  studentAddBalance(balance: number) {
    this.userBalance += balance;
  }
}

const akashBhaiAccount = new BankAccount(111, "Akash Bhai", 30);

akashBhaiAccount.addBalanceInsideHideMethod(10009)
console.log(akashBhaiAccount)
const studentBalanceAccount = new StudentBankAccount(111, "student", 3);
studentBalanceAccount.studentAddBalance(4);

// console.log(akashBhaiAccount);
