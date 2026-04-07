// Abstraccion que define operiaciones comnunes para bancos

abstract class Account {
    constructor(protected balance: number) {}
    abstract canWithdraw(amount: number): boolean;
    getBalance(): number {
        return this.balance;
    }
    deposit(amount: number): void {
        this.balance += amount;
        console.log(`Deposited: $${amount}. Nuevo balance: $${this.balance}`);
    }
    
}
// cuenta que permite retiros

class CheckingAccount extends Account {
    constructor(balance: number) {
        super(balance);
    }
    canWithdraw(amount: number): boolean {
        return amount <= this.balance;
    }
    withdraw(amount: number): void {
        if (this.canWithdraw(amount)) {
            this.balance -= amount;
            console.log(`Retiro: $${amount}. Nuevo balance: $${this.balance}`);
        } else {
            console.log(`No se puede retirar $${amount}. Balance insuficiente.`);
        }
    }
}

// cuenta de ahorro que no permite retiros

class SavingsAccount extends Account {
    constructor(balance: number) {
        super(balance);
    }
    canWithdraw(amount: number): boolean {
        return false; // No se permiten retiros
    }
}

// ahora funciona con cualquier tipo de cuenta

function processTransaction(account: Account, amount: number): void {
    if (account.canWithdraw(amount)) {
        if(account instanceof CheckingAccount) {
            account.withdraw(amount);
        }   
    }else {
        console.log("No se pueden retirar fondos de esta cuenta.");
    }
}

const checkingAccount = new CheckingAccount(1000);
const savingsAccount = new SavingsAccount(500);

processTransaction(checkingAccount, 200); // Deposited: $200. Nuevo balance: $1200. Retiro: $200. Nuevo balance: $1000
processTransaction(savingsAccount, 200);  // Deposited: $200. Nuevo balance: $700. No se pueden retirar fondos de esta cuenta.