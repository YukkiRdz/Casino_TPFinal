import { FruitSlotMachine } from "./slotMachineFruits";
import { NumberSlotMachine } from "./slotMachineNumbers";
import { AnimalSlotMachine } from "./slotMachineAnimals";

const fruitMachine = new FruitSlotMachine();
const fruitGame = fruitMachine.play();
console.log(`Result: ${fruitGame.result}`);
console.log(fruitGame.message);

const numberMachine = new NumberSlotMachine();
const numberGame = numberMachine.play(); 
console.log(`Result: ${numberGame.result}`);
console.log(numberGame.message);

const animalMachine = new AnimalSlotMachine();
const animalGame = animalMachine.play(); 
console.log(`Result: ${animalGame.result}`);
console.log(animalGame.message);