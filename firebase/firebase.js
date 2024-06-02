import { initializeApp } from 'firebase/app'
import {
    getAuth,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendEmailVerification,
    //read data from Firebase    
} from "firebase/auth"
//ref = reference to a "collection"
import {
    getDatabase,
    ref as firebaseDatabaseRef,
    set as firebaseSet,
    child,
    get,
    onValue,
} from "firebase/database"

const firebaseConfig = {
    apiKey: "AIzaSyAbKYodyFAVrvH_SXzXnuEZZFLdE9mIjOc",
    authDomain: "movieticketbookingapp-be8cc.firebaseapp.com",
    databaseURL: "https://movieticketbookingapp-be8cc-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "movieticketbookingapp-be8cc",
    storageBucket: "movieticketbookingapp-be8cc.appspot.com",
    appId: '1:616033614474:android:f4f6abe14367721f37cb73',
    messagingSenderId: "616033614474",
}
const app = initializeApp(firebaseConfig)
const auth = getAuth()
const firebaseDatabase = getDatabase()
export {
    auth,
    firebaseDatabase,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    firebaseSet,
    firebaseDatabaseRef,
    sendEmailVerification,
    child,
    get,
    onValue, //reload when online DB changed
    signInWithEmailAndPassword,
}