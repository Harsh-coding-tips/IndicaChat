// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyDuHaSAVYgN0S9UYVJLhJ_NA4na3phVZaY',
	authDomain: 'indicachat.firebaseapp.com',
	projectId: 'indicachat',
	storageBucket: 'indicachat.appspot.com',
	messagingSenderId: '584614178352',
	appId: '1:584614178352:web:16150ec7b892bf55b847f5',
	measurementId: 'G-4Y5VXWLMHQ'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
