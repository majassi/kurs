// rest parameter --1
/*
// Samler argumenter inde i en funktion.
const double = (...nums) => {
    console.log(nums);
    // Vi tager en array og mapper den til en ny array, som giver os det dobbelte tal.
    return nums.map(num => num*2);
  };
  // Her sætter vi paramtrene for double functionen inde i result variablen.
  const result = double(1,3,5,7,2,4,6,8);
  console.log(result);


  // spread syntax (arrays)
  // Det vi gør her er at skrive 3 navne og sætte dem i arrayen people.
  const people = ['shaun', 'ryu', 'chun-li'];
  // Det vi gør her er at sprede people ud, så vi har 5 navne. 
  const members = ['mario', 'luigi', ...people];
  console.log(members);
  
  // spread syntax (objects)
  // det vi gør her er at indsætte objektet i person.
  const person = { name: 'shaun', age: 30, job: 'net ninja' };
  // det vi gør her er at sprede objektet person ud og tilføjer location til objektet. 
  const personClone = { ...person, location: 'manchester' };
  console.log(person, personClone);
*/

  
// sets --2
/*
// Ganske almindelig array med duplikkeret navne. 
const namesArray = ['ryu', 'chun-li', 'ryu', 'shaun'];
console.log(namesArray);

// Dette opretter et set med arrayen foroven, men har ikke duplikkeret navne. 
const namesSet = new Set(namesArray);
console.log(namesSet);

// Vi spreder navnene i vores set og laver den om til en array igen.
const uniqueNames = [...new Set(namesArray)];
console.log(uniqueNames);

// Vi tilføjer værdier til et set. 
const ages = new Set();
ages.add(20);
// Vi chainer 2 værdier sammen.
ages.add(25).add(30);
// Vi prøver at duplikkere 25, men det kan man ikke i set. 
ages.add(25);
// Vi fjerner værdien 30.
ages.delete(30)

// Viser os værdierne og foræller os hvor mange værdier der er. 
console.log(ages, ages.size);
// Has er bolean og fortæller os om vi har de værdier. 
console.log(ages.has(30), ages.has(20));

// Sådan fjerner man alle værdierne fra set.
ages.clear();
console.log(ages);

// Vi opretter et set med 3 objekter i en array. 
const ninjas = new Set([
  {name: 'shaun', age: 30},
  {name: 'crystal', age: 29},
  {name: 'chun-li', age: 32}
]);

// Vi kalder en callback function for hver ninja i set.
ninjas.forEach(ninja => {
  console.log(ninja.name, ninja.age);
});
*/


// symbols --3
/*
const symbolOne = Symbol('a generic name');
const symbolTwo = Symbol('a generic name');
// Viser os symbolOne's symbol og hvilke  type den er, som er symbol type. 
console.log(symbolOne, typeof symbolOne);
// Dette viser false, fordi 2 symboler ikke kan være det samme. 
console.log(symbolOne === symbolTwo);

// Vi opretter ninja objekt. 
const ninja = {};

ninja.age = 30;
ninja['belt'] = 'orange';
// Overskriver orange til black. 
ninja['belt'] = 'black';

// symbol kan se ens ud, men vi kan bruge dem begge, som propery til objekt.
ninja[symbolOne] = 'ryu';
ninja[symbolTwo] = 'shaun';

console.log(ninja);
console.log(ninja[symbolOne], ninja[symbolTwo]);
*/