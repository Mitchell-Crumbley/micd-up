import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Card, CardText, CardImgOverlay, CardLink,
  CardTitle, CardImg
} from 'reactstrap';
import PropTypes from 'prop-types';
import { deleteShowcase, getShowcase } from '../helpers/data/showcaseData';
import ShowcaseForm from './ShowcaseForm';

const ShowcaseCards = ({
  user,
  firebaseKey,
  showcaseName,
  time,
  imgUrl,
  details,
  setShowcases,
  openMic,
  uid,
  venues,
  venueID,
  venueName
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
        deleteShowcase(firebaseKey, user)
          .then(setShowcases)
          .then(() => getShowcase(user))
          .then(setShowcases);
        break;
      case 'share':
        history.push(`showcase/${firebaseKey}`);
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
            {editing ? 'Close Form' : 'Edit Showcase'}
          </CardLink>
          <ShowcaseForm className='edit-form'
            formTitle='Edit Showcase'
            setShowcases={setShowcases}
            firebaseKey={firebaseKey}
            imgUrl={imgUrl}
            showcaseName={showcaseName}
            details={details}
            openMic={openMic}
            uid={uid}
            user={user}
            venues={venues}
            venueID={venueID}
            time={time}
            venueName={venueName}
          />
        </Card>
        </>
        : <Card className="m-4 board-card" inverse key={firebaseKey}>
            <div className="img-div">
              <CardImg className="card-img" width="100%" src={imgUrl} alt={showcaseName} />
            </div>
            <div className="overlay"></div>
            <CardImgOverlay>
            <div className="card-content">
              <CardTitle tag="h5">{showcaseName}</CardTitle>
              <CardText>{details}</CardText>
              {(openMic === true) && <CardText className="text-danger"><i className="fas fa-user-secret"></i> Open Mic</CardText>}
                  <CardLink href="#" onClick={() => handleCardButton('delete')}>Delete</CardLink>
                  <CardLink href="#" onClick={() => handleCardButton('share')}>Share</CardLink>
                  <CardLink href="#" onClick={() => handleCardButton('edit')}>
                  {editing ? 'Close Form' : 'Edit Showcase'}
                  </CardLink>
              </div>
            </CardImgOverlay>
          </Card>
      }
  </div>
  );
};

ShowcaseCards.propTypes = {
  firebaseKey: PropTypes.string.isRequired,
  time: PropTypes.string,
  showcaseName: PropTypes.string,
  details: PropTypes.string,
  imgUrl: PropTypes.string,
  openMic: PropTypes.bool,
  user: PropTypes.any,
  setShowcases: PropTypes.func,
  uid: PropTypes.any,
  venues: PropTypes.array,
  venueID: PropTypes.string,
  venueName: PropTypes.string
};

export default ShowcaseCards;
