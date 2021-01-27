/*
// function declaration --
// Dette er måden man skriver en function declaration på.
function greet(){
  console.log('hello there');
}

// function expression
// Dette er måden man skriver en function expression på.
const speak = function(){
  console.log('good day!');
};

// greet();
// greet();

speak();
*/

/*
// arguments & parameters --
// Sådan viser den good night Shaun. Det der står inde i function er parameter.
const speak = function(name = 'luigi', time = 'night'){
  console.log(`good ${time}, ${name}!`);
};

// men hvis man skriver komma og morning i arguments, så overskriver den parameter.
speak('shaun');
// speak('shaun', 'morning');
*/

/*
// return statements --

const calcArea = function(radius){
  return 3.14 * radius**2;
  
}

const area = calcArea(5);
console.log('area is:', area);
*/


/*
// arrow functions --
// arrow function er en kortere og flottere måde at skrive functioner på.
// man sætter det i en sætning, fjerner parentes, fjerner krøllede parentes og fjerner return ordet. 
const calcArea = radius => 3.14 * radius**2;

const area = calcArea(5);
console.log('area is:', area);
*/

/*
// Functions vs Methods --
const name = 'shaun';

// function
 
const greet = () => {
  return 'hello';
};

// Ved at skrive funktionen greet, så får vi hello i console log. 
// Denne funktion er defineret på sig selv. 
let resultOne = greet();
console.log(resultOne);

// method
// metoder er funktioner, som er defineret på objekter eller datatyper. 
let resultTwo = name.toUpperCase();
console.log(resultTwo);
*/

/*
// callbacks & forEach --
let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

// hvad vi laver, er i det væsentlige at sætte denne arrow function ind i for each metoden. 
// Det giver tallet for arrayen, hello og et navn. 
const logPerson = (person, index) => {
  console.log(`${index} - hello ${person}`);
}

people.forEach(logPerson);
*/

/*
// get a reference to the 'ul' --
const ul = document.querySelector('.people');

// Laver en variabel kaldet people og har værdien af en array med strings. 
const people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

let html = ``;

people.forEach(person => {
  // create html template for each person
  html += `<li style="color: purple">${person}</li>`;
});

// for at sætte det i console log
console.log(html);
// For at sætte det i html
ul.innerHTML = html;
*/