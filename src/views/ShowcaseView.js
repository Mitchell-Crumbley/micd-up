import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ShowcaseCards from '../components/ShowcaseCards';
import SearchBar from './SearchBar';

export default function ShowcaseView({
  showcases, user, setShowcases, venues
}) {
  const [search, setSearch] = useState('');
  const [filterShow, setFilterShow] = useState('');

  useEffect(() => {
    setFilteredData(
      restaurants.filter((restaurant) => restaurant.name.toLowerCase().includes(search.toLowerCase()))
    );
  }, [search, restaurants]);
  return (
    <div>
        <div className="form-group mb-4 d-flex justify-content-center">
         <input type="search" id="search" placeholder="Search by shows name..." aria-describedby="button-addon" className="form-control" onChange={(e) => setSearch(e.target.value)}/>
        </div>
        {showcases.map((showcaseObj) => (
          <ShowcaseCards
            key={showcaseObj.firebaseKey}
            firebaseKey={showcaseObj.firebaseKey}
            user={user}
            uid={showcaseObj.uid}
            setShowcases={setShowcases}
            venues={venues}
            {...showcaseObj}
          />
        ))}
      </div>
  );
}

ShowcaseView.propTypes = {
  showcases: PropTypes.array,
  setShowcases: PropTypes.func.isRequired,
  venues: PropTypes.array,
  user: PropTypes.any,
};
