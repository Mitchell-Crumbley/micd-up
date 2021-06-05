import React from 'react';
import PropTypes from 'prop-types';
import ShowcaseCards from '../components/ShowcaseCards';

export default function ShowcaseView({
  showcase, user, setShowcases
}) {
  return (
    <div className="showcase-container">
      {showcase.map((showcaseObj) => (
        <ShowcaseCards
          key={showcaseObj.firebaseKey}
          user={user}
          setShowcases={setShowcases}
          {...showcaseObj}
        />
      ))}
    </div>
  );
}

ShowcaseView.propTypes = {
  showcase: PropTypes.array,
  setShowcases: PropTypes.func.isRequired,
  user: PropTypes.any,
};
