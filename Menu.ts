import * as readlineSync from 'readline-sync';
import { Player } from './Player';
import { Casino} from './casino';

let casino = new Casino('De Ruta')

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
        let id = readlineSync.questionInt('Enter your ID: ');
        let birthdate = readlineSync.questionInt('Enter your birthdate (dd/mm/yy): ');
        casino.registerUser(name.toLowerCase(), username.toLowerCase(), pass, id, birthdate);
        break;

      case 2:
        let a: boolean = true;
        do {
          console.log('\n=== LOGIN MENU ===');
        let loginUsername = readlineSync.question('Enter your username: ');
        let loginPass = readlineSync.question('Enter your password: ');
        let verifiedUser = casino.verifyLogin(loginUsername.toLowerCase(), loginPass);
        if (verifiedUser) {
          userMenu(verifiedUser);
          a = false;
      } else {
          console.log('Login failed. Please try again.');
          mainMenu();
      };
        } while (a === true);
        
      case 3:
        console.log('Goodbye!');
        return;
      default:
        console.log('Invalid option. Please try again.');
    }
  } while (option !== 3);
}

function userMenu(verifiedUser: Player) {
  let option: number;
  do {
    console.log('\n=== USER MENU ===');
    console.log('1.Deposit money');
    console.log('2.My wallet');
    console.log('3.Withdraw money');
    console.log('4.Change password');
    console.log('5.Casino menu');
    console.log('6.Back to main menu');
    option = readlineSync.questionInt(`Select one option: `);

    switch (option) {
      case 1:
        let amount = readlineSync.questionInt('Entered amount: ');
        verifiedUser.depositMoney(amount)
        break;

      case 2:
        verifiedUser.checkBalance();
        break;

      case 3:
        let amountWithdraw = readlineSync.questionInt('Enter amount to withdraw: ');
        verifiedUser.withdrawMoney(amountWithdraw);
        break;
      
      case 4:
        let newPassword = readlineSync.question('Enter your new password: ');
        verifiedUser.setPassword(newPassword);
        break;

      case 5:
        console.clear();
        casinoMenu(verifiedUser);
        break;
      case 6:
        console.clear();
        mainMenu();
        break;

      default:
        console.log('Invalid option. Please try again.');
    }
  } while (option !== 6);
}

function casinoMenu(verifiedUser: Player) {
  let option: number;
  do {
    console.log('\n=== CASINO MENU ===');
    console.log('1. Games');
    console.log('2. Back to user menu');
    option = readlineSync.questionInt(`Select one option: `);

    switch (option) {
      case 1:
        console.clear();
        gamesMenu(verifiedUser);
        return;
      case 2:
        console.clear();
        userMenu(verifiedUser);
        return;
      default:
        console.log('Invalid option. Please try again.');
    }
  } while (option !== 2);
}

function gamesMenu(verifiedUser: Player) {
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
        console.clear();
        blackJackMenu(verifiedUser);
        return;

      case 2:
        console.clear();
        slotMachineMenu(verifiedUser);
        return;

      case 3:
        console.clear();
        rouletteMenu(verifiedUser);
        return;

      case 4:
        console.clear();
        casinoMenu(verifiedUser)
        return;

      default:
        console.log('Invalid option. Please try again.');
    }
  } while (option !== 4);
}

function blackJackMenu(verifiedUser: Player) {
  let option: number;
  do {
    console.log('\n=== BLACKJACK MENU ===');
    console.log('1. Rules');
    console.log('2. Play');
    console.log('3. Back to games menu');
    option = parseInt(readlineSync.question('Select an option: '));

    switch (option) {
      case 1:
        console.log('The goal is to reach 21 or get as close as possible without exceeding it.');
        console.log('Each player gets 2 cards; you can "Hit" (draw more) or "Stand" (keep your hand).');
        console.log('Number cards are worth their value; J, Q, K are worth 10; Ace is 1 or 11.');
        console.log('If you exceed 21, you lose automatically.');
        console.log('In a tie, the dealer and the player push (no one wins or loses).')
        console.log('The closest to 21 without exceeding wins.');
        break;
      case 2:
        const BlackJack = casino.createBlackJack();
        BlackJack.startGame(verifiedUser)
        break;
      case 3:
        console.clear();
        gamesMenu(verifiedUser)
        break;

      default:
        console.log('Invalid option. Please try again.');
    }
  } while (option !== 4);
}

function slotMachineMenu(verifiedUser: Player) {
  let option: number;
  do {
    console.log('\n=== SLOTMACHINE MENU ===');
    console.log('1. Rules');
    console.log('2. Play Animal Slot Machine');
    console.log('3. Play Number Slot Machine');
    console.log('4. Play Fruits Slot Machine ');
    console.log(`5. Back to games menu`)
    option = parseInt(readlineSync.question('Select an option: '));

    switch (option) {
      case 1:
        console.log('=== Rules ===');
        console.log('1. Each game costs a certain amount to play.');
        console.log('2. You can win different prizes based on the symbols.');
        console.log('3. Have fun and gamble responsibly!');
        break;
      case 2:
        const animal = casino.createAnimalSlotMachine()
        animal.startGame();
        animal.start(verifiedUser);
        animal.finishGame();
        break;
      case 3:
        const number = casino.createNumberSlotMachine()
        number.startGame();
        number.start(verifiedUser);
        number.finishGame();
        break;      
      case 4:
        const fruit = casino.createFruitSlotMachine()
        fruit.startGame();
        fruit.start(verifiedUser);
        fruit.finishGame();
        break;
      case 5:
        console.clear();
        gamesMenu(verifiedUser)
        break;

      default:
        console.log('Invalid option. Please try again.');
    }
  } while (option !== 5);
}

function rouletteMenu(verifiedUser: Player) {
  let option: number;
  do {
    console.log('\n=== ROULETTE MENU ===');
    console.log('1. Rules');
    console.log('2. Play');
    console.log('3. Back to games menu');
    option = parseInt(readlineSync.question('Select an option: '));

    switch (option) {
      case 1:
        console.log('1. Predict where the ball will land on the wheel (number, color, or feature).');
        console.log('2. 37 squares (0 to 36).');
        console.log('3. The dealer throws the ball; Players bet before they stop.');
        console.log('4. Depending on the type of bet, payouts range from 1:1 to 35:1');
        break;
      case 2:
        const roulette = casino.createRoulette()
        roulette.betMoney(verifiedUser)
        break;
      case 3:
        console.clear();
        gamesMenu(verifiedUser)
        break;

      default:
        console.log('Invalid option. Please try again.');
    }
  } while (option !== 3);

}

mainMenu();