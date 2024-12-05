// numberSlotMachine.ts
import { SlotMachine } from "./slotMachineAbstract";

export class NumberSlotMachine extends SlotMachine {
    constructor() {
        const symbols = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
        const gameName = "Number Slot Machine"; 
        super(symbols, gameName);
    }

    public winningsCombinations(): { combination: string; winning: number }[] {
        return [
            { combination: '1 1 1', winning: 250 },
            { combination: '2 2 2', winning: 500 },
            { combination: '3 3 3', winning: 1250 },
            { combination: '4 4 4', winning: 2500 },
            { combination: '5 5 5', winning: 5000 },
        ];
    }
}