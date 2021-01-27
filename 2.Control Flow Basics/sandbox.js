// for loops --

/* Sådan virker for loop
1. Vi giver en variabel en værdi, 
2. Dernæst spørger vi om det er sandt eller falsk og hvis denne betingelse er sand, får vi udført den kode, der er inde i denne kodeblok.
3. Dette vil udføres hver gang i slutningen af ​​kodeblokken, Så hver gang vi løber igennem en eller anden kode i slutningen, tager vi i og tilføjer 1 til den.
*/

/* 
// Simpel eksempel med tallet 5
 for(let i = 0; i < 5; i++){
   console.log('loop: ', i);
 }
*/

/*
// eksempelet skal forstille, at vi har navnene fra en database. 
const names = ['shaun', 'mario', 'luigi'];

for(let i = 0; i < names.length; i++){
  // denne her console log viser at der er 3 navne uden div tags
  // console.log(names[i]);

  // denne her metode viser at der er 3 navne med div tags
  let html = `<div>${names[i]}</div>`;
  console.log(html);
}
//
*/

/*
// while loops --
// Skrives ikke i parantes, men skrives separat og nedad. 
const names = ['shaun', 'mario', 'luigi'];
let i = 0;

  while(i < names.length){
     console.log(names[i]);
     i++;
   }
*/

/*
// do while loops --
let i = 5;

do{
  console.log('val of i is: ', i);
  i++;
} while(i < 5);
// Så det er en nem måde at udføre en blok af kode inde i en loop først, uanset om tilstanden er sandt eller falsk.
*/

/*
// if statements --
// simpel eksempel 
// const age = 25;

// if(age > 20){
//   console.log('you are over 20 years old');
// }

// eksempel med navne 
// const ninjas = ['shaun', 'ryu', 'chun-li', 'yoshi'];

// if(ninjas.length > 3){
//   console.log("that's a lot of ninjas!");
// }

eksempel med kodeord 
const password = 'p@ssword';

if(password.length >= 8){
  console.log('that password is long enough');
}
*/

/*
// else if statements --
const password = 'p@ssword123456';

if(password.length >= 12){
  console.log('that password is mighty strong');
} else if(password.length >= 8){
  console.log('that password is long enough');
} else {
  console.log('password should be at least 8 characters long');
}
*/

/*
// Logical operators --
// eller = ||
// og = && 
const password = 'p@ss12';

// Hvis koden er 12 eller større end 12 bogstaver og hvis koden har @
if(password.length >= 12 && password.includes('@')){
  console.log('that password is mighty strong');
} else if(password.length >= 8 || password.includes('@') && password.length > 5){
  console.log('that password is strong enough');
} else {
  console.log('that password is not strong enough');
}
*/

/*
// Logical NOT (!) --
const user = false;
// Vi har sat user til falsk og når vi bruger if, så skal det være noget der er sandt, derfor laver vi en ! foran user.
if(!user){
  // do something
  console.log('you must be logged in to continue');
}

// console.log(!true);
// console.log(!false);
*/

/*
// break & continue --
const scores = [50, 25, 0, 30, 100, 20, 10];

for(let i = 0; i < scores.length; i++){

// her ser vi ikke 0, fordi at continue springer over 0. 
  if(scores[i] === 0){
    continue;
  }

  console.log('your score:', scores[i]);
// Her får vi tillykke, du har ramt 100 score, fordi vi har sat score = 100 og sat en break, som gør at de sidste score ikke kommer med i console log. 
  if(scores[i] === 100){
    console.log('congrats, you got the top score!');
    break;
  }

}
*/

/*
// switch statements --
const grade = 'D';

switch(grade){
  case 'A':
    console.log('you got an A!');
    break;
  case 'B':
    console.log('you got a B!');
    break;
  case 'C':
    console.log('you got a C!');
    break;
  case 'D':
    console.log('you got a D!');
    break;
  case 'E':
    console.log('you got an E!');
    break;
  default:
    console.log('not a valid grade');
}
*/

/*
// variables & block scope --
// Dette er eksempler på hvordan global scope og block scope virker. 

let age = 30;
// Når vi giver variabel en værdi i block scoped, kommer den ikke med i global scoped. 

if(true){

  // age = 40;
  let age = 40;
  let name = 'shaun';
  console.log('inside 1st code block:', age, name);

  if(true){

    let age = 50;
    // code blocks tager den seneste værdi der er blevet skrevet og console logger dem om det er inde i block scope eller udenfor block scope.
    console.log('inside 2nd code block:', age, name);

  }

}

console.log('outside code block:', age, name);
*/