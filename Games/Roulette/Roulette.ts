import { Game } from "../../game";
import { Player } from "../../Player";
import * as readlineSync from 'readline-sync';

export class Roulette implements Game {

    private greenZero: number = 0;
    private redNumbers: number[] = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35];
    private blackNumbers: number[] = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36];
    private bets: { player: Player, amount: number, number: number }[] = [];


    startGame(): void {
        console.log(`-----------------------------------\nThe roulette is spinning...\n-----------------------------------`);
    }

    finishGame(): void {
        console.log(`-----------------------------------\nThe roulette has ended\n-----------------------------------`);
    }

    public betMoney(player: Player): void {
        const minBet: number = 1;
        let amount: number = readlineSync.questionInt('Enter your bet amount: ');
        let number: number = readlineSync.questionInt('Enter your bet number (0-36): ');

        if (player.getMoney() < amount) {
            console.log(`${player.getName()} does not have enough money to place this bet.`);
            return;
        } else if (amount < minBet) {
            console.log('You have to bet at least $1.');
        } else if (number < 0 || number > 36) {
            console.log(`You must bet a number from 0 to 36`);
            return;
        } else {
            this.play();
            this.bets.push({ player, amount, number });
            console.log(`${player.getName()} has placed a bet of ${amount} on ${number}`);
        }
    }

    public spinRoulette(): number {
        const allNumbers = this.blackNumbers.concat(this.redNumbers, this.greenZero);
        const randomIndex = Math.floor(Math.random() * allNumbers.length);
        return allNumbers[randomIndex];
    }

    public play(): void {
        this.startGame();
        const winnerNumber = this.spinRoulette();
        console.log(`THE WINNER NUMBER IS: ${winnerNumber}`);

        const winningPlayersExact = this.bets.filter(bet => bet.number === winnerNumber);
        const winningPlayersColor = this.bets.filter(bet =>
            (this.redNumbers.includes(bet.number) && this.redNumbers.includes(winnerNumber)) ||
            (this.blackNumbers.includes(bet.number) && this.blackNumbers.includes(winnerNumber)) ||
            (bet.number === this.greenZero && winnerNumber === this.greenZero)
        );

        if (this.redNumbers.includes(winnerNumber)) {
            console.log(`-----------------------------------\n¡Those who bet on red win!\n-----------------------------------`);
        } else if (this.blackNumbers.includes(winnerNumber)) {
            console.log(`-----------------------------------\n¡Those who bet on black win!\n-----------------------------------`);
        } else {
            console.log(`-----------------------------------\n¡Those who bet on green win!\n-----------------------------------`);
        }

        if (winningPlayersExact.length > 0) {
            console.log(`Exact number winners: `);
            winningPlayersExact.forEach(bet => {
                console.log(`Player: ${bet.player.getName()}, Bet Amount: ${bet.amount} \n-----------------------------------`);
            });
        } else {
            console.log(`No exact number winners this time! \n-----------------------------------`);
        }

        if (winningPlayersColor.length > 0) {
            console.log("Color winners:");
            winningPlayersColor.forEach(bet => {
                console.log(`Player: ${bet.player.getName()}, Bet Amount: ${bet.amount}`);
            });
        } else {
            console.log(`No color winners this time! \n-----------------------------------`);
        }

        this.finishGame();
    }
}
