import { Jugador } from "./jugador";

export abstract class SlotMachine {
    protected symbols: string[];
    protected minBet: number = 1;
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
    public checkWinnings(result: string): string {
        const combinations = this.winningsCombinations();
        let winningMessage = 'You lost, good luck next time.';
        combinations.forEach(combo => {
            if (combo.combination === result) {
                winningMessage = `You won ${combo.winning} dollars!`;
            }
        });
        return winningMessage;
    }

     // Método que permite al jugador jugar una ronda.
    public play(user: Jugador): { result: string; message: string } {
        const userBalance = user.getDinero();
        if (userBalance < this.minBet) {
            return { result: '', message: 'Insufficient balance to play.' };
        }

        user.setDinero(userBalance - this.minBet);

        const result = this.spin();
        const message = this.checkWinnings(result);

        if (message.startsWith('You won')) {
            const winnings = parseInt(message.split(' ')[2]);
            user.setDinero(user.getDinero() + winnings);
        }

        return { result, message };
    }

    // Método que inicia el juego y muestra el resultado en la consola.
    public start(user: Jugador): void {
        const gameResult = this.play(user);
        console.log(`Result: ${gameResult.result}`);
        console.log(gameResult.message);
    }
}