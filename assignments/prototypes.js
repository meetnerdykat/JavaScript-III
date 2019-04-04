/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid. 

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  
  ### 
  Use the objects at the bottom of the page to test your constructor functions. 
  ###
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/

/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/

// GameObject Constructor
function GameObject(atts) {
  this.createdAt = atts.createdAt;
  this.name = atts.name;
  this.dimensions = atts.dimensions;
}

// GameObject destroy() prototype method
GameObject.prototype.destroy = function() {
  return `${this.name} was removed from the game.`;
};
// GameObject build() prototype method
GameObject.prototype.build = function() {
  return `${this.name} was built into the game.`;
};

// Create a new GameObject
const game1 = new GameObject({
  createdAt: new Date(),
  name: 'Game1',
  dimensions: {
    length: 1,
    width: 2,
    height: 2
  }
});

// console.log(game1);
// console.log(game1.createdAt);
// console.log(game1.name);
// console.log(game1.dimensions);
// console.log(game1.destroy());

/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

// CharacterStats Constructor
function CharacterStats(atts) {
  // Have CharacterStats inherit GameObject's attributes with the .call() method pertaining to Explicit Binding Principle
  GameObject.call(this, atts);
  this.healthPoints = atts.healthPoints;
}

// Have CharacterStats Inherit GameObject's Destroy prototype method
CharacterStats.prototype = Object.create(GameObject.prototype);

// CharacterStats takeDamage() prototype method
CharacterStats.prototype.takeDamage = function() {
  return `${this.name} took damage.`;
};

// Create a new CharacterStats
// const char1 = new CharacterStats({
//   createdAt: new Date(),
//   name: 'Char1',
//   dimensions: {
//     length: 2,
//     width: 3,
//     height: 3
//   },
//   healthPoints: 5
// });

// console.log(char1);
// console.log(char1.takeDamage());
// console.log(char1.destroy());
// console.log(char1.build());
/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/

// Humanoid Constructor
function Humanoid(atts) {
  CharacterStats.call(this, atts);
  this.team = atts.team;
  this.weapons = atts.weapons;
  this.language = atts.language;
}

// Have Humanoid Inherit destroy and takeDamage prototype methods
Humanoid.prototype = Object.create(CharacterStats.prototype);

// Humanoid greet() prototype method
Humanoid.prototype.greet = function() {
  return `${this.name} offers a greeting in ${this.language}.`;
};

// Create a new GameObject
const humanoid1 = new Humanoid({
  createdAt: new Date(),
  name: 'Hum1',
  dimensions: {
    length: 3,
    width: 4,
    height: 4
  },
  healthPoints: 10,
  team: 'A Team',
  weapons: ['Giant Sword', 'Shield'],
  language: 'Fairy'
});

console.log(humanoid1);
console.log(humanoid1.team);
console.log(humanoid1.weapons);
console.log(humanoid1.language);
console.log(humanoid1.greet());
console.log(humanoid1.takeDamage());
console.log(humanoid1.destroy());

// Stretch task:
// * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.

// Villian Constructor
// function Villian(atts) {
//   this.createdAt = atts.createdAt;
//   this.name = atts.name;
//   this.dimensions = atts.dimensions;
//   this.healthPoints = atts.healthPoints;
//   this.team = atts.team;
//   this.weapons = atts.weapons;
//   this.language = atts.language;
//   this.evilLaughter = atts.evilLaughter;
// }

// // Have Villian Inherit destroy, takeDamage, and greet prototype methods
// Villian.prototype = Object.create(Humanoid.prototype);

// // Villian evilLaugh() prototype method
// Villian.prototype.evilLaugh = function() {
//   return `${this.name} cackles in glee with his evil victory ${
//     this.evilLaughter
//   }.`;
// };

// const theOGV = new Villian({
//   createdAt: new Date(),
//   name: 'Original Gansta Villian',
//   dimensions: {
//     length: 12,
//     width: 12,
//     height: 12
//   },
//   healthPoints: 1000,
//   team: 'Team Evilest of All',
//   weapons: ['Fire', 'Water', 'Ice', 'Sticks', 'Pebbles', 'Mud'],
//   language: 'Pigmy',
//   evilLaughter: 'A-ha, A-ha A-ha ha ha ha ha haaaaa!'
// });

// console.log(theOGV);

/*
 * Inheritance chain: GameObject -> CharacterStats -> Humanoid
 * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
 * IN MY OWN WORDS - Humanoid should be able to have and use all the same properties of CharacterStats and GameObject
 * Instances of CharacterStats should have all of the same properties as GameObject.
 * IN MY OWN WORDS - CharacterStats should be able to have and use all the same properties of GameObject
 */

// Test you work by un-commenting these 3 objects and the list of console logs below:
/*
const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1
  },
  healthPoints: 5,
  name: 'Bruce',
  team: 'Mage Guild',
  weapons: ['Staff of Shamalama'],
  language: 'Common Tongue'
});

const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2
  },
  healthPoints: 15,
  name: 'Sir Mustachio',
  team: 'The Round Table',
  weapons: ['Giant Sword', 'Shield'],
  language: 'Common Tongue'
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4
  },
  healthPoints: 10,
  name: 'Lilith',
  team: 'Forest Kingdom',
  weapons: ['Bow', 'Dagger'],
  language: 'Elvish'
});
*/
// console.log(mage.createdAt); // Today's date
// console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
// console.log(swordsman.healthPoints); // 15
// console.log(mage.name); // Bruce
// console.log(swordsman.team); // The Round Table
// console.log(mage.weapons); // Staff of Shamalama
// console.log(archer.language); // Elvish
// console.log(archer.greet()); // Lilith offers a greeting in Elvish.
// console.log(mage.takeDamage()); // Bruce took damage.
// console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.

// Stretch task:
// * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.
// * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villain and one a hero and fight it out with methods!
