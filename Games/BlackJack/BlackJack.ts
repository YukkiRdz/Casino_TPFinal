import { Carta } from "./Carta";
import { Mazo } from "./Mazo";
import { Crupier } from "./Crupier";
import * as rls from "readline";

export class BlackJack {
  private mazo: Mazo;
  private crupier: Crupier;
  private jugadorMano: Carta[] = [];

  constructor() {
    this.mazo = new Mazo();
    this.mazo.barajar();
    this.crupier = new Crupier();
  }

  public iniciarJuego(): void {
    console.log("Nueva partida de BlackJack");

    const carta1 = this.mazo.repartir();
    const carta2 = this.mazo.repartir();
    if (carta1) this.jugadorMano.push(carta1);
    if (carta2) this.jugadorMano.push(carta2);

    const cartaCrupier1 = this.mazo.repartir();
    const cartaCrupier2 = this.mazo.repartir();
    if (cartaCrupier1) this.crupier.recibirMano(cartaCrupier1);
    if (cartaCrupier2) this.crupier.recibirMano(cartaCrupier2);

    console.log("Tu mano:", this.jugadorMano);
    console.log("Carta visible del crupier:", this.crupier.mostrarMano()[0]);
  }

  public turnoJugador(): void {
    while (true) {
      const puntos = this.calcularPuntos(this.jugadorMano);
      console.log("Tus puntos:", puntos);

      if (puntos > 21) {
        console.log("Te pasaste de 21, perdiste.");
        return;
      }

      const decision = rls.question("¿Quieres pedir otra carta? (s/n): ");
      if (decision.toLowerCase() !== "s") {
        break;
      }

      const nuevaCarta = this.mazo.repartir();
      if (nuevaCarta) {
        this.jugadorMano.push(nuevaCarta);
        console.log("Tu mano:", this.jugadorMano);
      } else {
        console.log("No quedan cartas en el mazo.");
        break;
      }
    }
  }

  public turnoCrupier(): void {
    console.log("Turno del crupier");
    while (this.crupier.debePedirCarta()) {
      const nuevaCarta = this.mazo.repartir();
      if (nuevaCarta) {
        this.crupier.recibirMano(nuevaCarta);
        console.log("Mano del crupier:", this.crupier.mostrarMano());
      } else {
        console.log("No quedan cartas en el mazo.");
        break;
      }
    }
  }

  public determinarGanador(): void {
    const puntosJugador = this.calcularPuntos(this.jugadorMano);
    const puntosCrupier = this.crupier.calcularPuntos();

    if (puntosJugador > 21) {
      console.log("¡Perdiste! Te pasaste de 21.");
    } else if (puntosCrupier > 21 || puntosJugador > puntosCrupier) {
      console.log("¡Ganaste! 🎉");
    } else if (puntosJugador < puntosCrupier) {
      console.log("Perdiste. El crupier tiene más puntos.");
    } else {
      console.log("Es un empate.");
    }
  }

  private calcularPuntos(mano: Carta[]): number {
    let puntos = 0;
    let ases = 0;

    for (const carta of mano) {
      puntos += carta.obtenerValorNumerico();
      if (carta.valor === "A") ases++;
    }

    while (puntos > 21 && ases > 0) {
      puntos -= 10;
      ases--;
    }

    return puntos;
  }
}
