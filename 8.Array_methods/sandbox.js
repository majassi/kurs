// Filter method --1
/*
// En array med en masse scores. 
const scores = [10, 30, 15, 25, 50, 40, 5];

// Vi benytter os af callback function til at se hvilke tal der er større end 20
// const highScores = scores.filter(score => score > 20);
// console.log(highScores);

// Vi filtrerer ud at Shaun og Chun-li er true
const users = [
  {name: 'shaun', premium: true},
  {name: 'yoshi', premium: false},
  {name: 'mario', premium: false},
  {name: 'chun-li', premium: true}
];

// Vi filtrerer hver user ud og ser om de er falske eller sande med callback functionen. 
const premiumUsers = users.filter(user => user.premium);
console.log(premiumUsers);
*/


// Map method --2
/*
// En array med en masse priser. 
const prices = [20, 10, 30, 25, 15, 40, 80, 5];

// Simpel metode til at vise eksemplet på. 
// map metoden tager en callback function som en argument.
// const salePrices = prices.map(price => price / 2);
// console.log(salePrices);

// Metoden her skal lave alle priser over 30 til halv pris.
// En array med en masse navne og priser. 
const products = [
  {name: 'gold star', price: 20},
  {name: 'mushroom', price: 40},
  {name: 'green shells', price: 30},
  {name: 'banana skin', price: 10},
  {name: 'red shells', price: 50}
];

// Vi laver en callback function for hver product.
const saleProducts = products.map(product => {
  // Hvis product price er større end 30, så returnerer vi en ny object med product prices som har halverert pris.
  if(product.price > 30){
    // Vi laver en ny object, så den ikke ændre den nuværende. 
    return {name: product.name, price: product.price / 2}
  } else {
    // Hvis prisen ikke er over 30, så return proudct.
    return product;
  }
});

console.log(products, saleProducts);
*/


// Find method --3
/*
// Denne metode laver os finde den første score, der er over 50 og stopper med at udføre callback function på scoresne efter 60.
const scores = [10, 5, 0, 40, 60, 10, 20, 70];

const firstHighScore = scores.find(score => score > 50);
console.log(firstHighScore);
*/


// Sort method --4
/*
// example 1 - sorting strings
const names = ['mario', 'shaun', 'chun-li', 'yoshi', 'luigi'];

// Denne metode ændrer på den originale array og sætter dem i alfabetisk rækkefølge.
names.sort();
console.log(names);

// example 2 - sorting numbers
const scores = [10, 50, 20, 5, 35, 70, 45];

// a,b betyder at den tager 2 tal om det er 10 og 50 eller 45 og 70.
// Hvis b er større end a, får vi et positivt nummer, som vi skal, og så kommer b først.
// Hvis a er større end b, får vi et negativt tal, og a kommer først og i dette tilfælde er det højeste tal til laveste. 
scores.sort((a,b) => b - a);
console.log(scores);

// example 3 - sorting objects
const players = [
  {name: 'mario', score: 20},
  {name: 'luigi', score: 10},
  {name: 'chun-li', score: 50},
  {name: 'yoshi', score: 30},
  {name: 'shaun', score: 70}
];

// Denne her metode finder den højeste score. 
// a,b betyder at den tager 2 objekter om det er objekt 1 og 2 eller 3 og 4.
// Hvis B.score er større end A.score, får vi et positivt nummer, som vi skal, og så kommer B først.
// Hvis A.score er større end B.score, får vi et negativt tal, og A kommer først og i dette tilfælde er det højeste score til laveste. 
players.sort((a,b) => b.score - a.score);
console.log(players);
*/


// Chaining array methods --5
/*
const products = [
  {name: 'gold star', price: 30},
  {name: 'green shell', price: 10},
  {name: 'red shell', price: 40},
  {name: 'banana skin', price: 5},
  {name: 'mushroom', price: 50}
];

// Vi chainer metoderne sammen. 
const promos = products
// Vi filtrer ud de priser, som er over 20.
  .filter(product => product.price > 20)
  // Vi bruger map metoden til at lave 3 strings. 
  .map(product => `the ${product.name} is ${product.price / 2} pounds`);

console.log(promos);
*/