export abstract class SlotMachine {
    protected symbols: string[];

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
    public play(): { result: string; message: string } {
        const result = this.spin();
        const message = this.checkWinnings(result);
        return { result, message };
    }
}
