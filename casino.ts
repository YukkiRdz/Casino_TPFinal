import { Player } from './Player';
import { Roulette } from "./Games/Roulette/Roulette";
import { BlackJack } from "./Games/BlackJack/BlackJack";
import { SlotMachine } from './Games/SlotMachine/slotMachineAbstract';
import { AnimalSlotMachine } from './Games/SlotMachine/slotMachineAnimals';
import { FruitSlotMachine } from "./Games/SlotMachine/slotMachineFruits";
import { NumberSlotMachine } from './Games/SlotMachine/slotMachineNumbers';


export class Casino {
    private name: string;
    private players: Player[] = []; //inicializa el array como vacio;
    private games: (BlackJack | Roulette | SlotMachine)[] = [];

    constructor(name: string){
        this.name = name;
    }

    //getters
    
    public getName(): string{
        return this.name;
    }

    public getPlayers(): Player[]{
        return this.players;
    }

    public getGames(): (BlackJack | Roulette | SlotMachine)[] {
        return this.games;
    }

    //setters
    public setName(name: string) {
        this.name = name;
    }

    public setPlayers(players: Player[]) {
        this.players = players;
    }

    public setGames(games: (BlackJack | Roulette | SlotMachine)[]) {
        this.games = games;
    }

    //methods

    //registerUser
    public registerUser(name: string, user: string, password: string, ID: number, birthDate: number[]): void {
        
        // Fecha de referencia: 9 de diciembre de 2024
        const referenceDate: number[] = [9, 12, 2024]; // [día, mes, año]
        
        function calcularEdad(birthdate: number[], currentDate: number[]): number {
            let [day, month, year] = birthdate;
            let [currentDay, currentMonth, currentYear] = currentDate;

            let age = currentYear - year;

            if (currentMonth < month || (currentMonth === month && currentDay < day)) {
                age--;
            }

            return age;
        }

        function esMayorDeEdad(birthdate: number[], currentDate: number[]): boolean {
            return calcularEdad(birthdate, currentDate) >= 18;
        }

        //verifica si el usuario esta registrado o no;    
        const registeredUser = this.players.find(player => player.getID() === ID);
        //si el usuario fue encontrado;
        if (registeredUser) {
            console.error(`The user with ID: ${ID} is already registered.`);
        } else if (esMayorDeEdad(birthDate, referenceDate)) { //verifica edad
            const newPlayer = new Player(name, user, password, ID, birthDate);
            this.players.push(newPlayer);
            console.warn(`The user with ID: ${ID} has been registered successfully.`);
        } else {
            console.error('You must be at least 18 years old to register.');
        }
    }

    //verificar login
    public verifyLogin(user: string, password: string): Player | null {
        const verifyUser = this.players.find(player => player.getUser() === user && player.getPassword() === password);
        if (verifyUser) {
            console.log('Login successfull.');
            return verifyUser;
        } else {
            console.error('Invalid user or password.');
            return null;
        }
    }

    //crear juegos
    public createBlackJack(): BlackJack {
        return new BlackJack();
    }

    public createRoulette(): Roulette {
        return new Roulette();
    }

    public createAnimalSlotMachine(): SlotMachine {
        return new AnimalSlotMachine();
    }

    public createFruitSlotMachine(): SlotMachine {
        return new FruitSlotMachine();
    }

    public createNumberSlotMachine(): SlotMachine {
        return new NumberSlotMachine();
    }
}

