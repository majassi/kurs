// Forms & Form Events
// Reference til classen .signup-form
const form = document.querySelector('.signup-form');
// Reference til classen .feedback
const feedback = document.querySelector('.feedback');
// Regular expressions patterns 
const usernamePattern = /^[a-zA-Z]{6,12}$/;

// 'submit' vil indsende dataene i formularen
form.addEventListener('submit', e => {
  // Koden her stopper siden i at refreshe. 
  e.preventDefault();

  // Hvis man har refereret til sin form og skal referere til inputs, kan man gøre dette.
  const username =  form.username.value;

  // usernme fra form.username.value;
  if(usernamePattern.test(username)){
    // giver teksten that username is valid! under submit knappen
    feedback.textContent = 'that username is valid!'
  } else {
     // giver teksten username must contain only letters & be between 6 & 12 characters under submit knappen
    feedback.textContent = 'username must contain only letters & be between 6 & 12 characters';
  }
});

// live feedback
// Keyup = tage tasten op. 
form.username.addEventListener('keyup', e => {
  // denne kode tester usernamePattern, dataen som brugeren indtaster.
  if(usernamePattern.test(e.target.value)){
    // Denne kode tilføjer en classen success til inputten, hvor id usernamen er.
    form.username.setAttribute('class', 'success');
  } else {
    // Denne kode tilføjer en classen error til inputten, hvor id usernamen er.
    form.username.setAttribute('class', 'error');
  }
});

// Vi har valgt 'submit', fordi den indsender dataene i formularen.
form.addEventListener('submit', e => {
// Koden her stopper siden i at refreshe. 
  e.preventDefault();
// Når du trykker submit, kommer værdien til console log.
  console.log(form.username.value);
});

