"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mazo = void 0;
var Carta_1 = require("./Carta");
var Mazo = /** @class */ (function () {
    function Mazo() {
        this.cartas = [];
        this.crearMazo();
    }
    Mazo.prototype.crearMazo = function () {
        var palos = ["Corazones", "Diamantes", "Treboles", "Picas"];
        var valores = [
            "A",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "J",
            "Q",
            "K",
        ];
        for (var i = 0; i < palos.length; i++) {
            for (var j = 0; j < valores.length; j++)
                this.cartas.push(new Carta_1.Carta(valores[j], palos[i]));
        }
    };
    Mazo.prototype.barajar = function () {
        var _a;
        for (var i = this.cartas.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            _a = [this.cartas[j], this.cartas[i]], this.cartas[i] = _a[0], this.cartas[j] = _a[1];
        }
    };
    Mazo.prototype.repartir = function () {
        return this.cartas.pop();
    };
    return Mazo;
}());
exports.Mazo = Mazo;
/*
importo la clase Carta pq la voy a necesitan para trabajar
el private cartas[] = []  almaceno las cartas en un array

luego en el constructor inicializo carta como un array vacio y llamo al metodo crearMazo() para llenar el mazo con todas
las cartas posibles 13 valores x 4 palos

luego en la funcion crearMazo declaro los palos y los valores en arreglos
luego uso el bucle for para recorrer todos los palos y valores y por cada
combinacion de palo y valor crea una carta y la agrega al array de cartas usando this.cartas.push

luego la funcion barajar recorre el array desde la ultima posicion hasta la primera
con el math.random genera un numero aleatorio entre 0 y 1 multiplica este numero por (i + 1)
con el math.floor redondea hacia abajo para convertir este numero decimal en un indice entero valido
luego el array ultimo intercambia las posiciones de las cartas en los indices i y j, toman los valores de su opuesto

luego el metodo repartir devuelve la ultima carta del array
el metodo pop() elimina y retorna el ultimo elemento del array simulando el reparto del crupier

*/
