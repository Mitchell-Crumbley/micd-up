import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Card, CardText, CardImgOverlay, CardLink,
  CardTitle,
  CardImg,
} from 'reactstrap';
import PropTypes from 'prop-types';
import { deleteActivity, getActivity } from '../helpers/data/activityData';
import ActivityForm from './ActivityForm';
import Writing from '../assets/Writing.jpg';

const ActivityCards = ({
  user,
  firebaseKey,
  activityName,
  time,
  notes,
  setActivities,
  uid,
}) => {
  const [editing, setEditing] = useState(false);
  const history = useHistory();

  const handleCardButton = (type) => {
    switch (type) {
      case 'edit':
        console.warn(user);
        setEditing((prevState) => !prevState);
        break;
      case 'delete':
        deleteActivity(firebaseKey, user)
          .then(setActivities)
          .then(() => getActivity(user))
          .then(setActivities);
        break;
      case 'share':
        history.push(`activity/${firebaseKey}`);
        break;
      default:
        console.warn('No button clicked');
    }
  };

  return (
    <div>
      {
      editing ? <>
      <Card className="m-4 board-card">
          <CardLink className="form-close" href="#" onClick={() => handleCardButton('edit')}>
            {editing ? 'Close Form' : 'Edit Activity'}
          </CardLink>
          <ActivityForm className='edit-form'
            formTitle='Edit Activity'
            setActivities={setActivities}
            firebaseKey={firebaseKey}
            activityName={activityName}
            notes={notes}
            uid={uid}
            user={user}
            time={time}
          />
        </Card>
        </>
        : <Card className="m-4 board-card" inverse key={firebaseKey}>
            <div className="img-div">
              <CardImg className="card-img" width="100%" src={Writing} alt={activityName} />
            </div>
            <div className="overlay"></div>
            <CardImgOverlay>
            <div className="card-content">
              <CardTitle tag="h5">{activityName}</CardTitle>
              <CardText>{notes}</CardText>
              <CardText>{time}</CardText>
                  <CardLink href="#" onClick={() => handleCardButton('delete')}>Delete</CardLink>
                  <CardLink href="#" onClick={() => handleCardButton('share')}>Share</CardLink>
                  <CardLink href="#" onClick={() => handleCardButton('edit')}>
                  {editing ? 'Close Form' : 'Edit Activity'}
                  </CardLink>
              </div>
            </CardImgOverlay>
          </Card>
      }
  </div>
  );
};

ActivityCards.propTypes = {
  firebaseKey: PropTypes.string.isRequired,
  time: PropTypes.number,
  activityName: PropTypes.string,
  notes: PropTypes.string,
  user: PropTypes.any,
  setActivities: PropTypes.func,
  uid: PropTypes.any,
};

export default ActivityCards;
