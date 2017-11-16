import * as firebase from 'firebase';

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

/*

    Below is for referance only

*/

// database.ref('expenses')
//     .once('value')
//     .then( (snapshot) => {
//         const expenses = [];
//         snapshot.forEach( (childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//         console.log(expenses);
//     });

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach( (childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses);
// });

// //child_removed
// //on child removed
// database.ref('expenses').on('child_removed',(snapshot) => {
//     console.log(snapshot.key,snapshot.val());
// });

// //child_changed
// //on child changed
// database.ref('expenses').on('child_changed',(snapshot) => {
//     console.log(snapshot.key,snapshot.val());
// });

// child_added
// on child added
database.ref('expenses').on('child_added',(snapshot) => {
    console.log(snapshot.key,snapshot.val());
});
// database.ref('expenses').push({
//     description: 'Rent',
//     note: '',
//     amount: 109500,
//     createdAt: 976123498763
// });

// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job} at ${val.location.city}`);
// });

// database.ref().once('value')
// .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
// })
// .catch((error) => {
//     console.log("error fetching data", error);  
// });

// database.ref().set({
//     name: 'Matthew Mallimo',
//     age: 23,
//     isSingle: false,
//     location: {
//         city: 'Coral Springs',
//         country: 'United States'
//     }
// }).then( () => {
//     console.log('Data is saved');
// }).catch((error) => {
//     console.log(error);
// });

// //database.ref().set('This is my data');

// database.ref('age').set(27);
// database.ref('location/city').set('Miami');
// database.ref('attributes').set({
//     height: 110,
//     weight: 250
// });

// database.ref().update({
//     name: 'nuta',
//     age: 25,
//     job: 'Software Developer'
// });



// database.ref()
// .remove()
// .then( () => console.log('Data is removed'))
// .catch( (e) => console.log('Did not remove data', e));