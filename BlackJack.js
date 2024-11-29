"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlackJack = void 0;
var Mazo_1 = require("./Mazo");
var Crupier_1 = require("./Crupier");
var BlackJack = /** @class */ (function () {
    function BlackJack() {
        this.jugadorMano = [];
        this.mazo = new Mazo_1.Mazo();
        this.mazo.barajar();
        this.crupier = new Crupier_1.Crupier();
    }
    BlackJack.prototype.iniciarJuego = function () {
        console.log("Nueva partida de BlackJack");
        var carta1 = this.mazo.repartir();
        var carta2 = this.mazo.repartir();
        if (carta1)
            this.jugadorMano.push(carta1);
        if (carta2)
            this.jugadorMano.push(carta2);
        var cartaCrupier1 = this.mazo.repartir();
        var cartaCrupier2 = this.mazo.repartir();
        if (cartaCrupier1)
            this.crupier.recibirMano(cartaCrupier1);
        if (cartaCrupier2)
            this.crupier.recibirMano(cartaCrupier2);
        console.log("Tu mano:", this.jugadorMano);
        console.log("Carta visible del crupier:", this.crupier.mostrarMano()[0]);
    };
    BlackJack.prototype.turnoJugador = function () {
        while (true) {
            var puntos = this.calcularPuntos(this.jugadorMano);
            console.log("Tus puntos:", puntos);
            if (puntos > 21) {
                console.log("Te pasaste de 21, perdiste.");
                return;
            }
            var decision = prompt("¿Quieres pedir otra carta? (s/n)") || "";
            if (decision.toLowerCase() !== "s") {
                break;
            }
            var nuevaCarta = this.mazo.repartir();
            if (nuevaCarta) {
                this.jugadorMano.push(nuevaCarta);
                console.log("Tu mano:", this.jugadorMano);
            }
            else {
                console.log("No quedan cartas en el mazo.");
                break;
            }
        }
    };
    BlackJack.prototype.turnoCrupier = function () {
        console.log("Turno del crupier");
        while (this.crupier.debePedirCarta()) {
            var nuevaCarta = this.mazo.repartir();
            if (nuevaCarta) {
                this.crupier.recibirMano(nuevaCarta);
                console.log("Mano del crupier:", this.crupier.mostrarMano());
            }
            else {
                console.log("No quedan cartas en el mazo.");
                break;
            }
        }
    };
    BlackJack.prototype.determinarGanador = function () {
        var puntosJugador = this.calcularPuntos(this.jugadorMano);
        var puntosCrupier = this.crupier.calcularPuntos();
        if (puntosJugador > 21) {
            console.log("¡Perdiste! Te pasaste de 21.");
        }
        else if (puntosCrupier > 21 || puntosJugador > puntosCrupier) {
            console.log("¡Ganaste! 🎉");
        }
        else if (puntosJugador < puntosCrupier) {
            console.log("Perdiste. El crupier tiene más puntos.");
        }
        else {
            console.log("Es un empate.");
        }
    };
    BlackJack.prototype.calcularPuntos = function (mano) {
        var puntos = 0;
        var ases = 0;
        for (var _i = 0, mano_1 = mano; _i < mano_1.length; _i++) {
            var carta = mano_1[_i];
            puntos += carta.obtenerValorNumerico();
            if (carta.valor === "A")
                ases++;
        }
        while (puntos > 21 && ases > 0) {
            puntos -= 10;
            ases--;
        }
        return puntos;
    };
    return BlackJack;
}());
exports.BlackJack = BlackJack;
