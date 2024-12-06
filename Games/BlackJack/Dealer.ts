import { Card } from "./Card";

export class Dealer {
  private hand: Card[] = [];

  public receiveCard(card: Card): void {
    this.hand.push(card);
  }

  public showHand(): Card[] {
    return this.hand;
  }

  public calculatePoints(): number {
    let points = 0;
    let aces = 0;

    for (let i = 0; i < this.hand.length; i++) {
      const card = this.hand[i];
      points += card.getNumericValue();
      if (card.value === "A") aces++;
    }

    for (let i = 0; i < aces && points > 21; i++) {
      points -= 10;
      aces--;
    }
    return points;
  }

  public shouldAskForCard(): boolean {
    return this.calculatePoints() < 17;
  }
}