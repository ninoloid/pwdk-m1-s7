class Player {
  name;
  #health = 100;
  #power = 10;

  constructor(name) {
    this.name = name;
  }

  // Getter
  getHealth() {
    return this.#health;
  }

  getPower() {
    return this.#power;
  }

  // Setter
  setHealth(value) {
    this.#health += value;
  }

  setPower(value) {
    this.#power += value;
  }

  // Method
  hit(value) {
    this.#health -= value;
  }

  useItem(item) {
    // item = { health: 0 / 10, power: 0 / 10 }
    if (item.health) {
      this.setHealth(item.health);
    } else if (item.power) {
      this.setPower(item.power);
    }
  }

  showStatus(value) {
    console.log(
      `${value} Shooting: ${this.name} (Health => ${this.#health}, Power => ${
        this.#power
      })`
    );
  }
}

class ShootingGame {
  player1;
  player2;

  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
  }

  // method
  getRandomItem() {
    const item = ["health", "power"];

    // get random value 1 or 0
    const randomIndex = Math.round(Math.random()); // o or 1
    const currentItem = item[randomIndex];

    if (currentItem === "health") {
      return { health: 10, power: 0 };
    } else {
      return { health: 0, power: 10 };
    }
  }

  start() {
    while (this.player1.getHealth() > 0 && this.player2.getHealth() > 0) {
      this.player1.showStatus("Before");
      this.player2.showStatus("Before");

      const itemOfPlayer1 = this.getRandomItem();
      const itemOfPlayer2 = this.getRandomItem();

      this.player1.useItem(itemOfPlayer1);
      this.player2.useItem(itemOfPlayer2);

      const powerOfPlayer1 = this.player1.getPower();
      this.player2.hit(powerOfPlayer1);

      if (this.player2.getHealth() <= 0) {
        console.log(`${this.player1.name} win!`);
        break;
      }

      const powerOfPlayer2 = this.player2.getPower();
      this.player1.hit(powerOfPlayer2);

      this.player1.showStatus("After");
      this.player2.showStatus("After");

      if (this.player1.getHealth() <= 0) {
        console.log(`${this.player2.name} win!`);
        break;
      }
    }
  }
}

const newGame = new ShootingGame(
  new Player("Player 1"),
  new Player("Player 2")
);
newGame.start();
