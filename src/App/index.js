import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import './App.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Routes from '../helpers/Routes';
import { getShowcase } from '../helpers/data/showcaseData';
import { getVenue } from '../helpers/data/venueData';
import { getActivity } from '../helpers/data/activityData';

function App() {
  // This hook maintains state of user in app, the absense of which resulting in the state of null
  const [user, setUser] = useState(null);
  const [showcases, setShowcases] = useState([]);
  const [venues, setVenues] = useState([]);
  const [activity, setActivities] = useState([]);

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
        getVenue(userObj).then(setVenues);
        getActivity(userObj).then(setActivities);
      } else if (user || user === null) {
        setUser(false);
      }
    });
  }, []);

  return (
    <>
     <Router>
      <NavBar user={user} setShowcases={setShowcases} setVenues={setVenues} setActivities={setActivities}/>
      <Routes
      user={user}
      showcases={showcases}
      setShowcases={setShowcases}
      venues={venues}
      setVenues={setVenues}
      activity={activity}
      setActivities={setActivities}
        />
      </Router>
    </>
  );
}

export default App;
