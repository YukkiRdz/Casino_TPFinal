import { Card } from "./Card";
import { Deck } from "./Deck";
import { Dealer } from "./Dealer";
import { Player } from "../../Player";
import * as readlineSync from "readline-sync";
import { Game } from "../../game";

export class BlackJack implements Game{
  private minBet: number = 10;
  private deck: Deck;
  private dealer: Dealer;
  private playerHand: Card[] = [];

  constructor() {
    this.deck = new Deck();
    this.deck.shuffle();
    this.dealer = new Dealer();
  }

  public start(player: Player): void {
    const playerBalance = player.getMoney();
    let amount: number = readlineSync.questionInt('Enter your bet amount (the minimum bet is $10): ');
    player.setMoney(playerBalance - amount);

    if (player.getMoney() < amount) {
      console.log(`${player.getName()} does not have enough money to place this bet.`);
      return;
  } else if (amount < this.minBet) {
      console.log('You have to bet at least $10.');
  } else {
    player.setMoney(playerBalance - amount);
    console.log("New BlackJack game");

    const card1 = this.deck.deal();
    const card2 = this.deck.deal();
    if (card1) this.playerHand.push(card1);
    if (card2) this.playerHand.push(card2);

    const dealerCard1 = this.deck.deal();
    const dealerCard2 = this.deck.deal();
    if (dealerCard1) this.dealer.receiveCard(dealerCard1);
    if (dealerCard2) this.dealer.receiveCard(dealerCard2);

    console.log("Your hand:", this.playerHand);
    console.log("Dealer's visible card:", this.dealer.showHand()[0]);
    
    this.playerTurn();
    this.dealerTurn();
    this.determineWinner(player, amount);
  }
}

  public playerTurn(): void {
    while (true) {
      const points = this.calculatePoints(this.playerHand);
      console.log("Your points:", points);

      if (points > 21) {
        console.log("You went over 21, you lost.");
        return;
      }

      const decision = readlineSync.question(
        "Do you want to take another card? (y/n): "
      );
      if (decision.toLowerCase() !== "y") {
        break;
      }

      const newCard = this.deck.deal();
      if (newCard) {
        this.playerHand.push(newCard);
        console.log("Your hand:", this.playerHand);
      } else {
        console.log("No more cards in the deck.");
        break;
      }
    }
  }

  public dealerTurn(): void {
    console.log("Dealer's turn");
    while (this.dealer.shouldAskForCard()) {
      const newCard = this.deck.deal();
      if (newCard) {
        this.dealer.receiveCard(newCard);
        console.log("Dealer's hand:", this.dealer.showHand());
      } else {
        console.log("No more cards in the deck.");
        break;
      }
    }
  }

  public determineWinner(player: Player, amount: number): void {
    const playerBalance = player.getMoney();
    const WinMoney = amount * 3;
    const playerPoints = this.calculatePoints(this.playerHand);
    const dealerPoints = this.dealer.calculatePoints();

    console.log(`Dealer points: ${dealerPoints}`);
    if (playerPoints > 21) {
      console.log("You lost! You went over 21.");
    } else if (dealerPoints > 21 || playerPoints > dealerPoints) {
      console.log("You win!");
      player.setMoney(playerBalance + WinMoney);
    } else if (playerPoints < dealerPoints) {
      console.log("You lost. The dealer has more points.");
    } else {
      console.log("It's a tie.");
      player.setMoney(playerBalance + amount);
    }
    console.log(`Available balance: $${player.getMoney()}`);
  }

  private calculatePoints(hand: Card[]): number {
    let points = 0;
    let aces = 0;

    for (const card of hand) {
      points += card.getNumericValue();
      if (card.value === "A") aces++;
    }

    while (points > 21 && aces > 0) {
      points -= 10;
      aces--;
    }

    return points;
    }

    // Implementación del método startGame de la interfaz Game.
    public startGame(): void {
      console.log(`BlackJack is starting!`);

  }

  // Implementación del método finishGame de la interfaz Game.
  public finishGame(): void {
      console.log(`BlackJack has finished!`);
  }
}