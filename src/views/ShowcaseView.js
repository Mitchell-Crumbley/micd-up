import React from 'react';
import PropTypes from 'prop-types';
import ShowcaseCards from '../components/ShowcaseCards';
import Search from './Search';

export default function ShowcaseView({
  showcases, user, setShowcases, venues
}) {
  return (
    <div>
      <Search></Search>
      <div className="showcase-container">
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
    </div>
  );
}

ShowcaseView.propTypes = {
  showcases: PropTypes.array,
  setShowcases: PropTypes.func.isRequired,
  venues: PropTypes.array,
  user: PropTypes.any,
};
