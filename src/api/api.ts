import firebase, { initializeApp } from "firebase/app";
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// import firebase from "firebase/app";
// import { Products } from "../types";

const firebaseConfig = {
      apiKey: "AIzaSyAys2vAc06I-V9Hm5pcNBuAda3CZHnKIGw",
      authDomain: "bejamas-7eb64.firebaseapp.com",
      projectId: "bejamas-7eb64",
      storageBucket: "bejamas-7eb64.appspot.com",
      messagingSenderId: "941049419768",
      appId: "1:941049419768:web:9ab079b2e012b7bd24280d",
      measurementId: "G-YE6K75RLCC"
    };

// Initialize Firebase
const productStore = initializeApp(firebaseConfig);
// const db = getFirestore(productStore);
// const productCol = collection(db, 'products');
// const citiesCol = collection(db, 'products');
//     const citySnapshot = getDocs(citiesCol);
//     console.log(citySnapshot, 'citySnapshot')

//     const database = firebase.database();
// async function getCities(db: any) {
//     alert('I was called')
//     const citiesCol = collection(db, 'products');
//     const citySnapshot = await getDocs(citiesCol);
//     console.log(citySnapshot, 'citySnapshot')
//     // const cityList = citySnapshot.docs.map(doc => doc.data());
//     // console.log(cityList, 'cityList')
//     // return cityList;
//   }
//   getCities(db);

// console.log(productStore, 'productStore')
// console.log(productCol, 'productCol')
// const snapshot = await firebase

export { productStore };
