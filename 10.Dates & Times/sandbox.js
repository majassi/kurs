// Dates & Times in JavaScript --1
/*
// Ny objekt af denne data type.
const now = new Date();
// viser datoen for nu i console log. 
console.log(now);
// Viser at date og times går under the Object data type.
console.log(typeof now);

// årstal, måneder, dage, tider
// Viser årstal
console.log('getFullYear:', now.getFullYear());
// Viser måned i tal
console.log('getMonth (0-based):', now.getMonth());
// Viser om det er d. 20 osv.. 
console.log('getDate:', now.getDate());
// Viser dagen på ugen i tal. 
console.log('getDay (0-based):', now.getDay());
// Viser timer
console.log('getHours:', now.getHours());
// Viser minutter
console.log('getMinutes:', now.getMinutes());
// Viserviser sekunder
console.log('getSeconds:', now.getSeconds());

// timestamps er et heltal, der repræsenterer antallet af sekunder, der er forløbet siden 1. januar 1970.
console.log('timestamp:', now.getTime());

// Viser viser datoen for i dag uden 10:55:45 og uden (lokation).
console.log(now.toDateString());
// Viser 10:55:45 og (lokation).
console.log(now.toTimeString());
// Viser 29/09/1998, 10:55:45 
console.log(now.toLocaleString());
*/


// Timestamps & Comparisons --2
/*
// tiden før
const before = new Date('February 1 2019 7:30:59');
// tiden nu
const now = new Date();
// minusser tiden nu med tiden før for at få forskellen i millisekunder.
const diff = now.getTime() - before.getTime();
console.log(diff);

// Viser forskellen i minutter.
const mins = Math.round(diff / 1000 / 60);
// Viser forskellen i timer
const hours = Math.round(mins / 60);
// Viser forskellen i dage
const days = Math.round(hours / 24);
console.log(`the before date was ${mins} mins ago`);
console.log(`the before date was ${hours} hours ago`);
console.log(`the before date was ${days} days ago`);

// Konverter timestamps til en dato. 
const timestamp = 1675938474990;
console.log(new Date(timestamp));
*/


// Building a Digital Clock --3
/*
// Refererer til classen clock
const clock = document.querySelector('.clock');


const tick = () => {
// Vi kalder functionen for tick, så koden forneden kan lave en ny dato hvert sekund.
  const now = new Date();
  
  // Giver os timerne for lige nu. 
  const h = now.getHours();
  // Giver os minutterne for lige nu
  const m = now.getMinutes();
  // Giver os sekunderne for lige nu.
  const s = now.getSeconds();

  // Denne kode får h, m og s til at vises frem i browseren.
  const html = `  
    <span>${h}</span> :
    <span>${m}</span> :
    <span>${s}</span>
  `;
  // Hvert sekund overskriver vi html med templaten ovenover.
  clock.innerHTML = html;

};
// Tick = 1000 millisekunder/1 sekund 
setInterval(tick, 1000);
*/


// Date-fns Library --4 
/*
const now = new Date();

// denne metode 'isToday' fortæller om datoen er i dag(bolean)
console.log(dateFns.isToday(now));

// formater datoer
// Denne kode viser årstal for lige nu
console.log(dateFns.format(now, 'YYYY'));
// Denne kode viser måneden for lige nu
console.log(dateFns.format(now, 'MMMM'));
// Denne kode viser dagen i dag. mandag osv..
console.log(dateFns.format(now, 'dddd'));
// Denne kode viser om det er d. 20 osv.. for lige nu.
console.log(dateFns.format(now, 'Do'));
// Denne kode viser fulde dato for i dag.(chaining).
console.log(dateFns.format(now, 'dddd, Do MMMM, YYYY'));

// En anden og nemmere måde at sammenligne datoer på. const before vs const now.
const before = new Date('February 1 2019 12:00:00');
console.log(dateFns.distanceInWords(now, before, {addSuffix: true}));
*/