import axios from 'axios';
import firebaseConfig from './apiKeys';

const dbURL = firebaseConfig.databaseURL;

const sortedArray = (showcases) => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/showcase.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
  const array = [{ showcases }];
  const sortArray = array.sort((a, b) => a.valueOf() - b.valueOf());
  console.warn(sortArray);
});

export default sortedArray;
