"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BlackJack_1 = require("./BlackJack");
function main() {
    console.log("Bienvenido al Blackjack!");
    var juego = new BlackJack_1.BlackJack();
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
