import firebase from "firebase";
//import * as firebase from "firebase/app";
import React, {useEffect,useState} from "react";
//import "firebase/auth";
require('firebase/auth');

// app is firebaseapp
const config ={
    apiKey: "AIzaSyCR63igynnSAB69ypWZ7GXOndjzyfpYCP0",
    authDomain: "covidconnect-440d7.firebaseapp.com",
    databaseURL: "https://covidconnect-440d7.firebaseio.com",
    projectId: "covidconnect-440d7",
    storageBucket: "covidconnect-440d7.appspot.com",
    messagingSenderId: "979873456779",
    appId: "1:979873456779:web:a43b719f7d2b6b9d206a8e",
    measurementId: "G-5RGB6GJRK5"
  }


const app = firebase.initializeApp(config);
//const auth = app.auth();

export const db = app.firestore(); //added

// adding the stuff below
export const auth = firebase.auth(); //added


// stopped adding
export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [pending, setPending] = useState(true);
  
    useEffect(() => {
      app.auth().onAuthStateChanged((user) => {
        setCurrentUser(user)
        setPending(false)
      });
    }, []);
  
    if(pending){
      return <>Loading...</>
    }
  
    return (
      <AuthContext.Provider
        value={{
          currentUser
        }}
      >
        {children}
      </AuthContext.Provider>
    );
};
export default app;