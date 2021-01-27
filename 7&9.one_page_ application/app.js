// Note application 
const todosToggle = () => {
  let x = document.querySelector(".container");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
};

const quizToggle = () => {
  let y = document.querySelector(".quizContainer");
  if (y.style.display === "none") {
    y.style.display = "block";
  } else {
    y.style.display = "none";
  }
};

//Quiz
// Refererer til de rigtige svar, som er b.
const correctAnswers = ['B', 'B', 'B', 'B'];
// Refererer til classen quiz-form
const form = document.querySelector('.quiz-form');
// Refererer til classen result
const result = document.querySelector('.result');

// 'submit' vil indsende dataene i formularen
form.addEventListener('submit', e => {
// Koden her stopper siden i at refreshe. 
  e.preventDefault();

  // Her sætter vi score til 0
  let score = 0;
  // Her refererer vi til name i formen i html. Value er når man klikker på svaret i browseren.
  const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

// Her tjekker vi svarene via forEach metoden. answer er den værdi, som vi gentager hver gang og index er deres position, så 1, 2, 3 og 4. 
  userAnswers.forEach((answer, index) => {
    // Hvis brugerem svarer rigtigt på spørgsmålene, så vil der tilføjes en score på 25.
    if (answer === correctAnswers[index]){
      score += 25;
    }
  });

// Vis resultatet. 
// Denne metode scroller til top, når submit er trykket.
  scrollTo(0, 0);
  // Denne kode fjerner classen d-none fra result, så vi kan se resultatet. 
  result.classList.remove('d-none');

  // output er skrivet med let og har værdien 0, fordi det er en værdi der kan ændre sig senere hen. 
  let output = 0;
  // Første step til at stoppe en interval er ved at sætte den i en variabel. 
  const timer = setInterval(() => {
    // Med koden her kan vi ændrer 0%.
    result.querySelector('span').textContent = `${output}%`;
    // hvis output er lig med scoren, som kan være 25, 50, 75 eller 100, så vil vi rydde intervallen.
    if(output === score){
      // denne metode stopper intervallen. 
      clearInterval(timer);
       // ellers hvis den endnu ikke er nået scoren, så tager vi output og tilføjer en til den.
    } else {
      output++;
    }
    // Vi sætter intervallen til 10 millisekunder
  }, 10);
});


// Note app
// Refererer til classen add. 
const addForm = document.querySelector('.add');
// Refererer til classen todos.
const list = document.querySelector('.todos');
// Refererer til search og input inden i den. 
const search = document.querySelector('.search input');

  // Vi sætter generateTemplate til en function.
const generateTemplate = todo => {
// Dette er vores html template
    const html = ` 
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
      </li>
    `;

    // Denne her kode tilføjer html'en til list, som vil lave en li tag i todos classen.
    list.innerHTML += html;
};

// 'submit' vil indsende dataene i formularen
addForm.addEventListener('submit', e => {
   // Koden her stopper siden i at refreshe. 
    e.preventDefault();
    // Denne metode sørger for at der ikke kommer mellemrum før teksten og efter teksten i 'Tilføj en ny todo...'
    const todo = addForm.add.value.trim();

    // Dette er koden hvor brugeren skriver en note. Brugeren kan ikke indtaste mellemrum, fordi det giver 0 og length er jo positiv. 
    if(todo.length){
        generateTemplate(todo);
        // Denne kode sørger for at slette teksten i input feltet, når du har søgt. 
        addForm.reset();
    }
});

// Slette todos
// Vi tilføjer en click event til list. 
list.addEventListener('click', e => {
  // hvis class list over det element, vi klikker på, indeholder delete, så har vi klikket på trash iconet. 
    if(e.target.classList.contains('delete')){
      // Det vil så få slettet parentElement af i tagget, som er li tagget. 
        e.target.parentElement.remove();
    }
});

//Search 
// Funtionen hedder filterTodos. Vi laver en callback function for det hele?
const filterTodos = (term) => {

// vi konverterer list.children til en array.  
 Array.from(list.children)
 // Vi chainer 2 metoder sammen, som er filter og forEach.
 // Vi benytter os af filter metoden, så vi kan filtrer ud de ord som ikke matcher med det man søger efter. 
 .filter((todo) => !todo.textContent.toLowerCase().includes(term))
 // Koden her tager hvert ord som ikke matcher med det vi skriver i søgefeltet og giver det en filtered class. 
 .forEach((todo) => todo.classList.add('filtered')) 

  // vi har stadig konverteret list.children til en array.  
  Array.from(list.children)
  // Her benytter vi os af filter metoden, så vi kan filtrer de ord som matcher med det man søger efter. 
  .filter((todo) => todo.textContent.toLowerCase().includes(term))
  // Koden her tager hvert ord som matcher med det vi skriver i søgefeltet og fjerner classen filtered.
  .forEach((todo) => todo.classList.remove('filtered')) 
};

// Vi tilføjer keyup eventen til search og kører en callback function. 
search.addEventListener('keyup', () => {
  // Med denne kode får vi værdien af search og benytter os af trim metoden(ingen mellemrum)
  const term = search.value.trim().toLowerCase();
  filterTodos(term);
});

