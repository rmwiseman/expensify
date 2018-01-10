// import moment from 'moment';
import * as firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot
//       });
//     });
//     console.log(expenses);
//   });

// database.ref('expenses')
//   .on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot
//       });
//     });
//     console.log(expenses);
//   });

// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log('DELETED:', snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log('CHANGED:', snapshot.key, snapshot.val());
// });

// // Gets called for EXISTING and ADDED children
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log('ADDED:', snapshot.key, snapshot.val());
// });

// const now = new moment().valueOf();
// const expenses = [
//   {
//     description: 'First expense',
//     note: 'A',
//     amount: 1234,
//     createdAt: now
//   }, {
//     description: 'Second expense',
//     note: 'B',
//     amount: 2345,
//     createdAt: now
//   }, {
//     description: 'Third expense',
//     note: 'C',
//     amount: 3456,
//     createdAt: now
//   }, 
// ];

// expenses.forEach((expense) => {
//   database.ref('expenses').push(expense);
// });


// database.ref().set({
//   name: 'Me Myself',
//   age: 43,
//   stressLevel: 6,
//   location: {
//     city: 'Ipswich',
//     country: 'UK'
//   },
//   job: {
//     title: 'Software Developer',
//     company: 'Google'
//   }
// }).then(() => {
//   console.log('Data is saved');
// }).catch((e) => {
//   console.log('It failed: ', e);
// });

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'London'
// });

// database.ref().once('value')
//   .then((snapshot) => {
//     console.log(snapshot.val());
//   })
//   .catch((e) => {
//     console.log(e);
//   });

// const onValueChange = database.ref().on('value', (snapshot) => {
//   const d = snapshot.val();
//   console.log(`${d.name} is a ${d.job.title} at ${d.job.company}`);
// }, (e) => {
//   console.log('Error getting data: ', e);
// });

// setTimeout(() => {
//   database.ref().update({ name: 'Ricardo Wismano' });
// }, 3500);

// const onValueChange = database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val());
// }, (e) => {
//   console.log('Error fetching data: ', e);
// });

// setTimeout(() => {
//   database.ref('age').set(45);
// }, 3500);

// setTimeout(() => {
//   database.ref().off('value', onValueChange);
// }, 7000);

// setTimeout(() => {
//   database.ref('age').set(50);
// }, 10500);

// database.ref().update({
//   age: 43.5,
//   name: 'Still Me',
//   isSingle: null,
//   job: 'Software Developer'
// });

// database.ref('isSingle').remove().then(() => {
//   console.log('Removed, woohoo');
// }).catch((e) => {
//   console.log('Not removed: ', e);
// });