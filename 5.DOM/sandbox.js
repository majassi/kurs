
// The Query Selector -- 1
/*
// Refererer til første p tag i dokumentet. 
const para = document.querySelector('p');
    console.log(para);
*/

/*
// refererer til første error class i dokumentet.
const para = document.querySelector('.error');
    console.log(para);
*/

/*
// Refererer til div taggets class, som er error, hvis der er flere classes i et dokument. 
const para = document.querySelector('div.error');
    console.log(para);
*/

/*
// refererer til alle p tags i html dokumentet. 
const paras = document.querySelectorAll('p');

// refererer til alle error classes i html dokumentet. 
const errors = document.querySelectorAll('.error');

// Vi console logger paras og errors.
    console.log(paras, errors);
// Når vi har skrevet paras[1], så det fordi vi vil se anden p tag i console log. 
// Når vi har skrevet errors[0], så det fordi vi vil se første error class i console log.
    console.log(paras[1], errors[0]);

// forEach metoden viser os alle p tags. 
paras.forEach(para => {
  console.log(para);
});
*/


// Other Ways to Query the DOM --2
/*
// Refererer til h1 elementen via dens ID.  
const title = document.getElementById('page-title');
    console.log(title);

// Refererer til alle error classes(bemærk getElements og ikke getElement). 
// Vi behøver ikke at skrive . foran error, fordi vi har skrevet getElementsByClassName.
const errors = document.getElementsByClassName('error');
    console.log(errors);
// sådan her ser du første error class i console log. 
    console.log(errors[0]);

// refererer til alle p tags elementer(bemærk getElements og ikke getElement). 
const paras = document.getElementsByTagName('p');
// console logger alle p tags i HTMLcollection.
      console.log(paras);
// console logger anden p tag i HTMLcollection. 
      console.log(paras[1]);
*/


// Adding & Changing Page Content --3
/*
// Sådan ændrer du p tags tekst via Javascript med + foran = tilføjer du begge text sammen
const para = document.querySelector('p');
console.log(para.innerText);
  para.innerText = 'ninjas are awesome';
*/

/*
// sådan ændrer man flere p tags tekster via Javascript med += tilføjer du begge text sammen
const paras = document.querySelectorAll('p');
// Der bliver tilføjet 'new text!' til hver p tag. 
paras.forEach(p => {
    console.log(p.innerText);
    p.innerText += ' new text!';
  });
*/

/*
// sådan ændrer du i dit html via Javascript
// Du laver en reference til content classen.
const content = document.querySelector('.content');
// Viser html content classens p tag i console log. 
  console.log(content.innerHTML);
  // Denne her kode overskriver content og tilføjer en h2. 
  content.innerHTML = '<h2>this is a new h2</h2>';
  // Sådan her lader du p tagget blive og tilføjer en h2(+=).
  content.innerHTML += '<h2>this is an h2 added to the content</h2>';

// Hvis vi forstiller os at have fået noget fra en database.
// og gerne vil sætte dem ind i HTML.
const people = ['mario', 'luigi', 'yoshi'];

// Vi benytter os af forEach metoden.
people.forEach(person => {
  // Vi overskriver ikke content, men tilføjer p tag til content.
  content.innerHTML += `<p>${person}</p>`;
});
*/

/*
// Get attribute -- 4
// reference til attributen a href
const link = document.querySelector('a');
// Vi benytter os af getAttribute, fordi vi gerne vil have href's attribute. 
console.log(link.getAttribute('href'));
// Ændre attribute(linket i browseren)
link.setAttribute('href', 'https://www.thenetninja.co.uk');
// Ændre innertext(teksten i browseren)
link.textContent = 'The Net Ninja webiste';

// sæt and ændre attribute html and css
// reference til attributen p class 
const mssg = document.querySelector('p');
// Vi benytter os af getAttribute, fordi vi gerne vil have classes's attribute. 
console.log(mssg.getAttribute('class'));
// Vi sætter classes værdi til succes(tjek elements).  
mssg.setAttribute('class', 'success');
// Hvis style attributen ikke er i tagget, så tilføjer Javascript den. 
mssg.setAttribute('style', 'color: green');
*/


//  Changing CSS Styles -- 5
/*
// reference til h1
const title = document.querySelector('h1');

// denne metode overskriver nuværende styles og benyttes kun selv.
// title.setAttribute('style', 'margin: 50px;');

// denne her metode tilføjer til stylen, det er en proppery af title elementen.
console.log(title.style);
// Hvis man gerne vil se propperty name til color, som er orange. 
console.log(title.style.color);

// tilføjer 50px margin til stylen
title.style.margin = '50px';
// Tilføjer farven 'crimson' uden at overskrive nogle styles. 
title.style.color = 'crimson';
// Tilføjer skrifttype størrelse til h1. 
title.style.fontSize = '60px';
// denne her metode fjerner fra stylen
title.style.margin = '';
*/


// Adding & Removing Classes -- 6
/*
  const content = document.querySelector('p');

// se nuværende class
  console.log(content.classList);
// tilføj class. Der vil stadig stå 'error' og selvom classen bliver fjernet i html. 
  content.classList.add('error');
// Her tilføjer vi classen success
  content.classList.add('success');
// Her fjerner vi success class
  content.classList.remove('success');
*/



// Parents, Children & Siblings -- 7
/*
// reference til article 
const article = document.querySelector('article');

// Sådan får du set alle children. 
// console.log(article.children);
// sådan laver man en htmlcollection til array
// console.log(Array.from(article.children));


//sådan tilføjer man en class til hver child kaldet 'article-element'.
Array.from(article.children).forEach(child => {
  child.classList.add('article-element');
});

// reference til h2
const title = document.querySelector('h2');
// Dette er måden man finder parent på, som burde give mig article.
console.log(title.parentElement);
// Dette er måden man finder parent af parent på, som burde give mig body(chaining metoden).
console.log(title.parentElement.parentElement);
// Dette er måden man finder next sibling på, som burde give mig næste tag og det er p.
console.log(title.nextElementSibling);
// Dette er måden man finder previous sibling på, som burde give mig forrige tag og det er p.
console.log(title.previousElementSibling);

// chaining i dette tilfælde finder søskende, forældre og børnene = HTMLcollection i console log. 
console.log(title.nextElementSibling.parentElement.children);
*/

/*
// Event bacics (click events) -- 8
// const button = document.querySelector('button');

// button.addEventListener('click', () => {
//   console.log('you clicked me');
// });

const items = document.querySelectorAll('li');

items.forEach(item => {
  item.addEventListener('click', e => {
    // Forskellige handlinger når du klikker på li
    // console.log('item clicked');
    // console.log(e);
    // console.log(e.target);
    // console.log(item);
    // Dette er en css property, som gør, at teksten til li bliver streget over
    e.target.style.textDecoration = 'line-through';
  });
});
*/

/*
// creating and removing elements -- 9
const ul = document.querySelector('ul');
// ul.remove();

// reference til button knappen
const button = document.querySelector('button');
// gøre sådan så der tilføjes ny tekst til li
button.addEventListener('click', () => {
  const li = document.createElement('li');
  li.textContent = 'something new to do';
  //ul.appendChild(li);
  // Når du klikker på knappen kommer teksten øverst, men appends får teksten til at komme nederst. 
  ul.prepend(li);
});

// reference til li knapperne 
const items = document.querySelectorAll('li');
// får li knappeerne til at forsvinde, når man klipper på dem
items.forEach(item => {
  item.addEventListener('click', e => {
    // e.target.style.textDecoration = 'line-through';
    e.target.remove();
  });
});
*/

/*
// Event bubbling (and delegation) -- 10
const ul = document.querySelector('ul');
const button = document.querySelector('button');

button.addEventListener('click', () => {
  const li = document.createElement('li');
  li.textContent = 'something new to do';
  ul.appendChild(li);  
});

// const items = document.querySelectorAll('li');

// items.forEach(item => {
//   item.addEventListener('click', e => {
//     console.log('event in LI');
//     e.stopPropagation();
//     e.target.remove();
//   });
// });

ul.addEventListener('click', e => {
  // console.log('event in UL');
  console.log(e.target, e);
  if(e.target.tagName === 'LI'){
    e.target.remove();
  }
});
*/

/*
// More DOM Events -- 11
const copy = document.querySelector('.copy-me');

copy.addEventListener('copy', () => {
  console.log('OI! my content is copyrighted!!');
});

const box = document.querySelector('.box');

box.addEventListener('mousemove', e => {
  // console.log(e);
  // console.log(e.offsetX, e.offsetY);
  box.textContent = `x pos - ${e.offsetX}  y pos - ${e.offsetY}`;
});

document.addEventListener('wheel', e => {
  console.log(e.pageX, e.pageY);
});
*/

/*
// Building a Popup -- 12
const button = document.querySelector('button');
const popup = document.querySelector('.popup-wrapper');
const close = document.querySelector('.popup-close');

// Denne her får Popup til at komme frem ved at klikke på button
button.addEventListener('click', () => {
  popup.style.display = 'block';
});

// Denne her får krydset til at lukke Popup
close.addEventListener('click', () => {
  popup.style.display = 'none';
});

// Denne her lukker for Popup ved at klikke udenom
popup.addEventListener('click', (e) => {
  if(e.target.className === 'popup-wrapper'){
    popup.style.display = 'none';
  }
});
*/
