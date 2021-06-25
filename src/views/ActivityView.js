import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// import { Circle } from 'rc-progress';
// import AnimatedNumber from 'react-animated-number/build/AnimatedNumber';
import ActivityCards from '../components/ActivityCards';

const projStyle = {
  textAlign: 'center',
  color: 'white',
  textShadow: '2px 2px black',
  backgroundColor: '#00000080',
  paddingBottom: '25px',
  paddingTop: '25px',
  background: 'linear-gradient(to top,rgba(22,22,22,1) 10,rgba(22,22,22,25) 75%,#161616 100%), background: linear-gradient(to bottom,rgba(22,22,22,.1) 0,rgba(22,22,22,.5),',
  display: 'flex',
  flexFlow: 'row wrap',
};

export default function ActivityView({
  activity, user, setActivities, venues,
}) {
  const [search, setSearch] = useState('');
  const [filterShow, setFilterShow] = useState('');

  useEffect(() => {
    setFilterShow(
      activity.filter((anActivity) => anActivity.activityName.toLowerCase().includes(search.toLowerCase()))
    );
  }, [search, activity]);

  return (
    <div>
    <div className="form-group mb-4 d-flex justify-content-center">
      <input type="search" id="search" placeholder="Search by shows name..." aria-describedby="button-addon" className="form-control" onChange={(e) => setSearch(e.target.value)}/>
    </div>
    <div style={projStyle}>
        { filterShow.length === 0
          ? <div className="d-flex flex-column justify-content-center">
                <h5 className="text-center my-3">No Shows found with that name!</h5>
            </div>
          : <>
        {filterShow.map((activityObj) => (
          <>
          <ActivityCards
            key={activityObj.firebaseKey}
            firebaseKey={activityObj.firebaseKey}
            user={user}
            uid={activityObj.uid}
            setActivities={setActivities}
            venues={venues}
            {...activityObj}
          />
        </>
        ))}
        </>
        }
    </div>
  </div>
  );
}

ActivityView.propTypes = {
  activity: PropTypes.array,
  setActivities: PropTypes.func.isRequired,
  activityName: PropTypes.string,
  time: PropTypes.number,
  venues: PropTypes.array,
  user: PropTypes.any,
};
