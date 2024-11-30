//imports { 3 juegos y jugador};
import { BlackJack } from "./Games/BlackJack/BlackJack";
export class Casino {
    private name: string;
    private players: Player[] = []; //inicializa el array como vacio;
    private games: (BlackJack | Roullette | SlotMachine) = [];

    constructor(name: string){
        this.name = name;
        //inicializa el array con los juegos creados;
        this.games = [
            new BlackJack(),
            new Roullette(),
            new SlotMachine(),
        ];
    }

    //getters
    
    public getName(): string{
        return this.name;
    }

    public getPlayers(): Player[]{
        return this.players;
    }

    public getGames(): Game[] {
        return this.games;
    }

    //setters
    public setName(name: string) {
        this.name = name;
    }

    public setPlayers(players: Player[]) {
        this.players = players;
    }

    public setGames(games: Game[]) {
        this.games = games;
    }

    //methods

    //registrar usuario;
    registerUser(user: Player): void {
        //verifica si el usuario esta registrado o no;
        const registeredUser = this.players.find(player => player.getName() === user.getName());
        //si el usuario fue encontrado;
        if (registeredUser) {
            console.error(`The user ${user.getName()} is already registered.`);
        } //si el usuario NO fue encontrado lo agreaga al array;
            else {
            this.players.push(user);
            console.warn(`The user ${user.getName()} has been registered successfully.`);
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

    //elegir juego
    chooseGame(game:Game): Game | undefined{
        //verifica si el juego existe;
        const selectedGame = this.games.find(g => g.getName() === game.getName());
        //si NO existe;
        if (!selectedGame) {
            console.error(`The selected game doesn't exist.`);
            return undefined;
        } else {
            console.log(`The user chose ${selectedGame.getName()}.`);
            return selectedGame;
        }
    }

    //jugar
    playGame(chosenPlayer: Player, selectedGame: Game): void{
        //Verifica que anteriormente se haya elegido el jugador;
        if(!chosenPlayer) {
            console.error(`The player was not chosen.`)
            return;
        }

        //Verifica que anteriormente se haya elegido el juego;
        if(!selectedGame) {
            console.error("The game was not chosen.")
            return;
        }

        //Si el juego y el jugador han sido elegidos;
        if (chosenPlayer  && selectedGame) {
            console.log(`Starting the game ${selectedGame.getName()} as the player ${chosenPlayer.getName()}.`);
            //Inicia el juego con el jugador elegido;
            selectedGame.start(chosenPlayer); //metodo dentro del juego;
        }
    }
}