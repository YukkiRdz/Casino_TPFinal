export class Card {
  public value: string;
  public suit: string;

  constructor(value: string, suit: string) {
    this.value = value;
    this.suit = suit;
  }

  getNumericValue(): number {
    if (["J", "K", "Q"].includes(this.value)) return 10;
    if (this.value === "A") return 11;
    return parseInt(this.value);
  }

  toString(): string {
    return `${this.value} of ${this.suit}`;
  }
}