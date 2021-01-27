/*
// object literals --
// Her har vi lavet en user med flere properties. 
let user = {
  name: 'crystal',
  age: 30,
  email: 'crystal@thenetninja.co.uk',
  location: 'berlin',
  blogs: ['why mac & cheese rules', '10 things to make with marmite']
};

// Denne kode viser os useren i console log
console.log(user);
// Denne kode viser os alderen i console log
console.log(user.age);

// Koderne forneden ændrer alderen fra 30 til 35
user.age = 35;
console.log(user.age);

// Denne kode viser os navnet Crystal i console log
console.log(user['name']);
// Koderne forneden ændrer navnet fra Crystal til chun-li
user['name'] = 'chun-li';
console.log(user['name']);

// Typeof operator viser os at useren er objekt type. 
console.log(typeof user);
*/


// object literals adding methods --
/*
let user = {
  name: 'crystal',
  age: 30,
  email: 'crystal@thenetninja.co.uk',
  location: 'berlin',
  blogs: ['why mac & cheese rules', '10 things to make with marmite'],
  // Dette er metoder til vores user.
  login: function(){
    console.log('the user logged in');
  },
  logout: function(){
    console.log('the user logged out');
  },
  logBlogs: function(){
    // Giver adgang til blogsne foroven
  }
};

user.login();
user.logout();
*/


/*
// object literals 'this' Keyword--
let user = {
  name: 'crystal',
  age: 30,
  email: 'crystal@thenetninja.co.uk',
  location: 'berlin',
  blogs: ['why mac & cheese rules', '10 things to make with marmite'],
  // Dette er forkortet regulær funktioner
  login(){
    console.log('the user logged in');
  },
  logout(){
    console.log('the user logged out');
  },
  logBlogs(){
   // Denne console log, kommer til at være øverst.
    console.log('this user has written these blogs:');
    // this henviser til user objektet, så får vi adgang til blogs og laver forEach metoden, som går ind og tager fra arrayen en af gangen. 
    this.blogs.forEach(blog => {
      console.log(blog);
    })
  }
};
// Vi logger functionen logblogs. 
user.logBlogs();
*/

/*
// objects in arrays --
let user = {
  name: 'crystal',
  age: 30,
  email: 'crystal@thenetninja.co.uk',
  location: 'berlin',
  blogs: [
    {title: 'why mac & cheese rules', likes: 30},
    {title: '10 things to make with marmite', likes: 50}
  ],
  login(){
    console.log('the user logged in');
  },
  logout(){
    console.log('the user logged out');
  },
  logBlogs(){
    // Denne console log, kommer til at være øverst.
    console.log('this user has written these blogs:');
    this.blogs.forEach(blog => {
      // Med denne kode console logger vi titlen og likesne ved at skrive blog med punktum.
      console.log(`${blog.title} has ${blog.likes} likes`);
    })
  }
};

user.logBlogs();
*/

/*
// Math object --
// Vi får adgang til matematik objekter og metoder i denne sektion
console.log(Math);
// Vi får adgang til matematik konstanten Pi, som er 3,14. 
console.log(Math.PI);
// Vi får adgang til matematik konstanten e, som er 2,71 
console.log(Math.E);

const area = 7.7;
// Runder op eller ned for area 
console.log(Math.round(area));
// Runder ned for area 
console.log(Math.floor(area));
// Runder op for area 
console.log(Math.ceil(area));
// Fjerner decimal for area 
console.log(Math.trunc(area));

// random numbers

const random = Math.random();

// random nummer er normalt mellem 0-1
console.log(random);
// Med denne kode, får vi random nummer til at være mellem 1-100
console.log(Math.round(random * 100));
*/


// primitive values --
/*
// Vi har en variabel scoreOne, som har valuen 50
// Så laver jeg en scoreTwo, som er lige med scoreOne.
// Der oprettes en kopi af valuen 50 og sepperer begge score på stack, fordi det er en primitiv value.
let scoreOne = 50;
let scoreTwo = scoreOne;
// Når man console logger begge score, så får man set deres values, som er 50 hver.
console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);
// Da de begge er separeret og gemt i stack, så vil det ikke gøre noget, hvis man ændrer den ene af dem.
// Her ændrer vi scoreOne 
scoreOne = 100;
// Når man console logger igen, så burde scoreOne være 100 og scoreTwo være 50 stadig.
console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

// reference values
// Koden her skal få userTwo til at få gemt userOnes objekt seperat i heap, 
// men dette kan ikke lade sig gøre 
userOne = { name: 'ryu', age: 30 };
userTwo = userOne;
console.log(userOne, userTwo);

// Vi prøver her at ændre på navnet på userOne. 
userOne.name = 'chun-li';
// Vi kan se i console log, at både userOne og userTwo nu hedder chun-li,
// som ikke var meningen, men sådan bliver valuesne gemt i heap.
console.log(userOne, userTwo);
*/