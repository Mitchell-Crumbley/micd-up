import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbURL = firebaseConfig.databaseURL;

// Get Showcases
const getShowcase = (user) => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/showcase.json?orderBy="uid"&equalTo="${user.uid}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

// Get Single Showcase
const getSingleShowcase = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/showcase/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

// Create Showcases
const createShowcase = (obj, user) => new Promise((resolve, reject) => {
  axios.post(`${dbURL}/showcase.json`, obj)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbURL}/showcase/${response.data.name}.json`, body)
        .then(() => {
          getShowcase(user).then((resp) => resolve(resp));
        });
    })
    .catch((error) => reject(error));
});

// Delete request
const deleteShowcase = (firebaseKey, user) => new Promise((resolve, reject) => {
  axios.delete(`${dbURL}/showcase/${firebaseKey}.json`)
    .then(() => getShowcase(user).then((resp) => resolve(resp)))
    .catch((error) => reject(error));
});

const updateShowcase = (obj, user) => new Promise((resolve, reject) => {
  axios.patch(`${dbURL}/showcase/${obj.firebaseKey}.json`, obj)
    .then(() => getShowcase(user).then((resp) => resolve(resp)))
    .catch((error) => reject(error));
});

export {
  getShowcase, getSingleShowcase, createShowcase, deleteShowcase, updateShowcase
};
