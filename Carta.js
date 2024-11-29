"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carta = void 0;
var Carta = /** @class */ (function () {
    function Carta(valor, palo) {
        this.valor = valor;
        this.palo = palo;
    }
    Carta.prototype.obtenerValorNumerico = function () {
        if (["J", "K", "Q"].includes(this.valor))
            return 10;
        if (this.valor === "A")
            return 11;
        return parseInt(this.valor);
    };
    Carta.prototype.toString = function () {
        return "".concat(this.valor, " de ").concat(this.palo);
    };
    return Carta;
}());
exports.Carta = Carta;
/*
El valor: string va a ser para los valores "A, 2, J, ETC" y palo: "Corazones, Picas, Etc"

Metodos obtenerValorNumerico
Es para comprobar si una carta es una figura, entonces digo si [J K Q].includes(this.valor) creo un array de las figuras JKQ y verifico
si el valor de la carta (this.valor) esta dentro del array.
El includes lo que hace es devolverme true si el valor esta presente y false si no.
si el valor es "J" "Q" "K" retorna 10, que es su valor en el juego luego
si this.valor === A me retorna 11 lo que hago es verificar si el valor de la carta es A que me retorne 11
return parseInt(this.valor) convierte el valor de la carta en un entero, si la carta no es una figura ni un as debe ser un numero del 2 al 10

ToString():
el tostring devuelve una representacion de texto de la carta */
