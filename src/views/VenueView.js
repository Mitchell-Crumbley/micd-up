import React from 'react';
import PropTypes from 'prop-types';
import VenueCards from '../components/VenueCard';

export default function VenueView({
  venues, user, setVenues, setShowcases
}) {
  return (
    <div className="venue-container">
      {venues.map((venueObj) => (
        <VenueCards
          key={venueObj.firebaseKey}
          user={user}
          setShowcases={setShowcases}
          setVenues={setVenues}
          {...venueObj}
        />
      ))}
    </div>
  );
}

VenueView.propTypes = {
  venues: PropTypes.array,
  setVenues: PropTypes.func.isRequired,
  setShowcases: PropTypes.func.isRequired,
  user: PropTypes.any,
};
