export abstract class SlotMachine {
    protected symbols: string[];
    protected minBet: number = 1;

    constructor(symbols: string[]) {
        this.symbols = symbols;
    }
    public abstract winningsCombinations(): { combination: string; winning: number }[];

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
    
        // Método que ejecuta una jugada completa: realiza una tirada y verifica las ganancias.
        public play(user: Player): { result: string; message: string } {
            const userBalance = user.getMoney();
            if (userBalance < this.minBet) {
                return { result: '', message: 'Insufficient balance to play.' };
            } //verifica el saldo del usuario
    
           user.setMoney(userBalance - this.minBet); //si el saldo es suficiente se resta.
    
           //ejecución del juego
            const result = this.spin();
            const message = this.checkWinnings(result);
    
            //actualización del saldo en caso de ganancia.
            if (message.startsWith('You won')) {
                const winnings = parseInt(message.split(' ')[2]);
                user.setMoney(user.getMoney() + winnings);
            }
    
            return { result, message };
        }
       
            // Método que inicia el juego, englobando todos los métodos necesarios.
            public start(user: Player): void {
                const gameResult = this.play(user);
                console.log(`Result: ${gameResult.result}`);
                console.log(gameResult.message);
            }
        }
    
    
    
