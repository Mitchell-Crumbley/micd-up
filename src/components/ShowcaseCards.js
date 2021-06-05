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
  uid
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
      case 'show-pins':
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
            {editing ? 'Close Form' : 'Edit Board'}
          </CardLink>
          <ShowcaseForm className='edit-form'
            formTitle='Edit Showcase'
            setShowcases={setShowcases}
            firebaseKey={firebaseKey}
            imgUrl={imgUrl}
            showcaseName={showcaseName}
            details={details}
            uid={uid}
            user={user}
            time={time}
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
                  <CardLink href="#" onClick={() => handleCardButton('delete')}>Delete</CardLink>
                  <CardLink href="#" onClick={() => handleCardButton('edit')}>
                  {editing ? 'Close Form' : 'Edit Board'}
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
  user: PropTypes.any,
  setShowcases: PropTypes.func,
  uid: PropTypes.any,
};

export default ShowcaseCards;
