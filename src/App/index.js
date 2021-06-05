import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import './App.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Routes from '../helpers/Routes';
import { getShowcase } from '../helpers/data/showcaseData';

function App() {
  // This hook maintains state of user in app, the absense of which resulting in the state of null
  const [user, setUser] = useState(null);
  const [showcase, setShowcases] = useState([]);

  // Authentication for Firebase on initial render
  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        const userObj = {
          fullName: authed.displayName,
          profileImage: authed.photoURL,
          uid: authed.uid,
          user: authed.email
        };
        setUser(userObj);
        getShowcase(userObj).then(setShowcases);
      } else if (user || user === null) {
        setUser(false);
      }
    });
  }, []);

  return (
    <>
     <Router>
      <NavBar user={user} setShowcases={setShowcases}/>
      <Routes
      user={user}
      showcase={showcase}
      setShowcases={setShowcases}
        />
      </Router>
    </>
  );
}

export default App;
