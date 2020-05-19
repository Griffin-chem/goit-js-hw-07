const worms = [{name: 'Артем', length: 15, age: 5}, {name: 'Илья', length: 10, age: 2},{name: 'Анатолий', length: 200, age: 67}]
const youngWorms = worms
  .filter(worm => worm.age<20)
  .map(worm => worm.teeth = true);

const worms = [{name: 'Артем', length: 15, age: 5}, {name: 'Илья', length: 10, age: 2},{name: 'Анатолий', length: 200, age: 67}]
const tolik = worms.find(worm => worm.name === "Анатолий");

const checkWormAge = worms.some(worm => worm.age === 15);
const checkWormLength = worms
  .map(worm => worm.length += 10)
  .every(worm => worm.length > 10);