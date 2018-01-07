// Use the forEach method to add the name of each planet to a div element in your HTML with an id of "planets".

const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
const $el = $('#planets');

let planetNames = planets.forEach( (planet) => {
  $el.append(` ${planet}`);
});

// Use the map method to create a new array where the first letter of each planet is capitalized
let capLetter = planets.map( (planet) => {
  planet = planet.charAt(0).toUpperCase() + planet.slice(1)
  return planet;
})
console.log(capLetter);

// Use the filter method to create a new array that contains planets with the letter 'e'
let letterE = planets.filter( (planet) => {
  return planet.includes("e");
   planet.push(letterE);
});
console.log(letterE);


// Use the reduce method to create a sentence from the words in the following array

const words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];

let newWords = words.reduce( (word1, word2) => {
  return (`${word1} ${word2}`);
})
//console.log(newWords);

function printIt(str) {
$el.append(`<p><b>Sentence:</b> ${str}</p>`);
};

printIt(newWords)
