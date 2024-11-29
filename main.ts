import { BlackJack } from "./BlackJack";

function main(): void {
  console.log("Bienvenido al Blackjack!");

  const juego = new BlackJack();

  // Inicia el juego y reparte las cartas iniciales
  juego.iniciarJuego();

  // Turno del jugador
  juego.turnoJugador();

  // Turno del crupier (si el jugador no pierde en su turno)
  juego.turnoCrupier();

  // Determina al ganador
  juego.determinarGanador();
}

main();
