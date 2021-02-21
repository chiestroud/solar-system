const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/

const planetEl = document.getElementById("planets");
// planetEl.innerHTML = '<h1>Planets</h1>';

// planets.forEach(planet => {
//   planetEl.innerHTML += `<h2>${planet}</h2>`;
// })

/*
    Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/

// const capitalPlanets = planets.map(planet => {
//   const name = `${planet}`;
//   const planetName = name.charAt(0).toUpperCase() + name.slice(1);
//   const obj = {
//     planetName,
//   }
//   return obj;
// });

// capitalPlanets.forEach(capitalPlanet => {
//   planetEl.innerHTML += `<h2>${capitalPlanet.planetName}</h2>`;
// })

/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/
const ePlanets = planets.filter(planet => {
  let includeE = false;
  if (planet.includes('e')) {
    includeE = true;
  }
  return includeE;
})

ePlanets.forEach(ePlanet => {
  planetEl.innerHTML += `<h2>${ePlanet}</h2>`;
})
