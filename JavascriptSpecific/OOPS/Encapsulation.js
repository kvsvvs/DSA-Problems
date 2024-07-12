class BankAccount {
  constructor(initialBalance = 0) {
    this._balance = initialBalance;
  }
  deposit(amount) {
    if (amount > 0) {
      this._balance += amount;
      console.log(`Deposited $${amount}. New balance is $${this._balance}.`);
    } else {
      console.log("Amount must be greater than zero");
    }
  }
  withdraw(amount) {
    if (amount < this._balance) {
      this._balance -= amount;
      console.log(`Withdrew $${amount}. New balance is $${this._balance}.`);
    } else {
      console.log("Insufficient funds.");
    }
  }
  getBalance() {
    console.log(`Current balance is $${this._balance}.`);
    return this._balance;
  }
}

let myAccount = new BankAccount(100); // Starting with an initial balance of $100
myAccount.deposit(50); // Deposits $50
myAccount.withdraw(30); // Withdraws $30
myAccount.getBalance(); // Should output the current balance: $120
