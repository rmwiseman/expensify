import { setTimeout } from "timers";

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      message: 'This is my resolved data'
    });
    // reject('error happened');
  }, 5000);
});

console.log('before');

promise.then((data) => {
  console.log(data);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('This is my other promise');
    }, 5000);
  });;
}).then((str) => {
  console.log('Does this run?', str);
}).catch((error) => {
  console.log('error: ', error);
});

console.log('after');