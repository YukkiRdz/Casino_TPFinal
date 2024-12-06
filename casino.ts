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
        //inicializa el array con los juegos creados;
        this.games = [
            new BlackJack(),
            new Roulette(),
            new FruitSlotMachine(),
            new NumberSlotMachine(),
            new AnimalSlotMachine()
        ];
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
    public registerUser(name: string, user: string, password: string, ID: number, birthDate: number): void {
        //verifica si el usuario esta registrado o no;
        const registeredUser = this.players.find(player => player.getID() === ID);
        //si el usuario fue encontrado;
        if (registeredUser) {
            console.error(`The user with ID: ${ID} is already registered.`);
        } else if (birthDate < 9122006) {
            console.error('You must be at least 18 years old to register.');
            //si el usuario NO fue encontrado lo agreaga al array;
        } else {
            const newPlayer = new Player(name, user, password, ID, birthDate);
            this.players.push(newPlayer);
            console.warn(`The user with ID: ${ID} has been registered successfully.`);
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

    //agregar fondos;
    addFounds(user: Player, amount: number): void {
        //verifica que el monto de dinero sea mayor que 0;
        if (amount <= 0) {
            console.error('The amount to be entered must be greater than 0.');
            return; //return para que no se ejecute el resto del codigo;
        }

        //verifica si el usuario esta registrado o no;
        const registeredUser = this.players.find(player => player.getName() === user.getName());
        //si el usuario no esta registrado;
        if (!registeredUser) {
            console.error(`The user ${user.getName()} isn't registered.`);
            return;
        }

        //define una constante para guardar el monto acumulado y se modifica el dinero del usuario;
        const newWallet = registeredUser.getMoney() + amount;
        registeredUser.setMoney(newWallet);
        console.warn(`$${amount} has been added to the user ${user.getName()}.`);
        console.log(`The current amount of user ${user.getName()} is $${newWallet}.`);
    }

    //elegir jugador
    choosePlayer(user: Player): Player | undefined {
        //verifica si el usuario esta registrado o no;
        const chosenPlayer = this.players.find(player => player.getName() === user.getName());
        //si el usuario no esta registrado;
        if (!chosenPlayer) {
            console.error(`The player ${user.getName()} isn't registered.`);
            return undefined;
        } else {
            console.log(`The player ${user.getName()} has been chosen.`);
            return chosenPlayer;
        }
    }

    // //elegir juego
    // chooseGame(game: (BlackJack | Roulette | SlotMachine)): (BlackJack | Roulette | SlotMachine) | undefined{
    //     //verifica si el juego existe;
    //     const selectedGame = this.games.find(g => g.getName() === game.getName());
    //     //si NO existe;
    //     if (!selectedGame) {
    //         console.error(`The selected game doesn't exist.`);
    //         return undefined;
    //     } else {
    //         console.log(`The user chose ${selectedGame.getName()}.`);
    //         return selectedGame;
    //     }
    // }

    // //jugar
    // playGame(chosenPlayer: Player, selectedGame: (BlackJack | Roulette | SlotMachine)): void {
    //     //Verifica que anteriormente se haya elegido el jugador;
    //     if(!chosenPlayer) {
    //         console.error(`The player was not chosen.`)
    //         return;
    //     }

    //     //Verifica que anteriormente se haya elegido el juego;
    //     if(!selectedGame) {
    //         console.error("The game was not chosen.")
    //         return;
    //     }

    //     //Si el juego y el jugador han sido elegidos;
    //     if (chosenPlayer  && selectedGame) {
    //         console.log(`Starting the game ${selectedGame.getName()} as the player ${chosenPlayer.getName()}.`);
    //         //Inicia el juego con el jugador elegido;
    //         // selectedGame.startGame(chosenPlayer) //objeto juego;
    //     }
    // }

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

