import React from 'react';
import PropTypes from 'prop-types';
import ActivityForm from '../components/ActivityForm';

function AddActivity({ setActivities, user }) {
  return (
    <div>
      <ActivityForm
        formTitle='Add Activity'
        setActivities={setActivities}
        user={user}
      />
    </div>
  );
}

AddActivity.propTypes = {
  setActivities: PropTypes.func.isRequired,
  user: PropTypes.any,
};

export default AddActivity;
