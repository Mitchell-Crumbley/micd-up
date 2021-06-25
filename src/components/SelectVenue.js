import firebase from 'firebase/app';
import 'firebase/auth';
import { getVenue } from '../helpers/data/venueData';

const selectVenue = (showcaseObj = {}) => {
  let domString = `<label for="board">Select a Board</label>
  <select class="form-control" id="board" required>
  <option value="">Select a Board</option>`;

  getVenue(firebase.auth().currentUser.uid).then((venueArray) => {
    venueArray.forEach((venue) => {
      if (venue.firebaseKey === showcaseObj.venueID) {
        domString += `<option selected value="${venue.firebaseKey}">${venue.venueName}</option>`;
      } else {
        domString += `<option value="${venue.firebaseKey}">${venue.venueName}</option>`;
      }
    });
    domString += '</select>';
    document.querySelector('#select-showcase').innerHTML = domString;
  });
};

export default selectVenue;
