// Refererer til ul tagget.
const list = document.querySelector('ul');
// Refererer til form tagget.
const form = document.querySelector('form');

// Når vi kalder recipe, så får vi datoen for hver note og opretter html template.
const addRecipe = (recipe, id) => {
  let time = recipe.created_at.toDate();
  let html = `
    <li data-id="${id}">
      <div>${recipe.title}</div>
      <div><small>${time}</small></div>
      <button class="btn btn-danger btn-sm my-2">delete</button>
    </li>
  `;
  // Tilføjer koden foroven til ul. 
  list.innerHTML += html;
};

// get documents
// recipes refererer til firebase(Asyns).
db.collection('recipes').get().then(snapshot => {
  // Vi benytter os af forEach, for at se data for hvert document.
  snapshot.docs.forEach(doc => {
    // dette giver os dataen og id'en for hver recipe vi tilføjer. 
    addRecipe(doc.data(), doc.id);
  });
}).catch(err => {
  console.log(err);
});


/*
// Real time listener
// Sletter noten i hjemmesiden. 
const deleteRecipe = (id) => {
  // recipes refererer til alle li tags.
  const recipes = document.querySelectorAll('li');
  // Vi benytter os af en forEach metoden til hver li tags.
  recipes.forEach(recipe => {
    // Hvis tagget data-id er lig med id
    if(recipe.getAttribute('data-id') === id){
      // Så slet vi li tagget. 
      recipe.remove();
    }
  });
};
// Koden her tager en onSnapshot af recipes og affyrer en callback function.
db.collection('recipes').onSnapshot(snapshot => {
  // så vi kan se alle docs ændringer. 
  console.log(snapshot.docChanges());
  // Denne kode laver os gå igennem hver ændring.
  snapshot.docChanges().forEach(change => {
    // const dock er lig med change.doc, og det giver os dokumentet.
    const doc = change.doc;
    // Hvis ædringstypen er tilføjet
    if(change.type === 'added'){
      // Så tilføjer vi data og id'en for hvert document til addRecipe function. 
      addRecipe(doc.data(), doc.id)
      // Hvis ændringen er fjernet.
    } else if (change.type === 'removed'){
      // så sletter vi recipes. 
      deleteRecipe(doc.id);
    }
  });
});
*/

// save documents
// Tilføjer submit event til form. 
form.addEventListener('submit', e => {
  // Sørger for siden ikke refresher. 
  e.preventDefault();

  // Vi tilføjer datoen for nu til variablen now.
  const now = new Date();
  // Opretter et objekt og kalden den recipe.
  const recipe = {
    // Hvad end brugeren indtaster er title. 
    title: form.recipe.value,
    // Sørger for at lave en Timestamp af datoen for nu.
    created_at: firebase.firestore.Timestamp.fromDate(now)
  };
  // Vi refererer til recipes i collection og tilføjer recipe. Dette er Async.
  db.collection('recipes').add(recipe).then(() => {
    // Viser at noten er tilføjet i consol log.
    //console.log('recipe added');
    // Fjerner din søgning fra feltet efter du har søgt. 
    form.reset();
  }).catch(err => {
    console.log(err);
  });
});

// Sletter data via button knappen
list.addEventListener('click', e => {
  // Hvis tagget vi klikker på, på siden er lige med BUTTON.
  if(e.target.tagName === 'BUTTON'){
    // Hvis man klikker på button, så tager den parenten, som er li og sletter id.
    const id = e.target.parentElement.getAttribute('data-id');
    // Refererer til recipes document og sletter id'en fra den button du har valgt.  
    db.collection('recipes').doc(id).delete().then(() => {
    });
  }
});