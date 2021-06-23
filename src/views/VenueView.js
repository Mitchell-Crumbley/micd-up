import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import VenueCards from '../components/VenueCard';

export default function VenueView({
  venues, user, setVenues
}) {
  const [search, setSearch] = useState('');
  const [filterVenue, setFilterVenue] = useState('');

  useEffect(() => {
    setFilterVenue(
      venues.filter((venue) => venue.venueName.toLowerCase().includes(search.toLowerCase()))
    );
  }, [search, venues]);
  return (
    <>
    <div className="form-group mb-4 d-flex justify-content-center">
         <input type="search" id="search" placeholder="Search by shows name..." aria-describedby="button-addon" className="form-control" onChange={(e) => setSearch(e.target.value)}/>
    </div>
    <div className="venue-container">
      { filterVenue.length === 0
        ? <div className="d-flex flex-column justify-content-center">
                <h5 className="text-center my-3">No Venues found with that name!</h5>
            </div>
        : <>
      {filterVenue.map((venueObj) => (
        <VenueCards
          key={venueObj.firebaseKey}
          user={user}
          setVenues={setVenues}
          {...venueObj}
        />
      ))}
      </>
      }
    </div>
  </>
  );
}

VenueView.propTypes = {
  venues: PropTypes.array,
  setVenues: PropTypes.func.isRequired,
  user: PropTypes.any,
};
