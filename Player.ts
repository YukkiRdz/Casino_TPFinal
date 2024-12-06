export class Player {
  // Atributos
  private name: string;
  private user: string;
  private password: string;
  private money: number = 0;
  private ID: number;
  private birthDate: number[];

  // Constructor
  constructor(name: string, user: string, password: string, ID: number, birthDate: number[]) {
    this.name = name;
    this.user = user;
    this.password = password;
    this.ID = ID;
    this.birthDate = birthDate;
  }

  // Getters
  getName(): string {
    return this.name;
  }

  getUser(): string {
    return this.user;
  }

  getPassword(): string{
    return this.password;
  }

  getMoney(): number {
    return this.money;
  }

  getID(): number {
    return this.ID;
  }

  getBirthDate(): number[] {
    return this.birthDate;
  }
  
  // Setters
  setName(name: string): void {
    this.name = name;
  }

  setUser(user: string): void {
    this.user = user;
  }

  setPassword(password: string): void {
    this.password = password;
  }

  setMoney(money: number): void {
    this.money = money;
  }

  setID(ID: number): void {
    this.ID = ID;
  }

  setBirthDate(birthDate: number[]): void {
    this.birthDate = birthDate;
  }

  // Métodos
  public depositMoney(amount: number): void {
    if (amount > 0) {
      this.money += amount;
      console.log(`You entered $${amount}. New balance: $${this.money}`);
    } else {
      console.log("The amount must be greater than 0.");
    }
  }

  public withdrawMoney(amount: number): void {
    if (amount > 0 && amount <= this.money) {
      this.money -= amount;
      console.log(`You withdrew $${amount}. Remaining balance: $${this.money}`);
    } else {
      console.log("Invalid amount or insufficient balance..");
    }
  }

  public checkBalance(): void {
    console.log(`Available balance: $${this.money}`);
  }
}
