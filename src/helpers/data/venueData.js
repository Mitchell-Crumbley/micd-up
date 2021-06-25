import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbURL = firebaseConfig.databaseURL;

// Get Venues
const getVenue = (user) => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/venue.json?orderBy="uid"&equalTo="${user.uid}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

// Get Single Venue
const getSingleVenue = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/venue/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

// Create Venues
const createVenue = (obj, user) => new Promise((resolve, reject) => {
  axios.post(`${dbURL}/venue.json`, obj)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbURL}/venue/${response.data.name}.json`, body)
        .then(() => {
          getVenue(user).then((resp) => resolve(resp));
        });
    })
    .catch((error) => reject(error));
});

// Delete request
const deleteVenue = (firebaseKey, user) => new Promise((resolve, reject) => {
  axios.delete(`${dbURL}/venue/${firebaseKey}.json`)
    .then(() => getVenue(user).then((resp) => resolve(resp)))
    .catch((error) => reject(error));
});

const updateVenue = (venueObj, user) => new Promise((resolve, reject) => {
  axios.patch(`${dbURL}/venue/${venueObj.firebaseKey}.json`, venueObj)
    .then(() => getVenue(user).then((venueArray) => resolve(venueArray)))
    .catch((error) => reject(error));
});

export {
  getVenue, getSingleVenue, createVenue, deleteVenue, updateVenue
};
