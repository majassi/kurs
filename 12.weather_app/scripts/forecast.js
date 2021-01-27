// interagerer med API'en

// Denne kode er min API key. 
const key = 'dyQEOTdGVAwwIkXb4GPJOyDexvBlhgAz';

// Få vejr information
// Det er async, fordi vi kommer med anmodninger, og vi vil have dette til at returnerer en promise.
const getWeather = async (id) => {
  // Dette er base URL af API endpoint, som vi gerne vil lave en anmodning til.
  const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
  // Dette er querery parameter i en string.
  const query = `${id}?apikey=${key}`;

  // (fetch(base + query) bliver en promise, som vil løse den promise igennem response. 
  const response = await fetch(base + query);
   // Vi benytter os af json metoden på response og afleverer dataen til variablen data. 
  const data = await response.json();

  // Dette er en objekt omkring vejret.
  return data[0];

};

// Få by information
// Det er async, fordi vi kommer med anmodninger, og vi vil have dette til at returnerer en promise.
const getCity = async (city) => {
  // Dette er base URL af API endpoint, som vi gerne vil lave en anmodning til.
  const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
  // Dette er querery parameter i en string. Vi skriver id først, fordi i linket foroven er der rigtig en id efter V1/.
  const query = `?apikey=${key}&q=${city}`;

  // (fetch(base + query) bliver en promise, som vil løse den promise igennem response. 
  const response = await fetch(base + query);
  // Vi benytter os af json metoden på response og afleverer dataen til variablen data. 
  const data = await response.json();
// Dette er en objekt omkring byen.
  return data[0];
 // Sådan ser du alle byer med manchester. 
 // console.log(data);
};
// Sådan her får man data til Manchester 
/*
getCity('manchester')
  .then(data => console.log(data))
  .catch(err => console.log(err));
  */