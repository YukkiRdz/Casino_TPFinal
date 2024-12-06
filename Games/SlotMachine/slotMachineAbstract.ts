import { Player } from "../../Player";
import { Game } from "../../game";
import * as readlineSync from 'readline-sync';

export abstract class SlotMachine implements Game {
    protected symbols: string[];
    protected minBet: number = 2;
    protected gameName: string;

    constructor(
        symbols: string[],
        gameName: string
    ) {
        this.symbols = symbols;
        this.gameName = gameName;
    }
    
    // Método abstracto para definir combinaciones ganadoras.
    public abstract winningsCombinations(): { combination: string; winning: number }[];

    // Método que devuelve el nombre del juego.
    public getName(): string {
        return this.gameName;
    }

    // Método que simula una tirada de la máquina tragamonedas.
    public spin(): string {
        const result: string[] = [];
        for (let i = 0; i < 3; i++) {
            const randomSymbol = this.symbols[Math.floor(Math.random() * this.symbols.length)];
            result.push(randomSymbol);
        }
        return result.join(' ');
    }

     // Método que verifica si el resultado de la tirada coincide con alguna combinación ganadora.
    public checkWinnings(result: string, bet: number): string {
        const combinations = this.winningsCombinations();
        let winningMessage = 'You lost, good luck next time.';
        combinations.forEach(combo => {
            if (combo.combination === result) {
                winningMessage = `You won ${combo.winning * bet} dollars!`;

            }
        });
        return winningMessage;
    }

     // Método que permite al jugador jugar una ronda.
    public play(user: Player, bet: number): { result: string; message: string } {
        const userBalance = user.getMoney();
        if (bet < this.minBet) {
            return { result: '', message: 'Insufficient balance to play.' };
        }

        user.setMoney(userBalance - bet);

        const result = this.spin();
        const message = this.checkWinnings(result, bet);

        if (message.startsWith('You won')) {
            const winnings = parseInt(message.split(' ')[2]);
            user.setMoney(user.getMoney() + winnings);
        }

        return { result, message };
    }

    // Método que inicia el juego y muestra el resultado en la consola.
    public start(user: Player): void {
        const betAmount = readlineSync.questionInt('Enter your bet amount (The minimum bet is $2): ');

        if (betAmount >= this.minBet && betAmount <= user.getMoney()) {
            console.log(`You have placed a bet of $${betAmount}.`);
            const gameResult = this.play(user, betAmount);
            console.log(`Result: ${gameResult.result}`);
            console.log(gameResult.message);
            console.log(`Available balance: $${user.getMoney()}`);
        } else {
            console.log('Invalid bet amount. Please enter the minimum bet ($2).');
        }
        
    }

    // Implementación del método startGame de la interfaz Game.
    public startGame(): void {
        console.log(`${this.gameName} is starting!`);

    }

    // Implementación del método finishGame de la interfaz Game.
    public finishGame(): void {
        console.log(`${this.gameName} has finished!`);
    }
}