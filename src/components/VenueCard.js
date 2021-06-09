import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Card, CardText, CardImgOverlay, CardLink,
  CardTitle, CardImg
} from 'reactstrap';
import PropTypes from 'prop-types';
import { deleteVenue, getVenue } from '../helpers/data/venueData';
import VenueForm from './VenueForm';

const VenueCards = ({
  user,
  firebaseKey,
  venueImg,
  venueName,
  location,
  uid,
  setVunues
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
        deleteVenue(firebaseKey, user)
          .then(setVunues)
          .then(() => getVenue(user))
          .then(setVunues);
        break;
      case 'share':
        history.push(`venue/${firebaseKey}`);
        break;
      default:
        console.warn('No button clicked');
    }
  };

  return (
    <div>
      {
      editing ? <>
      <Card className="m-4 venue-card">
          <CardLink className="form-close" href="#" onClick={() => handleCardButton('edit')}>
            {editing ? 'Close Form' : 'Edit Venue'}
          </CardLink>
          <VenueForm className='edit-form'
            formTitle='Edit Venue'
            setVunues={setVunues}
            firebaseKey={firebaseKey}
            venueImg={venueImg}
            venueName={venueName}
            location={location}
            uid={uid}
            user={user}
          />
        </Card>
        </>
        : <Card className="m-4 venue-card" inverse key={firebaseKey}>
            <div className="img-div">
              <CardImg className="card-img" width="100%" src={venueImg} alt={venueName} />
            </div>
            <div className="overlay"></div>
            <CardImgOverlay>
            <div className="card-content">
              <CardTitle tag="h5">{venueName}</CardTitle>
              <CardText>{location}</CardText>
                  <CardLink href="#" onClick={() => handleCardButton('delete')}>Delete</CardLink>
                  <CardLink href="#" onClick={() => handleCardButton('share')}>Show More</CardLink>
                  <CardLink href="#" onClick={() => handleCardButton('edit')}>
                  {editing ? 'Close Form' : 'Edit Venue'}
                  </CardLink>
              </div>
            </CardImgOverlay>
          </Card>
      }
  </div>
  );
};

VenueCards.propTypes = {
  firebaseKey: PropTypes.string.isRequired,
  location: PropTypes.string,
  venueName: PropTypes.string,
  venueImg: PropTypes.string,
  user: PropTypes.any,
  setVunues: PropTypes.func,
  uid: PropTypes.any,
};

export default VenueCards;
