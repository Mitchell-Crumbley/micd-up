import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbURL = firebaseConfig.databaseURL;

// Get Activity
const getActivity = (user) => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/activity.json?orderBy="uid"&equalTo="${user.uid}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

// Get Single Activity
const getSingleActivity = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/activity/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

// Create Activity
const createActivity = (obj, user) => new Promise((resolve, reject) => {
  axios.post(`${dbURL}/activity.json`, obj)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbURL}/activity/${response.data.name}.json`, body)
        .then(() => {
          getActivity(user).then((resp) => resolve(resp));
        });
    })
    .catch((error) => reject(error));
});

// Delete request
const deleteActivity = (firebaseKey, user) => new Promise((resolve, reject) => {
  axios.delete(`${dbURL}/activity/${firebaseKey}.json`)
    .then(() => getActivity(user).then((resp) => resolve(resp)))
    .catch((error) => reject(error));
});

const updateActivity = (activityObj, user) => new Promise((resolve, reject) => {
  axios.patch(`${dbURL}/activity/${activityObj.firebaseKey}.json`, activityObj)
    .then(() => getActivity(user).then((activityArray) => resolve(activityArray)))
    .catch((error) => reject(error));
});

export {
  getActivity, getSingleActivity, createActivity, deleteActivity, updateActivity
};
