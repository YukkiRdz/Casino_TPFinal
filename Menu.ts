import * as readline from 'readline';
import { Casino } from './Casino';
import { Player } from './Player';

// Crear instancia de Casino.
const casino = new Casino("Super Fun Casino");

// Crear una interfaz para la entrada de consola.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Función para mostrar el menú.
function showMenu() {
    console.log("\n=== Casino Menu ===");
    console.log("1. Register Player");
    console.log("2. Add Funds to Player");
    console.log("3. Choose Player");
    console.log("4. Choose Game");
    console.log("5. Play Game");
    console.log("6. Exit");
    console.log("====================");
}

// Función para manejar las opciones del menú.
function handleOption(option: string) {
    switch (option) {
        case "1": // Registrar jugador.
            rl.question("Enter player name: ", (name) => {
                const player = new Player(name, 0); // Suponiendo que Player tiene un constructor con nombre y dinero inicial.
                casino.registerUser(player);
                showMenu();
                promptUser();
            });
            break;

        case "2": // Agregar fondos.
            rl.question("Enter player name: ", (name) => {
                const player = casino.getPlayers().find(p => p.getName() === name);
                if (!player) {
                    console.error("Player not found.");
                    showMenu();
                    promptUser();
                    return;
                }
                rl.question("Enter amount to add: ", (amount) => {
                    const parsedAmount = parseFloat(amount);
                    casino.addFounds(player, parsedAmount);
                    showMenu();
                    promptUser();
                });
            });
            break;

        case "3": // Elegir jugador.
            rl.question("Enter player name: ", (name) => {
                const chosenPlayer = casino.choosePlayer(new Player(name, 0)); // Se crea un jugador temporal para buscarlo.
                if (chosenPlayer) {
                    console.log(`Player ${chosenPlayer.getName()} is now selected.`);
                }
                showMenu();
                promptUser();
            });
            break;

        case "4": // Elegir juego.
            rl.question("Enter game name: ", (gameName) => {
                const game = casino.getGames().find(g => g.getName() === gameName);
                if (!game) {
                    console.error("Game not found.");
                } else {
                    console.log(`Game ${game.getName()} is now selected.`);
                }
                showMenu();
                promptUser();
            });
            break;

        case "5": // Jugar.
            rl.question("Enter player name: ", (playerName) => {
                const player = casino.getPlayers().find(p => p.getName() === playerName);
                if (!player) {
                    console.error("Player not found.");
                    showMenu();
                    promptUser();
                    return;
                }
                rl.question("Enter game name: ", (gameName) => {
                    const game = casino.getGames().find(g => g.getName() === gameName);
                    if (!game) {
                        console.error("Game not found.");
                    } else {
                        casino.playGame(player, game);
                    }
                    showMenu();
                    promptUser();
                });
            });
            break;

        case "6": // Salir.
            console.log("Exiting...");
            rl.close();
            break;

        default: // Opción no válida.
            console.error("Invalid option. Please try again.");
            showMenu();
            promptUser();
            break;
    }
}

// Función para solicitar la entrada del usuario.
function promptUser() {
    rl.question("Choose an option: ", handleOption);
}

// Mostrar el menú y comenzar la interacción.
showMenu();
promptUser();
