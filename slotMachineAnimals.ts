import { SlotMachine } from "./slotMachineAbstract";

export class AnimalSlotMachine extends SlotMachine {
    constructor() {
        const animalSymbols = ['🐊', '🦈', '🐢', '🦧', '🦜'];
        const gameName = "Animal Slot Machine"; 

        super(animalSymbols, gameName);
    }

    public winningsCombinations(): { combination: string; winning: number }[] {
        return [
            { combination: '🐊 🐊 🐊', winning: 250 },
            { combination: '🦈 🦈 🦈', winning: 500 },
            { combination: '🐢 🐢 🐢', winning: 1250 },
            { combination: '🦧 🦧 🦧', winning: 2500 },
            { combination: '🦜 🦜 🦜', winning: 5000 },
        ];
    }
}