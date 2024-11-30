import { Carta } from "./Carta";

export class Crupier {
  private mano: Carta[] = [];

  public recibirMano(carta: Carta): void {
    this.mano.push(carta);
  }

  public mostrarMano(): Carta[] {
    return this.mano;
  }

  public calcularPuntos(): number {
    let puntos = 0;
    let ases = 0;

    for (let i = 0; i < this.mano.length; i++) {
      const carta = this.mano[i];
      puntos += carta.obtenerValorNumerico();
      if (carta.valor === "A") ases++;
    }

    for (let i = 0; i < ases && puntos > 21; i++) {
      puntos -= 10;
      ases--;
    }
    return puntos;
  }
  public debePedirCarta(): boolean {
    return this.calcularPuntos() < 17;
  }
}

/*
Primero creo un array mano en donde almaceno las cartas del crupier en un array vacio
luego el metodo mostraMano hace que el crupier reciba una carta y la agrega a su mano
luego mostrarMano devuelve la mano completa del crupier ejemplo al final de la partida
calcularPuntos 
primeri inicializo punto y ases en 0 y en el bucle for recorro cada carta en la mano
carta.obtenerValorNumerico() sumo el valor numerico de cada carta a puntos
si la carta.valor es A se incrementa el contador ases
el segundo for ajusta los puntos si hay ases y el puntaje supera 21
resta 10 a los puntos por cada as hace que su valor pase de 11 a 1
hasta que no queden ases o sea 21
debePedirCarta()
determina si el crupier debe pedir otra carta y es boolean pq si retorta true los puntos
totales del crupier son menores a 17 llamando a calcularPuntos para evaluar la puntuacion

*/
