export class Player {
  // Atributos
  private name: string;
  private user: string;
  private money: number;
  private ID: string;
  private birthDate: string;

  // Constructor
  constructor(name: string, user: string, money: number, ID: string, birthDate: string) {
    this.name = name;
    this.user = user;
    this.money = money;
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

  getMoney(): number {
    return this.money;
  }

  getID(): string {
    return this.ID;
  }

  getBirthDate(): string {
    return this.birthDate;
  }
  
  // Setters
  setName(name: string): void {
    this.name = name;
  }

  setUser(user: string): void {
    this.user = user;
  }

  setMoney(money: number): void {
    this.money = money;
  }

  setID(ID: string): void {
    this.ID = ID;
  }

  setBirthDate(birthDate: string): void {
    this.birthDate = birthDate;
  }

  // Métodos
  depositMoney(amount: number): void {
    if (amount > 0) {
      this.money += amount;
      console.log(`You entered $${amount}. New balance: $${this.money}`);
    } else {
      console.log("The amount must be greater than 0.");
    }
  }

  withdrawMoney(amount: number): void {
    if (amount > 0 && amount <= this.money) {
      this.money -= amount;
      console.log(`You withdrew $${amount}. Remaining balance: $${this.money}`);
    } else {
      console.log("Invalid amount or insufficient balance..");
    }
  }

  checkBalance(): void {
    console.log(`Available balance: $${this.money}`);
  }
}

// const jugador = new Jugador("Jeremías", "jereDev", 1000, "12345678", "20/08/2002");

// Probar los métodos
// jugador.consultarSaldo(); // Saldo disponible: $1000
// jugador.ingresarDinero(500); // Ingresaste $500. Nuevo saldo: $1500
// jugador.retirarDinero(300); // Retiraste $300. Saldo restante: $1200
// jugador.retirarDinero(2000); // Monto inválido o saldo insuficiente.

