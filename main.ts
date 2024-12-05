import * as readlineSync from 'readline-sync';

// import { BlackJack } from "./BlackJack";

// function main(): void {
//   console.log("Bienvenido al Blackjack!");

//   const juego = new BlackJack();

//   // Inicia el juego y reparte las cartas iniciales
//   juego.iniciarJuego();

//   // Turno del jugador
//   juego.turnoJugador();

//   // Turno del crupier (si el jugador no pierde en su turno)
//   juego.turnoCrupier();

//   // Determina al ganador
//   juego.determinarGanador();
// }

// main();

function mainMenu() {
  let option: number;
  do {
    console.log('\n=== MAIN MENU ===');
    console.log('1. Register user');
    console.log('2. Login');
    console.log('3. Exit');
    option = parseInt(readlineSync.question('Select an option: '));

    switch (option) {
      case 1:
        console.log('\n=== REGISTER MENU ===');
        let name = readlineSync.question('Enter your name: ');
        let username = readlineSync.question('Enter your username: ');
        let pass = readlineSync.question('Enter your password: ');
        let id = readlineSync.question('Enter your ID: ');
        let birthday = readlineSync.question('Enter your birthdate (dd/mm/yy): ');
        console.log('**** Registered successfully! ****');
        break;

      case 2:
        console.log('\n=== LOGIN MENU ===');
        let loginUsername = readlineSync.question('Enter your username: ');
        let loginPass = readlineSync.question('Enter your password: ');
        console.log('**** Access successfully! ****');
        userMenu();
        return;

      case 3:
        console.log('Goodbye!');
        return;

      default:
        console.log('Invalid option. Please try again.');
    }
  } while (option !== 3);
}

function userMenu() {
  let option: number;
  do {
    console.log('\n=== USER MENU ===');
    console.log('1.Deposit money');
    console.log('2.My wallet');
    console.log('3.Changue password');
    console.log('4.Casino menu');
    console.log('5.Back to main menu');
    option = readlineSync.questionInt(`Select one option: `);

    switch (option) {
      case 1:
        //ingresarDinero()
        break;

      case 2:
        //consultarSaldo()
        break;

      case 3:
        //setPassword
        break;

      case 4:
        casinoMenu();
        break;
      case 5:
        mainMenu();
        break;

      default:
        console.log('Invalid option. Please try again.');
    }
  } while (option !== 5);
}

function casinoMenu() {
  let option: number;
  do {
    console.log('\n=== CASINO MENU ===');
    console.log('1. Games');
    console.log('2. Depostit money');
    console.log('3. Back to user menu');
    option = readlineSync.questionInt(`Select one option: `);

    switch (option) {
      case 1:
        gamesMenu();
        return;
      case 2:
        //setMoney
        break;
      case 3:
        userMenu();
        return;

      default:
        console.log('Invalid option. Please try again.');
    }
  } while (option !== 3);
}

function gamesMenu() {
  let option: number;
  do {
    console.log('\n=== GAMES MENU ===');
    console.log('1. Blackjack');
    console.log('2. SlotMachine');
    console.log('3. Roulette');
    console.log('4. Back to casino menu');
    option = readlineSync.questionInt(`Select one option: `);

    switch (option) {
      case 1:
        blackJackMenu();
        return;

      case 2:
        slotMachineMenu();
        return;

      case 3:
        rouletteMenu();
        return;

      case 4:
        casinoMenu()
        return;

      default:
        console.log('Invalid option. Please try again.');
    }
  } while (option !== 4);
}

function blackJackMenu() {
  let option: number;
  do {
    console.log('\n=== BLACKJACK MENU ===');
    console.log('1. Rules');
    console.log('2. Bet');
    console.log('3. Play');
    console.log('4. Back to games menu');
    option = parseInt(readlineSync.question('Select an option: '));

    switch (option) {
      case 1:

        break;
      case 2:

        break;
      case 3:

        break;
      case 4:
        gamesMenu()
        break;

      default:
        console.log('Invalid option. Please try again.');
    }
  } while (option !== 4);
}

function slotMachineMenu() {
  let option: number;
  do {
    console.log('\n=== SLOTMACHINE MENU ===');
    console.log('1. Rules');
    console.log('2. Bet');
    console.log('3. Play Animal Slot Machine');
    console.log('4. Play Number Slot Machine');
    console.log('5. Play Fruits Slot Machine ');
    console.log(`6. Back to games menu`)
    option = parseInt(readlineSync.question('Select an option: '));

    switch (option) {
      case 1:

        break;
      case 2:

        break;
      case 3:

        break;
      case 4:

        break;      
      case 5:

        break;
      case 6:
        gamesMenu()
        break;

      default:
        console.log('Invalid option. Please try again.');
    }
  } while (option !== 6);
}

function rouletteMenu() {
  let option: number;
  do {
    console.log('\n=== ROULETTE MENU ===');
    console.log('1. Rules');
    console.log('2. Bet');
    console.log('3. Play');
    console.log('4. Back to games menu');
    option = parseInt(readlineSync.question('Select an option: '));

    switch (option) {
      case 1:

        break;
      case 2:

        break;
      case 3:

        break;
      case 4:
        gamesMenu()
        break;

      default:
        console.log('Invalid option. Please try again.');
    }
  } while (option !== 3);

}

mainMenu();