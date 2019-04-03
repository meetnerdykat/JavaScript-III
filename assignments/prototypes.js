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
function GameObject(createdAt, name, dimensions) {
  this.createdAt = new Date();
  this.name = name;
  this.dimensions = dimensions;
}
// GameObject destroy() prototype method
GameObject.prototype.destroy = function() {
  return `On ${this.createdAt}, ${this.name} was removed from the game.`;
};

// Create a new GameObject
const gameObject1 = new GameObject('4-3-19', '1st Warrior', '12 x 12');

// Console.log the destroy method of gameObject1
// console.log(gameObject1);
// console.log(gameObject1.destroy());

/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

// CharacterStats Constructor
function CharacterStats(createdAt, name, dimensions, healthPoints) {
  GameObject.call(this, createdAt, name, dimensions);
  this.healthPoints = healthPoints;
  // CharacterStats takeDamage() prototype method
  this.takeDamage = function() {
    return `${this.name} took damage.`;
  };
}

// Have CharacterStats Inherit GameObject's Destroy prototype method
CharacterStats.prototype = Object.create(GameObject.prototype);

// Create a new CharacterStats
const charStats1 = new CharacterStats(
  '4-4-19',
  'Carry',
  '10x10',
  '100 Health Points'
);

// Console.log the healthPoints property of new charStats1
// console.log(charStats1);
// console.log(charStats1.takeDamage());
// console.log(charStats1.destroy());

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
function Humanoid(
  createdAt,
  name,
  dimensions,
  healthPoints,
  team,
  weapons,
  language
) {
  CharacterStats.call(this, createdAt, name, dimensions, healthPoints);
  this.team = team;
  this.weapons = weapons;
  this.language = language;
  // Humanoid greet() prototype method
  this.greet = function() {
    return `${this.name} offers a greeting in ${this.language}.`;
  };
}

// Have Humanoid Inherit GameObject's destroy() prototype method and CharacterStats takeDamage() prototype method
Humanoid.prototype = Object.create(CharacterStats.prototype);
// Humanoid.prototype = Object.create(CharacterStats.prototype);

// Create a new Humanoid
const humanoid1 = new Humanoid(
  '4-5-19',
  'Humanoid1',
  '11x11',
  '98 Health Points',
  'A Team',
  'Wind Power',
  'Fairy Language'
);

// Console.log the healthPoints property of new charStats1
// console.log(humanoid1);
// console.log(humanoid1.greet());
// console.log(humanoid1.takeDamage());
// console.log(humanoid1.destroy());

/*
 * Inheritance chain: GameObject -> CharacterStats -> Humanoid
 * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
 * IN MY OWN WORDS - Humanoid should be able to have and use all the same properties of CharacterStats and GameObject
 * Instances of CharacterStats should have all of the same properties as GameObject.
 * IN MY OWN WORDS - CharacterStats should be able to have and use all the same properties of GameObject
 */

// Test you work by un-commenting these 3 objects and the list of console logs below:

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

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
//   console.log(swordsman.healthPoints); // 15
//   console.log(mage.name); // Bruce
//   console.log(swordsman.team); // The Round Table
//   console.log(mage.weapons); // Staff of Shamalama
//   console.log(archer.language); // Elvish
//   console.log(archer.greet()); // Lilith offers a greeting in Elvish.
//   console.log(mage.takeDamage()); // Bruce took damage.
//   console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
//

// Stretch task:
// * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.
// * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villain and one a hero and fight it out with methods!
