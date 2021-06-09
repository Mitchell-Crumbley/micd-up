import React from 'react';
import PropTypes from 'prop-types';
import VenueForm from '../components/VenueForm';

function AddVenue({ setVenues, user }) {
  return (
    <div>
      <VenueForm
        formTitle='Add Venue'
        setVenues={setVenues}
        user={user}
      />
    </div>
  );
}

AddVenue.propTypes = {
  setVenues: PropTypes.func.isRequired,
  user: PropTypes.any
};

export default AddVenue;
