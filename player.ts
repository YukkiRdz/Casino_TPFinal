export class Player {
    private name: string;
    private money: number;

    constructor(name: string, money: number) {
        this.name = name;
        this.money = money;
    }
    
    public getName(): string {
        return this.name
    }

    public getMoney(): number {
        return this.money
    }
}