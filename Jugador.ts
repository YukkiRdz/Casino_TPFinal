class Jugador {
  // Atributos
  private nombre: string;
  private usuario: string;
  private dinero: number;
  private dni: string;
  private fechaNacimiento: string;

  // Constructor
  constructor(
    nombre: string,
    usuario: string,
    dinero: number,
    dni: string,
    fechaNacimiento: string
  ) {
    this.nombre = nombre;
    this.usuario = usuario;
    this.dinero = dinero;
    this.dni = dni;
    this.fechaNacimiento = fechaNacimiento;
  }

  // Métodos
  ingresarDinero(monto: number): void {
    if (monto > 0) {
      this.dinero += monto;
      console.log(`Ingresaste $${monto}. Nuevo saldo: $${this.dinero}`);
    } else {
      console.log("El monto debe ser mayor a 0.");
    }
  }

  retirarDinero(monto: number): void {
    if (monto > 0 && monto <= this.dinero) {
      this.dinero -= monto;
      console.log(`Retiraste $${monto}. Saldo restante: $${this.dinero}`);
    } else {
      console.log("Monto inválido o saldo insuficiente.");
    }
  }

  consultarSaldo(): void {
    console.log(`Saldo disponible: $${this.dinero}`);
  }

  // Getters y Setters
  getNombre(): string {
    return this.nombre;
  }

  setNombre(nombre: string): void {
    this.nombre = nombre;
  }

  getUsuario(): string {
    return this.usuario;
  }

  setUsuario(usuario: string): void {
    this.usuario = usuario;
  }

  getDinero(): number {
    return this.dinero;
  }

  setDinero(dinero: number): void {
    this.dinero = dinero;
  }

  getDni(): string {
    return this.dni;
  }

  setDni(dni: string): void {
    this.dni = dni;
  }

  getFechaNacimiento(): string {
    return this.fechaNacimiento;
  }

  setFechaNacimiento(fechaNacimiento: string): void {
    this.fechaNacimiento = fechaNacimiento;
  }
}

// const jugador = new Jugador("Jeremías", "jereDev", 1000, "12345678", "20/08/2002");

// Probar los métodos
// jugador.consultarSaldo(); // Saldo disponible: $1000
// jugador.ingresarDinero(500); // Ingresaste $500. Nuevo saldo: $1500
// jugador.retirarDinero(300); // Retiraste $300. Saldo restante: $1200
// jugador.retirarDinero(2000); // Monto inválido o saldo insuficiente.

