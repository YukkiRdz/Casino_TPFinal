import { SlotMachine } from "./slotMachineAbstract";

export class FruitSlotMachine extends SlotMachine {
    constructor() {
        const fruitSymbols = ['🍒', '🍌', '🍓', '🍊', '🍇'];
        const gameName = "Fruit Slot Machine";
        super(fruitSymbols, gameName);
    }

    public winningsCombinations(): { combination: string; winning: number }[] {
        return [
            { combination: '🍒 🍒 🍒', winning: 250 },
            { combination: '🍌 🍌 🍌', winning: 500 },
            { combination: '🍓 🍓 🍓', winning: 1250 },
            { combination: '🍊 🍊 🍊', winning: 2500 },
            { combination: '🍇 🍇 🍇', winning: 5000 },
        ];
    }
}