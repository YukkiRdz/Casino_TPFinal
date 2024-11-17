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
            console.warn(`El jugador ${user.getName()} ha sido registrado con éxito.`);
        }
    }

    addFounds(user: Player, amount: number): void {
        //verifica que el monto de dinero sea mayor que 0;
        if (amount <= 0) {
            console.error('El monto a ingresar debe ser mayor a 0');
            return //return para que no se ejecute el resto del codigo;
        }

        //verifica si el usuario esta registrado o no;
        const registeredUser = this.players.find(player => player.getName() === user.getName());
        //si el usuario no esta registrado;
        if (!registeredUser) {
            console.error(`El usuario ${user.getName()} no está registrado.`);
            return
        }

        //define una constante para guardar el monto acumulado y se modifica el dinero del usuario;
        const newWallet = registeredUser.getMoney() + amount;
        registeredUser.setMoney(newWallet);
        console.warn(`Se ha añadido $${amount} al usuario ${user.getName()}.`);
        console.log(`El monto actual del usuario ${user.getName()} es $${newWallet}.`);
    }

    chooseGame(user: Player, game:Game): void{
        //verifica si el usuario esta registrado o no;
        const registeredUser = this.players.find(player => player.getName() === user.getName());
        //si el usuario no esta registrado;
        if (!registeredUser) {
            console.error(`El usuario ${user.getName()} no está registrado.`);
            return
        }

        //verifica si el juego existe;
        const selectedGame = this.games.find(game => game === game);
        //si NO existe;
        if (!selectedGame) {
            console.error('El juego seleccionado no existe.');
            return
        }
        console.log(`El jugador ${user.getName()} eligió ${selectedGame.getName()}.`);
    }
}