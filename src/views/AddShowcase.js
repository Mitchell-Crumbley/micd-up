import React from 'react';
import PropTypes from 'prop-types';
import ShowcaseForm from '../components/ShowcaseForm';

function AddShowcase({ setShowcases, user, venues }) {
  return (
    <div>
      <ShowcaseForm
        formTitle='Add Showcase'
        setShowcases={setShowcases}
        user={user}
        venues={venues}
      />
    </div>
  );
}

AddShowcase.propTypes = {
  setShowcases: PropTypes.func.isRequired,
  user: PropTypes.any,
  venues: PropTypes.array.isRequired,
};

export default AddShowcase;
