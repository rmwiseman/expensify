// Object destructuring

const person = {
  name: 'Andrew',
  age: 26,
  location: {
    city: 'Philadelphia',
    temp: 92
  }
};

const { name: theName = 'Anonymous', age } = person;

// Same as:
// const name = person.name;
// const age = person.age;

console.log(`${theName} is ${age}.`);
const { temp: temperature, city } = person.location;
if (temperature && city) {
  console.log(`It's ${temperature} in ${city}.`);
}

const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
  publisher: {
    name: 'Penguin'
  }
};

const { name: publisherName = 'Self-Published' } = book.publisher;
console.log(publisherName);

// Array destructuring

const address = [
  '347 Main Road',
  'Martlesham Heath',
  'Ipswich',
  'IP5 2QU'
];

const [, town, city2 = 'Norwich'] = address;

console.log(`You are in ${town}, ${city2}.`);

const item = [
  'Coffee (hot)', '£2.00', '£2.50', '£2.75'
];

const [drink, , price] = item;
console.log(`A ${drink} costs ${price}.`);