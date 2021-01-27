// DOM manipulation.

// Refererer til form tagget.
const cityForm = document.querySelector('form');
// Refererer til classen card
const card = document.querySelector('.card');
// Refererer til classen details
const details = document.querySelector('.details');
// Refererer til img tagget og dens class time
const time = document.querySelector('img.time');
// Refererer til div classens icon og img inde i icon classen. 
const icon = document.querySelector('.icon img');

const updateUI = (data) => {
  // destructure properties
  const { cityDets, weather } = data;
 
  // update details template
  details.innerHTML = `
    <h5 class="my-3">${cityDets.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
      <span>${weather.Temperature.Metric.Value}</span>
      <span>&deg;C</span>
    </div>
  `;

  // opdater nat/dag & icon billeder
  // Koden her sørger for at vi får icons, når vi søger efter en by.
  const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
  icon.setAttribute('src', iconSrc);
  
    // Koden her sørger for at vi får enten dag eller aften billedet, når vi søger efter en by.
  const timeSrc = weather.IsDayTime ? 'img/day.svg' : 'img/night.svg';
  time.setAttribute('src', timeSrc);

  // remove the d-none class if present
  if(card.classList.contains('d-none')){
    card.classList.remove('d-none');
  }
};

const updateCity = async (city) => {

  // Koden 'getCity(city)' er en async function og returnerer promise
  // derfor benytter vi os af await, der skal sikre os at getCity(city) er færdig
  // så vi tildeler værdien til cityDets.
  const cityDets = await getCity(city);
  // Når vi har fået cityDets's værdi, som er en by, kan vi få vejret i den ny. 
  // Vi kalder de her functioner her fra denne her fil
  // fordi at forecast definere functionerne og inde på html er forecast øverst. 
  const weather = await getWeather(cityDets.Key);
  // Returnerer en objekt med 2 propperies.  
  return { cityDets, weather };

};

// Denne kode er til når brugeren søger efter en by. 
cityForm.addEventListener('submit', e => {
  // Sørger for siden ikke refresher
  e.preventDefault();
  
  // Få by's værdi 
  const city = cityForm.city.value.trim();
  // nulstille formen
  cityForm.reset(); 

  // Sørger for at opdatere byen
  updateCity(city)
    .then(data => updateUI(data))
    .catch(err => console.log(err));

  // set local storage
  localStorage.setItem('city', city);

});

if(localStorage.getItem('city')){
  updateCity(localStorage.getItem('city'))
    .then(data => updateUI(data))
    .catch(err => console.log(err));
}
 

