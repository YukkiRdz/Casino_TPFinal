class Casino {
    private name: string;
    private players: Player[] = []; //inicializa el array como vacio;
    private games: Game[];

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

    registerUser(user: Player): void {
        //verifica si el usuario esta registrado o no;
        const registeredUser = this.players.find(player => player.getName() === user.getName());
        //si el usuario fue encontrado;
        if (registeredUser) {
            console.log(`El jugador ${user.getName()} ya está registrado.`);
        } //si el usuario NO fue encontrado lo agreaga al array;
            else {
            this.players.push(user);
            console.log(`El jugador ${user.getName()} ha sido registrado con éxito.`);
        }
    }

    addFounds(user: Player, amount: number): void {

    }

    chooseGame(user: Player, game:Game): void{

    }
}