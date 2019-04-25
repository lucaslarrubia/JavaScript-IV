/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/



// function GameObject (game) {
//   this.createdAt = game.createdAt;
//   this.name = game.name;
//   this.dimensions = game.dimensions;
// } 

// GameObject.prototype.destroy = function() {
//   return `${this.name} was removed from the game.`
// }

class GameObject {
    constructor(game) {
        this.createdAt = game.name;
        this.name = game.name;
        this.dimensions = game.dimensions;
    }
    speak() {
        return `${this.name} was removed from the game.`;
    }
}

//  function CharacterStats (game) {
//   GameObject.call(this, game);
//   this.healthPoints = game.healthPoints;
// }

// CharacterStats.prototype = Object.create(GameObject.prototype);

// CharacterStats.prototype.takeDamage = function () {
//   return `${this.name} took damage`
// }

class CharacterStats extends GameObject {
    constructor(game) {
        super(game);
        this.healthPoints = game.healthPoints;
    }
    super() {
        return `${this.name} took damage`;
    }
}

// function Humanoid(game) {
//   CharacterStats.call(this, game);
//   this.team = game.team;
//   this.weapons = game.weapons;
//   this.language = game.language;
// }

// Humanoid.prototype = Object.create(CharacterStats.prototype);

// Humanoid.prototype.greet = function () {
//   return `${this.name} offers a greeting in ${this.language}.`
// }

class Humanoid extends CharacterStats {
    constructor(game) {
        super(game);
        this.team = game.team;
        this.weapons = game.weapons;
        this.language = game.language;
    }
    speak() {
        return `${this.name} offers a greeting in ${this.language}.`;
    }
}



const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.speak()); // Lilith offers a greeting in Elvish.
  console.log(mage.speak()); // Bruce took damage.
  console.log(swordsman.speak()); // Sir Mustachio was removed from the game.

  