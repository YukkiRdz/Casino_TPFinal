import { Card } from "./Card";

export class Deck {
  private cards: Card[];

  constructor() {
    this.cards = [];
    this.createDeck();
  }

  private createDeck(): void {
    const suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
    const values = [
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

    for (let i = 0; i < suits.length; i++) {
      for (let j = 0; j < values.length; j++)
        this.cards.push(new Card(values[j], suits[i]));
    }
  }

  public shuffle(): void {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }

  public deal(): Card | undefined {
    return this.cards.pop();
  }
}